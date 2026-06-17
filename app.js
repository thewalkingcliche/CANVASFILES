const els = {
  caseSelect: document.getElementById("caseSelect"),
  difficultySelect: document.getElementById("difficultySelect"),
  modeSelect: document.getElementById("modeSelect"),
  apiKeyBox: document.getElementById("apiKeyBox"),
  apiKey: document.getElementById("apiKey"),
  startBtn: document.getElementById("startBtn"),
  endBtn: document.getElementById("endBtn"),
  exportBtn: document.getElementById("exportBtn"),
  chatWindow: document.getElementById("chatWindow"),
  chatForm: document.getElementById("chatForm"),
  studentInput: document.getElementById("studentInput"),
  sendBtn: document.getElementById("sendBtn"),
  sessionTitle: document.getElementById("sessionTitle"),
  sessionMeta: document.getElementById("sessionMeta"),
  feedbackDialog: document.getElementById("feedbackDialog"),
  feedbackContent: document.getElementById("feedbackContent"),
  closeFeedback: document.getElementById("closeFeedback")
};

let state = {
  active: false,
  selectedCase: null,
  transcript: [],
  askedAreas: new Set(),
  demoTurn: 0
};

function init() {
  CASES.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = c.title;
    els.caseSelect.appendChild(opt);
  });
  els.modeSelect.addEventListener("change", toggleApiKeyBox);
  els.startBtn.addEventListener("click", startInterview);
  els.chatForm.addEventListener("submit", handleSend);
  els.endBtn.addEventListener("click", endInterview);
  els.exportBtn.addEventListener("click", exportTranscript);
  els.closeFeedback.addEventListener("click", () => els.feedbackDialog.close());
}

function toggleApiKeyBox() {
  els.apiKeyBox.classList.toggle("hidden", els.modeSelect.value !== "openai");
}

function startInterview() {
  const selected = CASES.find(c => c.id === els.caseSelect.value);
  state = { active: true, selectedCase: selected, transcript: [], askedAreas: new Set(), demoTurn: 0 };
  els.chatWindow.innerHTML = "";
  els.sessionTitle.textContent = selected.title;
  els.sessionMeta.textContent = selected.visibleProfile;
  els.studentInput.disabled = false;
  els.sendBtn.disabled = false;
  els.endBtn.disabled = false;
  els.exportBtn.disabled = false;
  addMessage("system", "System", `Case started. ${selected.visibleProfile}`);
  addMessage("client", "Client", selected.opening);
  state.transcript.push({ role: "client", content: selected.opening });
  els.studentInput.focus();
}

async function handleSend(event) {
  event.preventDefault();
  const text = els.studentInput.value.trim();
  if (!text || !state.active) return;

  els.studentInput.value = "";
  addMessage("student", "Student", text);
  state.transcript.push({ role: "student", content: text });
  markAskedAreas(text);

  els.sendBtn.disabled = true;
  els.studentInput.disabled = true;

  try {
    const reply = els.modeSelect.value === "openai" ? await getOpenAIReply() : getDemoReply(text);
    addMessage("client", "Client", reply);
    state.transcript.push({ role: "client", content: reply });
  } catch (err) {
    addMessage("system", "System", `AI mode failed: ${err.message}. Switch to Demo mode or check the API key.`);
  } finally {
    els.sendBtn.disabled = false;
    els.studentInput.disabled = false;
    els.studentInput.focus();
  }
}

function addMessage(type, role, content) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerHTML = `<div class="role">${role}</div><div>${escapeHtml(content)}</div>`;
  els.chatWindow.appendChild(div);
  els.chatWindow.scrollTop = els.chatWindow.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, tag => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[tag]));
}

function markAskedAreas(text) {
  const t = text.toLowerCase();
  if (/(feel|emotion|mood|sad|anxious|worry|stress)/.test(t)) state.askedAreas.add("emotion");
  if (/(when|start|onset|began|begin|long|duration|frequency|often)/.test(t)) state.askedAreas.add("onset-frequency");
  if (/(sleep|appetite|eat|body|palpitation|breath|fatigue|symptom)/.test(t)) state.askedAreas.add("symptoms");
  if (/(school|work|family|relationship|daily|function|impact|routine)/.test(t)) state.askedAreas.add("functioning");
  if (/(cope|manage|deal|support|friend|family|help)/.test(t)) state.askedAreas.add("coping-support");
  if (/(suicid|self-harm|harm yourself|hurt yourself|end your life|not wake up|safety)/.test(t)) state.askedAreas.add("risk");
  if (/(summar|correct|understand|next|close|before we end)/.test(t)) state.askedAreas.add("summary-closure");
}

function getDemoReply(question) {
  const c = state.selectedCase;
  const t = question.toLowerCase();
  state.demoTurn += 1;
  const difficulty = els.difficultySelect.value;
  const guarded = difficulty === "advanced";
  const partial = difficulty === "intermediate" || guarded;

  if (/(suicid|self-harm|harm yourself|hurt yourself|end your life|not wake up|safety)/.test(t)) {
    return c.hidden.risk;
  }
  if (/(when|start|onset|began|begin|long|duration|frequency|often)/.test(t)) {
    return guarded ? "It has been going on for a while. I did not think it was serious at first." : c.hidden.onset;
  }
  if (/(trigger|cause|situation|happen|before)/.test(t)) {
    return partial ? `It usually happens around ${c.hidden.triggers.slice(0, 2).join(" and ")}.` : `The main triggers are ${c.hidden.triggers.join(", ")}.`;
  }
  if (/(symptom|body|physical|sleep|appetite|palpitation|breath|fatigue|concentrat)/.test(t)) {
    return partial ? `Mostly ${c.hidden.symptoms.slice(0, 3).join(", ")}. Sometimes I try to ignore it.` : `I experience ${c.hidden.symptoms.join(", ")}.`;
  }
  if (/(school|work|family|relationship|daily|function|impact|routine|grade|task)/.test(t)) {
    return c.hidden.functioning;
  }
  if (/(support|friend|family|talk|help|cope|manage)/.test(t)) {
    return c.hidden.supports;
  }
  if (/(tell me more|explain|what do you mean|can you share)/.test(t)) {
    return guarded ? "I’m not sure how to explain it. I just know it feels heavy and I keep it to myself." : "It feels like I know I should function normally, but my mind keeps going back to the same worries.";
  }
  if (/(hello|hi|good morning|good afternoon|good evening|start)/.test(t)) {
    return "Hi. I’m a little nervous, but I’ll try to answer.";
  }
  if (state.demoTurn < 3) return "I think it has been affecting me more than I admit. I usually try to push through it.";
  if (state.demoTurn < 6) return "It depends on the day. Some days I can manage, but other days it takes over my thoughts.";
  return "I guess I want to understand why this keeps happening and what I can do about it.";
}

async function getOpenAIReply() {
  const apiKey = els.apiKey.value.trim();
  if (!apiKey) throw new Error("Missing OpenAI API key");
  const c = state.selectedCase;
  const systemPrompt = buildClientPrompt(c, els.difficultySelect.value);
  const messages = [
    { role: "system", content: systemPrompt },
    ...state.transcript.map(m => ({ role: m.role === "student" ? "user" : "assistant", content: m.content }))
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({ model: "gpt-4o-mini", messages, temperature: 0.8 })
  });
  if (!response.ok) throw new Error(`OpenAI request failed with status ${response.status}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "I’m not sure how to answer that.";
}

function buildClientPrompt(c, difficulty) {
  return `You are a simulated client in a psychology student interview simulator. Stay in character. Do not reveal all case details at once. Answer only what the student asks. Do not provide diagnosis. Use realistic hesitation and emotion. Difficulty: ${difficulty}.

Visible profile: ${c.visibleProfile}
Hidden details:
Symptoms: ${c.hidden.symptoms.join(", ")}
Onset: ${c.hidden.onset}
Triggers: ${c.hidden.triggers.join(", ")}
Functioning: ${c.hidden.functioning}
Risk: ${c.hidden.risk}
Supports: ${c.hidden.supports}

Rules:
- Keep replies 1 to 5 sentences.
- In beginner mode, answer directly.
- In intermediate mode, disclose partially unless asked good follow-up questions.
- In advanced mode, be guarded, vague, or hesitant, but still clinically plausible.
- If asked about safety, answer clearly and responsibly based on the hidden risk detail.`;
}

function endInterview() {
  if (!state.active) return;
  state.active = false;
  els.studentInput.disabled = true;
  els.sendBtn.disabled = true;
  els.endBtn.disabled = true;
  const feedback = generateFeedback();
  els.feedbackContent.innerHTML = feedback;
  els.feedbackDialog.showModal();
}

function generateFeedback() {
  const areas = state.askedAreas;
  const scores = {
    rapport: transcriptContains(/hello|hi|good morning|good afternoon|thank|comfortable|confidential|purpose|start/i) ? 4 : 2,
    questionQuality: estimateQuestionQuality(),
    symptoms: areas.has("symptoms") && areas.has("onset-frequency") ? 5 : areas.has("symptoms") ? 3 : 1,
    functioning: areas.has("functioning") ? 4 : 1,
    risk: areas.has("risk") ? 5 : 1,
    closure: areas.has("summary-closure") ? 4 : 1
  };
  const overall = Math.round(Object.values(scores).reduce((a,b) => a+b, 0) / 6);
  const missed = [];
  if (!areas.has("risk")) missed.push("Risk and safety assessment was not clearly asked.");
  if (!areas.has("functioning")) missed.push("Functional impairment across school, work, relationships, and routine was not sufficiently explored.");
  if (!areas.has("onset-frequency")) missed.push("Onset, frequency, duration, and course of symptoms need clearer assessment.");
  if (!areas.has("coping-support")) missed.push("Coping strategies and support system were not fully explored.");
  if (!areas.has("summary-closure")) missed.push("The session needs a clearer summary and closure.");

  return `
    <h3>Overall Rating: ${overall} / 5</h3>
    <table>
      <tr><th>Area</th><th>Score</th><th>Interpretation</th></tr>
      <tr><td>Rapport Building</td><td>${scores.rapport}/5</td><td>${scores.rapport >= 4 ? "Adequate opening and relational stance." : "Needs a clearer greeting, purpose-setting, and empathic framing."}</td></tr>
      <tr><td>Question Quality</td><td>${scores.questionQuality}/5</td><td>${scores.questionQuality >= 4 ? "Mostly useful open or focused questions." : "Use more open-ended and clinically sequenced questions."}</td></tr>
      <tr><td>Symptom Exploration</td><td>${scores.symptoms}/5</td><td>${scores.symptoms >= 4 ? "Symptoms and timeline were explored." : "Clarify onset, frequency, duration, intensity, and triggers."}</td></tr>
      <tr><td>Functioning</td><td>${scores.functioning}/5</td><td>${scores.functioning >= 4 ? "Functional impact was addressed." : "Assess school, work, relationships, self-care, and daily routine."}</td></tr>
      <tr><td>Risk Assessment</td><td>${scores.risk}/5</td><td>${scores.risk >= 4 ? "Safety was addressed." : "Ask about self-harm, suicidal ideation, intent, plan, and protective factors when relevant."}</td></tr>
      <tr><td>Summary and Closure</td><td>${scores.closure}/5</td><td>${scores.closure >= 4 ? "Closure was attempted." : "End with a concise summary and next-step clarification."}</td></tr>
    </table>

    <h3>Strengths</h3>
    <ul>
      <li>${areas.has("emotion") ? "You explored emotional experience." : "You initiated the interview and gathered some information."}</li>
      <li>${areas.has("symptoms") ? "You asked about symptoms." : "You maintained a basic interview structure."}</li>
      <li>${areas.has("coping-support") ? "You assessed coping or support." : "You allowed the client to respond without interruption."}</li>
    </ul>

    <h3>Missed or Weak Areas</h3>
    <ul>${missed.length ? missed.map(x => `<li>${x}</li>`).join("") : "<li>No major missed area detected by the rule-based evaluator.</li>"}</ul>

    <h3>Suggested Better Questions</h3>
    <ol>
      <li>When did this concern first start, and how often does it happen now?</li>
      <li>What usually triggers or worsens the symptoms?</li>
      <li>How has this affected your schoolwork, relationships, sleep, appetite, and daily routine?</li>
      <li>When things become overwhelming, have you had thoughts of harming yourself or not wanting to live?</li>
      <li>What has helped you cope, even slightly, and who knows about what you are going through?</li>
    </ol>

    <h3>Improved Closing Summary</h3>
    <p>Based on what you shared, the main concern appears to involve recurring distress that affects your thoughts, body, and daily functioning. I would like to clarify your symptom pattern, support system, and safety further so the next steps can be appropriate and responsible.</p>
  `;
}

function estimateQuestionQuality() {
  const studentTurns = state.transcript.filter(m => m.role === "student").map(m => m.content);
  if (!studentTurns.length) return 1;
  const openCount = studentTurns.filter(q => /what|how|tell me|can you describe|in what way|when/i.test(q)).length;
  const leadingCount = studentTurns.filter(q => /isn't it|don't you think|you are just|obviously/i.test(q)).length;
  let score = 2 + Math.min(2, openCount);
  if (leadingCount > 0) score -= 1;
  return Math.max(1, Math.min(5, score));
}

function transcriptContains(regex) {
  return state.transcript.some(m => m.role === "student" && regex.test(m.content));
}

function exportTranscript() {
  const c = state.selectedCase;
  const lines = [
    "PsycheSim Interview Transcript",
    `Case: ${c.title}`,
    `Profile: ${c.visibleProfile}`,
    `Difficulty: ${els.difficultySelect.value}`,
    "",
    ...state.transcript.map(m => `${m.role.toUpperCase()}: ${m.content}`)
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `psychesim-transcript-${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

init();
