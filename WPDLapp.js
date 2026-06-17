const state = {
  currentCase: 0,
  selectedAnswer: null,
  answered: {},
  correct: {},
  appraisalIndex: 0,
  appraisalSelected: null,
  motivationIndex: 0,
  motivationSelected: null
};

const $ = id => document.getElementById(id);
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));
  tab.classList.add('active');
  $(tab.dataset.tab).classList.add('active');
  if (tab.dataset.tab === 'tracker') renderTracker();
  if (tab.dataset.tab === 'export') renderExport();
}));

function populateFilters(){
  WPDL_TOPICS.forEach(t => $('topicFilter').insertAdjacentHTML('beforeend', `<option>${t}</option>`));
  Object.keys(WPDL_JOBS).forEach(j => $('jobRole').insertAdjacentHTML('beforeend', `<option>${j}</option>`));
  WPDL_TRAINING_PROBLEMS.forEach(p => $('trainingProblem').insertAdjacentHTML('beforeend', `<option>${p}</option>`));
  WPDL_SELECTION_METHODS.forEach((m,i)=>{
    $('selectionMethods').insertAdjacentHTML('beforeend', `<label><input type="checkbox" value="${i}"> ${m.name}</label>`);
  });
}

function filteredCases(){
  const topic = $('topicFilter').value;
  const difficulty = $('difficultyFilter').value;
  const mode = $('modeFilter').value;
  return WPDL_CASES.filter(c => (topic==='All'||c.topic===topic) && (difficulty==='All'||c.difficulty===difficulty) && (mode==='All'||c.mode===mode));
}

function renderCase(index=0){
  const list = filteredCases();
  if(!list.length){ $('caseTitle').textContent = 'No cases match the filter.'; $('caseStem').textContent='Change the filter.'; $('options').innerHTML=''; return; }
  const c = list[index % list.length];
  state.currentCase = WPDL_CASES.findIndex(x=>x.id===c.id);
  state.selectedAnswer = null;
  $('caseNumber').textContent = `Case ${c.id}`;
  $('caseTopic').textContent = c.topic;
  $('caseDifficulty').textContent = c.difficulty;
  $('caseTitle').textContent = c.title;
  $('caseStem').textContent = c.stem;
  $('caseFeedback').classList.add('hidden');
  $('caseFeedback').innerHTML = '';
  $('options').innerHTML = '';
  c.options.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'option';
    b.textContent = opt;
    b.onclick = () => { document.querySelectorAll('#options .option').forEach(x=>x.classList.remove('selected')); b.classList.add('selected'); state.selectedAnswer = opt; };
    $('options').appendChild(b);
  });
}

function checkCase(){
  const c = WPDL_CASES[state.currentCase];
  if(!state.selectedAnswer) return;
  const isCorrect = state.selectedAnswer === c.answer;
  state.answered[c.id] = true;
  state.correct[c.id] = isCorrect;
  document.querySelectorAll('#options .option').forEach(b=>{
    if(b.textContent===c.answer) b.classList.add('correct');
    else if(b.textContent===state.selectedAnswer) b.classList.add('wrong');
  });
  $('caseFeedback').classList.remove('hidden');
  $('caseFeedback').innerHTML = `<h3>${isCorrect ? 'Correct' : 'Incorrect'}</h3>
  <p><strong>Best answer:</strong> ${c.answer}</p>
  <p><strong>Rationale:</strong> ${c.rationale}</p>
  <ul>${c.distractors.map(d=>`<li>${d}</li>`).join('')}</ul>`;
  updateStats();
}

function nextCase(){
  const list = filteredCases();
  const currentId = WPDL_CASES[state.currentCase].id;
  const pos = list.findIndex(c=>c.id===currentId);
  renderCase((pos+1)%list.length);
}

function randomCase(){
  const list = filteredCases();
  renderCase(Math.floor(Math.random()*list.length));
}

function updateStats(){
  const answered = Object.keys(state.answered).length;
  const correct = Object.values(state.correct).filter(Boolean).length;
  $('answeredCount').textContent = answered;
  $('scoreCount').textContent = correct;
  $('totalCases').textContent = WPDL_CASES.length;
}

function buildJob(){
  const role = $('jobRole').value;
  const purpose = $('jobPurpose').value;
  const j = WPDL_JOBS[role];
  $('jobOutput').innerHTML = `<h3>${role}</h3>
  <p><strong>Purpose:</strong> ${purpose}</p>
  <p><strong>Key duties</strong></p><ul>${j.duties.map(x=>`<li>${x}</li>`).join('')}</ul>
  <p><strong>KSAOs</strong></p><ul>${j.ksaos.map(x=>`<li>${x}</li>`).join('')}</ul>
  <p><strong>Recommended assessment methods</strong></p>${j.methods.map(x=>`<span class="pill">${x}</span>`).join('')}
  <p><strong>Board note:</strong> Job analysis should precede selection, training, and appraisal decisions.</p>`;
}

function evaluateSelection(){
  const checked = [...document.querySelectorAll('#selectionMethods input:checked')].map(x=>WPDL_SELECTION_METHODS[+x.value]);
  if(!checked.length){ $('selectionOutput').innerHTML = '<p>Select at least one method.</p>'; return; }
  let riskScore = checked.reduce((s,m)=>s+(m.risk==='High'?3:m.risk==='Moderate'?2:1),0)/checked.length;
  let hasStrong = checked.some(m=>['Structured interview','Work sample test','Situational judgment test'].includes(m.name));
  let risk = riskScore>=2.5 ? 'High' : riskScore>=1.7 ? 'Moderate' : 'Low';
  $('selectionOutput').innerHTML = `<h3>Selection System Review</h3>
  <p><strong>Overall risk:</strong> ${risk}</p>
  <p><strong>Defensibility:</strong> ${hasStrong ? 'Improved by job-relevant structured methods.' : 'Weak. Add job-relevant structured methods.'}</p>
  <ul>${checked.map(m=>`<li><strong>${m.name}</strong>: validity ${m.validity}; risk ${m.risk}. ${m.note}</li>`).join('')}</ul>
  <p><strong>Rule:</strong> Use multiple job-related predictors and standard scoring. Avoid single-method decisions.</p>`;
}

function trainingRecommendation(){
  const cause = $('trainingCause').value;
  const map = {
    'Knowledge gap':'Use instruction, examples, and checks for understanding.',
    'Skill gap':'Use demonstration, guided practice, feedback, and transfer activities.',
    'Motivation issue':'Clarify incentives, expectancy, fairness, goals, and feedback.',
    'Resource constraint':'Fix tools, staffing, time, or workflow before assigning training.',
    'Supervisor or feedback problem':'Improve coaching, feedback frequency, and performance standards.',
    'Job design problem':'Clarify roles, reduce overload, or redesign task structure.'
  };
  $('trainingOutput').innerHTML = `<h3>Recommended Intervention</h3><p>${map[cause]}</p><p><strong>Board note:</strong> Not all performance problems are training problems. Diagnose the cause first.</p>`;
}

function renderAppraisal(){
  const item = WPDL_APPRAISAL[state.appraisalIndex % WPDL_APPRAISAL.length];
  state.appraisalSelected = null;
  $('appraisalStem').textContent = item.stem;
  $('appraisalFeedback').classList.add('hidden');
  $('appraisalOptions').innerHTML = '';
  item.options.forEach(opt=>{
    const b=document.createElement('button'); b.className='option'; b.textContent=opt;
    b.onclick=()=>{document.querySelectorAll('#appraisalOptions .option').forEach(x=>x.classList.remove('selected')); b.classList.add('selected'); state.appraisalSelected=opt;};
    $('appraisalOptions').appendChild(b);
  });
}
function checkAppraisal(){
  const item = WPDL_APPRAISAL[state.appraisalIndex % WPDL_APPRAISAL.length];
  if(!state.appraisalSelected) return;
  $('appraisalFeedback').classList.remove('hidden');
  $('appraisalFeedback').innerHTML = `<h3>${state.appraisalSelected===item.answer?'Correct':'Incorrect'}</h3><p><strong>Answer:</strong> ${item.answer}</p><p>${item.rationale}</p>`;
}

function renderMotivation(){
  const item = WPDL_MOTIVATION[state.motivationIndex % WPDL_MOTIVATION.length];
  state.motivationSelected = null;
  $('motivationStem').textContent = item.stem;
  $('motivationFeedback').classList.add('hidden');
  $('motivationOptions').innerHTML = '';
  item.options.forEach(opt=>{
    const b=document.createElement('button'); b.className='option'; b.textContent=opt;
    b.onclick=()=>{document.querySelectorAll('#motivationOptions .option').forEach(x=>x.classList.remove('selected')); b.classList.add('selected'); state.motivationSelected=opt;};
    $('motivationOptions').appendChild(b);
  });
}
function checkMotivation(){
  const item = WPDL_MOTIVATION[state.motivationIndex % WPDL_MOTIVATION.length];
  if(!state.motivationSelected) return;
  $('motivationFeedback').classList.remove('hidden');
  $('motivationFeedback').innerHTML = `<h3>${state.motivationSelected===item.answer?'Correct':'Incorrect'}</h3><p><strong>Answer:</strong> ${item.answer}</p><p>${item.rationale}</p>`;
}

function renderTracker(){
  const rows = WPDL_TOPICS.map(topic=>{
    const ids = WPDL_CASES.filter(c=>c.topic===topic).map(c=>c.id);
    const answered = ids.filter(id=>state.answered[id]).length;
    const correct = ids.filter(id=>state.correct[id]).length;
    const pct = answered ? Math.round((correct/answered)*100) : 0;
    return `<div class="trackerRow"><strong>${topic}</strong><div class="bar"><span style="width:${pct}%"></span></div><span>${pct}%</span></div>`;
  }).join('');
  $('trackerOutput').innerHTML = rows || '<p>No progress yet.</p>';
}

function renderExport(){
  const answered = Object.keys(state.answered).length;
  const correct = Object.values(state.correct).filter(Boolean).length;
  const missed = WPDL_CASES.filter(c=>state.answered[c.id] && !state.correct[c.id]).map(c=>`${c.id}. ${c.topic} - ${c.title}`);
  const report = `WorkPsych Decision Lab Study Report\nAnswered: ${answered}/${WPDL_CASES.length}\nCorrect: ${correct}\nScore: ${answered ? Math.round(correct/answered*100) : 0}%\n\nMissed Items:\n${missed.length ? missed.join('\n') : 'None yet.'}`;
  $('exportOutput').textContent = report;
}

$('checkAnswerBtn').onclick = checkCase;
$('nextCaseBtn').onclick = nextCase;
$('randomCaseBtn').onclick = randomCase;
['topicFilter','difficultyFilter','modeFilter'].forEach(id=>$(id).onchange=()=>renderCase(0));
$('buildJobBtn').onclick = buildJob;
$('evaluateSelectionBtn').onclick = evaluateSelection;
$('trainingBtn').onclick = trainingRecommendation;
$('newAppraisalBtn').onclick = ()=>{state.appraisalIndex++; renderAppraisal();};
$('checkAppraisalBtn').onclick = checkAppraisal;
$('newMotivationBtn').onclick = ()=>{state.motivationIndex++; renderMotivation();};
$('checkMotivationBtn').onclick = checkMotivation;
$('resetBtn').onclick = ()=>{state.answered={}; state.correct={}; updateStats(); renderTracker();};
$('copyReportBtn').onclick = ()=>{renderExport(); navigator.clipboard.writeText($('exportOutput').textContent);};

populateFilters();
renderCase(0);
buildJob();
renderAppraisal();
renderMotivation();
updateStats();
