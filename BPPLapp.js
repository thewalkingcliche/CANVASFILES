const state = {
  pool: [...BPPL_ITEMS],
  index: 0,
  score: 0,
  answered: 0,
  selected: null,
  currentChecked: false,
  wrong: [],
  history: []
};

const $ = (id) => document.getElementById(id);

function shuffle(arr){
  return [...arr].sort(() => Math.random() - 0.5);
}

function uniqueTopics(){
  return [...new Set(BPPL_ITEMS.map(i => i.topic))].sort();
}

function fillTopics(){
  const sel = $('topicFilter');
  sel.innerHTML = '<option value="all">All Topics</option>' + uniqueTopics().map(t => `<option value="${t}">${t}</option>`).join('');
}

function filteredItems(){
  const d = $('domainFilter').value;
  const t = $('topicFilter').value;
  const diff = $('difficultyFilter').value;
  return BPPL_ITEMS.filter(i => (d==='all'||i.domain===d) && (t==='all'||i.topic===t) && (diff==='all'||i.difficulty===diff));
}

function startQuiz(){
  state.pool = shuffle(filteredItems());
  state.index = 0; state.score = 0; state.answered = 0; state.selected = null; state.currentChecked = false;
  renderItem(); updateScore();
}

function renderItem(){
  const item = state.pool[state.index];
  $('feedbackBox').classList.add('hidden');
  $('feedbackBox').innerHTML = '';
  state.selected = null; state.currentChecked = false;
  if(!item){
    $('itemCount').textContent = 'No item'; $('itemTag').textContent = 'Change filters'; $('questionText').textContent = 'No item matched the current filters.'; $('optionsBox').innerHTML=''; return;
  }
  $('itemCount').textContent = `Item ${state.index+1} of ${state.pool.length}`;
  $('itemTag').textContent = `${item.domain} · ${item.topic} · ${item.difficulty}`;
  $('questionText').textContent = item.question;
  $('optionsBox').innerHTML = item.options.map((o,idx)=>`
    <label class="option" data-index="${idx}">
      <input type="radio" name="answer" value="${idx}">
      <span><strong>${String.fromCharCode(65+idx)}.</strong> ${o}</span>
    </label>`).join('');
  document.querySelectorAll('.option').forEach(el=>{
    el.addEventListener('click',()=>{ state.selected = Number(el.dataset.index); });
  });
}

function checkAnswer(){
  const item = state.pool[state.index];
  if(!item || state.currentChecked) return;
  const checked = document.querySelector('input[name="answer"]:checked');
  if(!checked){
    $('feedbackBox').classList.remove('hidden');
    $('feedbackBox').innerHTML = '<strong>Select an answer first.</strong>';
    return;
  }
  const chosen = Number(checked.value);
  const correct = chosen === item.answer;
  state.currentChecked = true; state.answered += 1; if(correct) state.score += 1;
  const options = document.querySelectorAll('.option');
  options.forEach(opt=>{
    const idx = Number(opt.dataset.index);
    if(idx === item.answer) opt.classList.add('correct');
    if(idx === chosen && !correct) opt.classList.add('incorrect');
  });
  if(!correct && !state.wrong.some(w=>w.id===item.id)) state.wrong.push(item);
  state.history.push({id:item.id, domain:item.domain, topic:item.topic, difficulty:item.difficulty, correct, chosen, answer:item.answer});
  $('feedbackBox').classList.remove('hidden');
  $('feedbackBox').innerHTML = `<strong>${correct ? 'Correct.' : 'Incorrect.'}</strong><br>Answer: ${String.fromCharCode(65+item.answer)}. ${item.options[item.answer]}<br><br>${item.rationale}`;
  updateScore(); updateTracker();
}

function nextItem(){
  if(!state.pool.length) return;
  state.index = (state.index + 1) % state.pool.length;
  renderItem();
}

function updateScore(){
  $('scoreText').textContent = `${state.score} / ${state.answered}`;
  $('accuracyText').textContent = state.answered ? `${Math.round((state.score/state.answered)*100)}%` : '0%';
  $('totalAnswered').textContent = state.answered;
}

function resetProgress(){
  state.score=0; state.answered=0; state.wrong=[]; state.history=[]; updateScore(); updateTracker(); renderItem();
}

function loadWrong(){
  const box = $('wrongList');
  if(!state.wrong.length){ box.innerHTML = '<p class="small">No missed items yet.</p>'; return; }
  box.innerHTML = state.wrong.map(i=>`<div class="review-item"><h3>${i.domain} · ${i.topic}</h3><p>${i.question}</p><p><strong>Answer:</strong> ${String.fromCharCode(65+i.answer)}. ${i.options[i.answer]}</p><p class="small">${i.rationale}</p></div>`).join('');
}

function clearWrong(){ state.wrong=[]; loadWrong(); }

function normalCdf(z){
  return 0.5 * (1 + erf(z / Math.sqrt(2)));
}
function erf(x){
  const sign = x >= 0 ? 1 : -1; x = Math.abs(x);
  const a1=0.254829592,a2=-0.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,p=0.3275911;
  const t=1/(1+p*x);
  const y=1-(((((a5*t+a4)*t)+a3)*t+a2)*t+a1)*t*Math.exp(-x*x);
  return sign*y;
}

function computeZ(){
  const raw=Number($('rawScore').value), mean=Number($('meanScore').value), sd=Number($('sdScore').value);
  if(!sd){ $('zOutput').innerHTML='Standard deviation cannot be zero.'; return; }
  const z=(raw-mean)/sd; const T=50+10*z; const pct=normalCdf(z)*100;
  $('zOutput').innerHTML=`<strong>z = ${z.toFixed(2)}</strong><br><strong>T = ${T.toFixed(2)}</strong><br><strong>Approximate percentile = ${pct.toFixed(1)}</strong><br>Interpretation: the score is ${Math.abs(z).toFixed(2)} SD ${z>=0?'above':'below'} the mean.`;
}

function computeItem(){
  const uc=Number($('upperCorrect').value), un=Number($('upperN').value), lc=Number($('lowerCorrect').value), ln=Number($('lowerN').value);
  if(!un || !ln){ $('itemOutput').innerHTML='Group sizes cannot be zero.'; return; }
  const p=(uc+lc)/(un+ln); const d=(uc/un)-(lc/ln);
  let pInt = p<.30?'difficult':p>.80?'easy':'moderate difficulty';
  let dInt = d>=.40?'strong discrimination':d>=.20?'acceptable discrimination':'weak discrimination';
  $('itemOutput').innerHTML=`<strong>Item difficulty p = ${p.toFixed(2)}</strong> (${pInt})<br><strong>Discrimination D = ${d.toFixed(2)}</strong> (${dInt})<br>Board rule: higher p means easier item; higher D means better separation between high and low performers.`;
}

function updateTracker(){
  const topics = uniqueTopics();
  const box = $('trackerList');
  box.innerHTML = topics.map(topic=>{
    const rows = state.history.filter(h=>h.topic===topic);
    const acc = rows.length ? Math.round(rows.filter(r=>r.correct).length/rows.length*100) : 0;
    return `<div class="track-item"><h3>${topic}</h3><div class="progressbar"><span style="width:${acc}%"></span></div><p class="small">${rows.length} answered · ${acc}% accuracy</p></div>`;
  }).join('');
}

function generateReport(){
  const name=$('studentName').value || 'Student'; const sec=$('sectionName').value || 'Section not specified';
  const acc = state.answered ? Math.round(state.score/state.answered*100) : 0;
  const missed = state.wrong.map(w=>`- ${w.domain} | ${w.topic}: ${w.question}`).join('\n') || '- None recorded';
  const topicLines = uniqueTopics().map(topic=>{
    const rows=state.history.filter(h=>h.topic===topic); if(!rows.length) return null;
    const a=Math.round(rows.filter(r=>r.correct).length/rows.length*100);
    return `- ${topic}: ${a}% (${rows.filter(r=>r.correct).length}/${rows.length})`;
  }).filter(Boolean).join('\n') || '- No topic data yet';
  $('reportBox').value = `BoardPrep Psych Lab Study Report\n\nName: ${name}\nSection: ${sec}\nAnswered Items: ${state.answered}\nScore: ${state.score}/${state.answered}\nAccuracy: ${acc}%\n\nTopic Performance:\n${topicLines}\n\nMissed Items:\n${missed}\n\nReflection Prompt:\nIdentify the topics with the lowest accuracy. Review the rationale for each missed item and write the rule that would help eliminate distractors next time.`;
}

function copyReport(){ navigator.clipboard.writeText($('reportBox').value || ''); }
function downloadReport(){
  const blob = new Blob([$('reportBox').value || 'No report generated.'], {type:'text/plain'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'boardprep-psych-lab-report.txt'; a.click(); URL.revokeObjectURL(a.href);
}

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active')); $(btn.dataset.panel).classList.add('active');
  if(btn.dataset.panel==='trackerPanel') updateTracker();
}));

$('startQuiz').addEventListener('click',startQuiz);
$('checkAnswer').addEventListener('click',checkAnswer);
$('nextItem').addEventListener('click',nextItem);
$('resetProgress').addEventListener('click',resetProgress);
$('loadWrong').addEventListener('click',loadWrong);
$('clearWrong').addEventListener('click',clearWrong);
$('computeZ').addEventListener('click',computeZ);
$('computeItem').addEventListener('click',computeItem);
$('generateReport').addEventListener('click',generateReport);
$('copyReport').addEventListener('click',copyReport);
$('downloadReport').addEventListener('click',downloadReport);

fillTopics(); startQuiz(); updateTracker();
