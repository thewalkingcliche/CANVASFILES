const $ = (id) => document.getElementById(id);
let currentScenario = null;
let currentQuiz = 0;
let lastRecommendation = "";
let lastAPA = "";
let lastScenarioTitle = "";
let lastAnalyzer = "";
let completed = new Set();
let quizCorrect = 0;
let quizChecked = 0;
let answeredThisItem = false;

function markComplete(key) {
  completed.add(key);
  const pct = Math.round((completed.size / 6) * 100);
  $('progressText').textContent = `${pct}%`;
  $('progressBar').style.width = `${pct}%`;
}

function round(num, places = 3) {
  if (!Number.isFinite(num)) return "___";
  return Number(num).toFixed(places);
}

function roundP(p) {
  if (!Number.isFinite(p)) return "p = ___";
  if (p < .001) return "p < .001";
  return `p = ${p.toFixed(3).replace(/^0/, "")}`;
}

function parseNums(text) {
  return text.split(/[\s,;\n]+/).map(Number).filter(Number.isFinite);
}

function mean(arr) { return arr.reduce((a,b) => a + b, 0) / arr.length; }
function variance(arr) {
  const m = mean(arr);
  return arr.reduce((a,b) => a + Math.pow(b - m, 2), 0) / (arr.length - 1);
}
function sd(arr) { return Math.sqrt(variance(arr)); }

function erf(x) {
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}
function normalCdf(x) { return 0.5 * (1 + erf(x / Math.SQRT2)); }
function approxTwoTailedP(t, df) {
  // Normal approximation with a small df correction. Good for classroom practice, not publication-grade inference.
  const z = Math.abs(t) * Math.sqrt(df / Math.max(df - 2, 1));
  return Math.max(0, Math.min(1, 2 * (1 - normalCdf(z))));
}

function escapeHTML(str) {
  return String(str).replace(/[&<>'"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[s]));
}

function setupTabs() {
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      $(btn.dataset.tab).classList.add('active');
    });
  });
}

function updateStepper() {
  const steps = document.querySelectorAll('.step');
  const vals = [$('goal').value, $('groups').value, $('level').value, $('assumptionStatus').value];
  steps.forEach((s, i) => s.classList.toggle('active', Boolean(vals[i])));
}

function recommendTest() {
  const goal = $('goal').value;
  const groups = $('groups').value;
  const relationship = $('relationship').value;
  const level = $('level').value;
  const assumption = $('assumptionStatus').value;
  const context = $('context').selectedOptions[0].text;
  let test = "", reason = "", note = "", alternate = "";

  if (goal === 'frequency' || level === 'categorical') {
    test = "Chi-square test of independence";
    reason = "Use this when the question asks whether two categorical variables are associated.";
    note = "Use Fisher's exact test when expected cell counts are too small.";
    alternate = "Fisher's exact test";
  } else if (goal === 'association') {
    test = assumption === 'violated' || level === 'ordinal' ? "Spearman rho" : "Pearson correlation";
    reason = "Use this when the question asks whether two variables move together.";
    note = "Correlation does not establish causation.";
    alternate = test === "Pearson correlation" ? "Spearman rho" : "Pearson correlation";
  } else if (goal === 'prediction') {
    test = "Simple or multiple regression";
    reason = "Use regression when the goal is to estimate or predict an outcome from one or more predictors.";
    note = "Check linearity, residuals, multicollinearity, and influential cases.";
    alternate = "Logistic regression if the outcome is categorical";
  } else {
    if (groups === 'two' && relationship === 'independent') {
      test = assumption === 'violated' || level === 'ordinal' ? "Mann–Whitney U test" : "Independent samples t-test";
      reason = "Use this for comparing two independent groups on one outcome.";
      note = "Example: comparing test anxiety between intervention and control groups.";
      alternate = test.includes('t-test') ? "Mann–Whitney U test" : "Independent samples t-test";
    } else if (groups === 'two' && relationship === 'related') {
      test = assumption === 'violated' || level === 'ordinal' ? "Wilcoxon signed-rank test" : "Paired samples t-test";
      reason = "Use this for comparing two related scores from the same participants or matched pairs.";
      note = "Example: comparing pretest and posttest anxiety scores from the same clients.";
      alternate = test.includes('t-test') ? "Wilcoxon signed-rank test" : "Paired samples t-test";
    } else if (groups === 'threeplus') {
      test = assumption === 'violated' || level === 'ordinal' ? "Kruskal–Wallis test" : "One-way ANOVA";
      reason = "Use this for comparing three or more groups on one outcome.";
      note = "Use post hoc tests when the omnibus result is significant.";
      alternate = test === "One-way ANOVA" ? "Kruskal–Wallis test" : "One-way ANOVA";
    } else {
      test = "One-sample t-test or descriptive statistics";
      reason = "Use this when one group is compared with a known value or when the goal is only to summarize scores.";
      note = "Clarify whether there is a comparison value.";
      alternate = "Descriptive statistics";
    }
  }

  lastRecommendation = `${test}. ${reason}`;
  $('recommendation').innerHTML = `
    <h3>Recommended Test: <span class="badge">${test}</span></h3>
    <p><strong>Reason:</strong> ${reason}</p>
    <p><strong>Alternative to consider:</strong> ${alternate}</p>
    <p><strong>Psychology context:</strong> ${context}</p>
    <p><strong>Teaching note:</strong> ${note}</p>
  `;
  markComplete('selector');
}

function resetSelector() {
  $('goal').value = 'difference'; $('groups').value = 'two'; $('relationship').value = 'independent'; $('level').value = 'continuous'; $('assumptionStatus').value = 'met';
  $('recommendation').innerHTML = "";
  updateStepper();
}

function generateScenario() {
  currentScenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
  lastScenarioTitle = currentScenario.title;
  $('scenarioBox').innerHTML = `<h3>${currentScenario.title}</h3><p>${currentScenario.prompt}</p>`;
  ['studentIV','studentDV','studentDesign','studentTest'].forEach(id => $(id).value = '');
  $('scenarioFeedback').innerHTML = "";
  $('scenarioAnswer').innerHTML = "";
}

function scoreField(value, expected) {
  const v = value.toLowerCase();
  const e = expected.toLowerCase();
  const words = e.split(/[^a-z0-9]+/).filter(w => w.length > 3);
  const hits = words.filter(w => v.includes(w)).length;
  return Math.min(1, hits / Math.max(2, Math.min(words.length, 5)));
}

function checkScenario() {
  if (!currentScenario) generateScenario();
  const scores = [
    scoreField($('studentIV').value, currentScenario.iv),
    scoreField($('studentDV').value, currentScenario.dv),
    scoreField($('studentDesign').value, currentScenario.design),
    Math.max(scoreField($('studentTest').value, currentScenario.test), currentScenario.keywords.some(k => $('studentTest').value.toLowerCase().includes(k)) ? .7 : 0)
  ];
  const total = Math.round(scores.reduce((a,b) => a+b,0) / 4 * 100);
  const label = total >= 80 ? 'Strong' : total >= 55 ? 'Developing' : 'Needs revision';
  $('scenarioFeedback').innerHTML = `
    <h3>${label} answer: ${total}% match</h3>
    <p><strong>IV/predictor:</strong> ${Math.round(scores[0]*100)}%</p>
    <p><strong>DV/outcome:</strong> ${Math.round(scores[1]*100)}%</p>
    <p><strong>Design:</strong> ${Math.round(scores[2]*100)}%</p>
    <p><strong>Test:</strong> ${Math.round(scores[3]*100)}%</p>
    <p>This automated score is a learning guide. Use the suggested answer for correction.</p>`;
  markComplete('scenario');
}

function showScenarioAnswer() {
  if (!currentScenario) generateScenario();
  $('scenarioAnswer').innerHTML = `
    <h3>Suggested Answer</h3>
    <p><strong>Independent variable / predictor:</strong> ${currentScenario.iv}</p>
    <p><strong>Dependent variable / outcome:</strong> ${currentScenario.dv}</p>
    <p><strong>Design:</strong> ${currentScenario.design}</p>
    <p><strong>Recommended test:</strong> ${currentScenario.test}</p>
    <p><strong>Null hypothesis:</strong> ${currentScenario.h0}</p>
    <p><strong>Alternative hypothesis:</strong> ${currentScenario.h1}</p>`;
}

function checkAssumptions() {
  const checked = [...document.querySelectorAll('.assumption:checked')].map(x => x.value);
  const count = checked.length;
  let decision = "";
  if (count >= 4) decision = "Parametric testing is likely acceptable, provided the research design matches the selected test.";
  else if (count >= 2) decision = "Use caution. Inspect the data further, report assumption checks, and consider nonparametric alternatives when violations are serious.";
  else decision = "Nonparametric testing or descriptive analysis is safer unless additional evidence supports parametric assumptions.";
  $('assumptionResult').innerHTML = `
    <h3>Assumption Decision</h3>
    <p>${decision}</p>
    <p><strong>Checked assumptions:</strong> ${count} out of 5.</p>
    <p><strong>Suggested reporting:</strong> State which assumptions were checked and what alternative was used when violations were serious.</p>`;
  markComplete('assumptions');
}

function analyzeData() {
  const type = $('analysisType').value;
  const a = parseNums($('groupAData').value);
  const b = parseNums($('groupBData').value);
  const outcome = $('analyzerOutcome').value || 'the outcome';
  if (a.length < 2 || (type !== 'descriptive' && b.length < 2)) {
    $('analyzerOutput').innerHTML = `<p class="warning">Enter at least two numeric values per required group.</p>`;
    return;
  }
  const mA = mean(a), sdA = sd(a), mB = b.length ? mean(b) : NaN, sdB = b.length ? sd(b) : NaN;
  let result = `<h3>Descriptive Results</h3><table><tr><th>Group</th><th>n</th><th>M</th><th>SD</th></tr><tr><td>A / Pretest</td><td>${a.length}</td><td>${round(mA,2)}</td><td>${round(sdA,2)}</td></tr>`;
  if (b.length) result += `<tr><td>B / Posttest</td><td>${b.length}</td><td>${round(mB,2)}</td><td>${round(sdB,2)}</td></tr>`;
  result += `</table>`;

  let apa = '';
  if (type === 'independent') {
    const se = Math.sqrt((variance(a)/a.length) + (variance(b)/b.length));
    const t = (mA - mB) / se;
    const df = Math.pow((variance(a)/a.length) + (variance(b)/b.length), 2) / ((Math.pow(variance(a)/a.length,2)/(a.length-1)) + (Math.pow(variance(b)/b.length,2)/(b.length-1)));
    const p = approxTwoTailedP(t, df);
    apa = `An independent samples t-test showed ${p < .05 ? 'a significant' : 'no significant'} difference in ${outcome} between groups, t(${round(df,0)}) = ${round(t)}, ${roundP(p)}.`;
    result += `<h3>Welch t-test Approximation</h3><p><strong>t(${round(df,0)}) = ${round(t)}, ${roundP(p)}</strong></p><p>${apa}</p>`;
  } else if (type === 'paired') {
    if (a.length !== b.length) { $('analyzerOutput').innerHTML = `<p class="warning">Paired analysis requires equal numbers of values in both columns.</p>`; return; }
    const d = a.map((x,i) => x - b[i]);
    const md = mean(d), sdd = sd(d), se = sdd / Math.sqrt(d.length), t = md / se, df = d.length - 1, p = approxTwoTailedP(t, df);
    apa = `A paired samples t-test showed ${p < .05 ? 'a significant' : 'no significant'} change in ${outcome}, t(${df}) = ${round(t)}, ${roundP(p)}.`;
    result += `<h3>Paired t-test Approximation</h3><p><strong>t(${df}) = ${round(t)}, ${roundP(p)}</strong></p><p>${apa}</p>`;
  } else {
    apa = `Descriptive statistics showed that Group A had M = ${round(mA,2)}, SD = ${round(sdA,2)}${b.length ? `, while Group B had M = ${round(mB,2)}, SD = ${round(sdB,2)}` : ''}.`;
    result += `<h3>APA Descriptive Sentence</h3><p>${apa}</p>`;
  }
  result += `<p><strong>Classroom note:</strong> The p-value is an approximation for learning practice. Use JASP, jamovi, SPSS, R, or Excel for reportable analysis.</p>`;
  $('analyzerOutput').innerHTML = result;
  lastAnalyzer = apa;
  markComplete('analyzer');
}

function loadSample() {
  $('analyzerOutcome').value = 'test anxiety scores';
  $('analysisType').value = 'independent';
  $('groupAData').value = '18, 20, 16, 19, 21, 17, 18, 20';
  $('groupBData').value = '24, 25, 22, 21, 27, 23, 26, 24';
}

function generateAPA() {
  const test = $('apaTest').value;
  const stat = parseFloat($('statValue').value);
  const df = $('dfValue').value || "___";
  const p = parseFloat($('pValue').value);
  const g1 = $('group1').value || "Group 1";
  const g2 = $('group2').value || "Group 2";
  const m1 = parseFloat($('mean1').value);
  const m2 = parseFloat($('mean2').value);
  const outcome = $('outcomeName').value || "the outcome";
  const sig = Number.isFinite(p) && p < .05 ? "significant" : "not significant";
  const direction = (Number.isFinite(m1) && Number.isFinite(m2))
    ? (m1 > m2 ? `${g1} had higher ${outcome} scores than ${g2}` : m1 < m2 ? `${g1} had lower ${outcome} scores than ${g2}` : `${g1} and ${g2} had equal mean scores`)
    : `the direction should be interpreted using the descriptive statistics`;
  let sentence = "";
  if (test.includes('independent')) sentence = `An independent samples t-test showed a ${sig} difference in ${outcome} between ${g1} and ${g2}, t(${df}) = ${Number.isFinite(stat) ? stat.toFixed(3) : '___'}, ${roundP(p)}. ${direction}.`;
  else if (test.includes('paired')) sentence = `A paired samples t-test showed a ${sig} change in ${outcome} from ${g1} to ${g2}, t(${df}) = ${Number.isFinite(stat) ? stat.toFixed(3) : '___'}, ${roundP(p)}. ${direction}.`;
  else if (test === 'mann-whitney') sentence = `A Mann–Whitney U test showed a ${sig} difference in ${outcome} between ${g1} and ${g2}, U = ${Number.isFinite(stat) ? stat.toFixed(3) : '___'}, ${roundP(p)}. ${direction}.`;
  else if (test === 'wilcoxon') sentence = `A Wilcoxon signed-rank test showed a ${sig} change in ${outcome} from ${g1} to ${g2}, W = ${Number.isFinite(stat) ? stat.toFixed(3) : '___'}, ${roundP(p)}. ${direction}.`;
  else if (test === 'anova') sentence = `A one-way ANOVA showed a ${sig} difference in ${outcome} across groups, F(${df}) = ${Number.isFinite(stat) ? stat.toFixed(3) : '___'}, ${roundP(p)}.`;
  else if (test === 'correlation') sentence = `A Pearson correlation showed a ${sig} relationship between ${g1} and ${g2}, r(${df}) = ${Number.isFinite(stat) ? stat.toFixed(3) : '___'}, ${roundP(p)}.`;
  else if (test === 'chi-square') sentence = `A chi-square test of independence showed a ${sig} association between ${g1} and ${g2}, χ²(${df}) = ${Number.isFinite(stat) ? stat.toFixed(3) : '___'}, ${roundP(p)}.`;
  lastAPA = sentence;
  $('apaOutput').innerHTML = `<h3>APA Interpretation</h3><p id="apaText">${escapeHTML(sentence)}</p><p><strong>Check before submission:</strong> Add means, standard deviations, effect size, confidence interval, or post hoc results when required.</p>`;
  markComplete('apa');
}

async function copyText(text, statusId) {
  try { await navigator.clipboard.writeText(text); if (statusId) $(statusId).textContent = 'Copied.'; }
  catch { if (statusId) $(statusId).textContent = 'Copy failed. Select and copy manually.'; }
}

function renderQuiz() {
  const item = QUIZ[currentQuiz];
  answeredThisItem = false;
  $('quizBox').innerHTML = `<h3>Question ${currentQuiz + 1} of ${QUIZ.length}</h3><p>${item.q}</p>${item.options.map((opt, i) => `<label class="option"><input type="radio" name="quiz" value="${i}" /> ${String.fromCharCode(65+i)}. ${opt}</label>`).join('')}`;
  $('quizFeedback').innerHTML = "";
  $('quizStatus').textContent = 'Select an answer.';
}

function updateQuizScore() { $('quizScore').textContent = `Score: ${quizCorrect}/${quizChecked}`; }

function checkQuiz() {
  const selected = document.querySelector('input[name="quiz"]:checked');
  if (!selected) { $('quizFeedback').innerHTML = `<p class="warning">Select an answer first.</p>`; return; }
  const item = QUIZ[currentQuiz];
  const correct = Number(selected.value) === item.answer;
  if (!answeredThisItem) { quizChecked += 1; if (correct) quizCorrect += 1; answeredThisItem = true; }
  updateQuizScore();
  $('quizStatus').textContent = correct ? 'Correct.' : 'Incorrect.';
  $('quizFeedback').innerHTML = `<h3 class="${correct ? 'correct' : 'warning'}">${correct ? 'Correct' : 'Incorrect'}</h3><p><strong>Answer:</strong> ${item.options[item.answer]}</p><p><strong>Rationale:</strong> ${item.rationale}</p>`;
  markComplete('quiz');
}

function nextQuiz() { currentQuiz = (currentQuiz + 1) % QUIZ.length; renderQuiz(); }
function restartQuiz() { currentQuiz = 0; quizCorrect = 0; quizChecked = 0; updateQuizScore(); renderQuiz(); }

function exportLog() {
  const name = $('studentName').value || "Student";
  const reflection = $('reflection').value || "No reflection entered.";
  const log = `PsychStat Decision Lab Learning Log\n\nStudent: ${name}\nDate: ${new Date().toLocaleDateString()}\n\nLast Test Recommendation:\n${lastRecommendation || 'No recommendation generated yet.'}\n\nLast Scenario Practiced:\n${lastScenarioTitle || 'No scenario generated yet.'}\n\nLast Mini Analyzer Result:\n${lastAnalyzer || 'No data analysis generated yet.'}\n\nLast APA Interpretation:\n${lastAPA || 'No APA interpretation generated yet.'}\n\nBoard Exam Mode Score:\n${quizCorrect}/${quizChecked}\n\nReflection:\n${reflection}`;
  $('exportOutput').value = log;
  markComplete('export');
}

function wire() {
  setupTabs();
  ['goal','groups','relationship','level','assumptionStatus'].forEach(id => $(id).addEventListener('change', updateStepper));
  $('recommendBtn').addEventListener('click', recommendTest);
  $('resetSelectorBtn').addEventListener('click', resetSelector);
  $('newScenarioBtn').addEventListener('click', generateScenario);
  $('checkScenarioBtn').addEventListener('click', checkScenario);
  $('showScenarioAnswerBtn').addEventListener('click', showScenarioAnswer);
  $('checkAssumptionsBtn').addEventListener('click', checkAssumptions);
  $('analyzeBtn').addEventListener('click', analyzeData);
  $('loadSampleBtn').addEventListener('click', loadSample);
  $('generateApaBtn').addEventListener('click', generateAPA);
  $('copyApaBtn').addEventListener('click', () => copyText(lastAPA || '', 'quizStatus'));
  $('checkQuizBtn').addEventListener('click', checkQuiz);
  $('nextQuizBtn').addEventListener('click', nextQuiz);
  $('restartQuizBtn').addEventListener('click', restartQuiz);
  $('exportBtn').addEventListener('click', exportLog);
  $('copyLogBtn').addEventListener('click', () => copyText($('exportOutput').value || '', 'quizStatus'));
  updateStepper();
  updateQuizScore();
  generateScenario();
  renderQuiz();
}

wire();
