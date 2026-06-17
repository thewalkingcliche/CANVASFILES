const state = JSON.parse(localStorage.getItem('ADPL_STATE') || '{"answers":{},"wrong":[]}');
let current = { diagnostic:0, abnormal:0, developmental:0, wrong:0 };
function save(){ localStorage.setItem('ADPL_STATE', JSON.stringify(state)); updateStats(); }
function byId(id){ return document.getElementById(id); }
function filteredItems(domain=null){
  const topic = byId('topicFilter').value;
  const diff = byId('difficultyFilter').value;
  return ADPL_ITEMS.filter(x => (!domain || x.domain===domain) && (topic==='all'||x.topic===topic) && (diff==='all'||x.difficulty===diff));
}
function renderQuestion(containerId, items, pointerKey){
  const box = byId(containerId);
  if(!items.length){ box.innerHTML='<p>No items match the selected filter.</p>'; return; }
  if(current[pointerKey] >= items.length) current[pointerKey]=0;
  const item = items[current[pointerKey]];
  const saved = state.answers[item.id];
  box.innerHTML = `
    <div><span class="tag">${item.domain}</span><span class="tag">${item.topic}</span><span class="tag">${item.difficulty}</span><span class="tag">Item ${item.id}/100</span></div>
    <div class="qstem">${item.stem}</div>
    <div class="choices">${item.choices.map(c=>`<button class="choice ${saved?.selected===c?'selected':''}" data-choice="${escapeHtml(c)}">${c}</button>`).join('')}</div>
    <div class="actions"><button class="checkBtn">Check Answer</button><button class="nextBtn">Next Item</button></div>
    <div class="feedback" style="display:${saved?'block':'none'}">${saved?feedbackHtml(item,saved.selected):''}</div>`;
  box.querySelectorAll('.choice').forEach(btn=>btn.onclick=()=>{ box.querySelectorAll('.choice').forEach(b=>b.classList.remove('selected')); btn.classList.add('selected'); });
  box.querySelector('.checkBtn').onclick=()=>{
    const selected = box.querySelector('.choice.selected')?.dataset.choice;
    if(!selected){ alert('Select an answer first.'); return; }
    const correct = selected === item.answer;
    state.answers[item.id] = { selected, correct, domain:item.domain, topic:item.topic, difficulty:item.difficulty };
    if(!correct && !state.wrong.includes(item.id)) state.wrong.push(item.id);
    if(correct) state.wrong = state.wrong.filter(id=>id!==item.id);
    save(); renderQuestion(containerId, items, pointerKey);
  };
  box.querySelector('.nextBtn').onclick=()=>{ current[pointerKey]=(current[pointerKey]+1)%items.length; renderQuestion(containerId, items, pointerKey); };
  if(saved){ markChoices(box,item,saved.selected); }
}
function markChoices(box,item,selected){
  box.querySelectorAll('.choice').forEach(btn=>{
    const c=btn.dataset.choice;
    if(c===item.answer) btn.classList.add('correct');
    if(c===selected && c!==item.answer) btn.classList.add('incorrect');
  });
}
function feedbackHtml(item,selected){
  const correct = selected === item.answer;
  return `<strong>${correct?'Correct.':'Incorrect.'}</strong><br><b>Answer:</b> ${item.answer}<br><b>Rationale:</b> ${item.rationale}<br><b>Elimination cue:</b> Identify the core symptom, age period, duration, or theory term being tested.`;
}
function escapeHtml(str){ return String(str).replace(/[&<>'"]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m])); }
function populateTopics(){
  const topics=[...new Set(ADPL_ITEMS.map(x=>x.topic))].sort();
  byId('topicFilter').innerHTML='<option value="all">All topics</option>'+topics.map(t=>`<option>${t}</option>`).join('');
}
function updateAll(){
  renderQuestion('quizBox', filteredItems(), 'diagnostic');
  renderQuestion('abnormalBox', filteredItems('Abnormal Psychology'), 'abnormal');
  renderQuestion('developmentalBox', filteredItems('Developmental Psychology'), 'developmental');
  renderWrong(); renderTracker(); updateStats();
}
function updateStats(){
  const answered = Object.keys(state.answers).length;
  const correct = Object.values(state.answers).filter(a=>a.correct).length;
  byId('answeredCount').textContent = `${answered} answered`;
  byId('readinessScore').textContent = answered ? `${Math.round(correct/answered*100)}%` : '0%';
}
function renderWrong(){
  const items = state.wrong.map(id=>ADPL_ITEMS.find(x=>x.id===id)).filter(Boolean);
  if(!items.length){ byId('wrongBox').innerHTML='<p>No missed items yet.</p>'; return; }
  renderQuestion('wrongBox', items, 'wrong');
}
function renderTracker(){
  const topics=[...new Set(ADPL_ITEMS.map(x=>x.topic))].sort();
  byId('trackerBox').innerHTML = topics.map(topic=>{
    const ans=Object.values(state.answers).filter(a=>a.topic===topic);
    const correct=ans.filter(a=>a.correct).length;
    const pct=ans.length?Math.round(correct/ans.length*100):0;
    return `<div class="mini-card"><h3>${topic}</h3><p>${correct}/${ans.length} correct</p><div class="bar"><div class="fill" style="width:${pct}%"></div></div><p>${pct}% mastery</p></div>`;
  }).join('');
}
function renderScenario(){
  const s=ADPL_SCENARIOS[Math.floor(Math.random()*ADPL_SCENARIOS.length)];
  byId('scenarioBox').innerHTML = `<div class="qstem">${s.case}</div><p><b>${s.question}</b></p>${s.choices.map(c=>`<button class="choice" data-choice="${escapeHtml(c)}">${c}</button>`).join('')}<div class="feedback" style="display:none"></div>`;
  const box=byId('scenarioBox');
  box.querySelectorAll('.choice').forEach(btn=>btn.onclick=()=>{
    box.querySelectorAll('.choice').forEach(b=>b.classList.remove('selected','correct','incorrect'));
    btn.classList.add('selected');
    const selected=btn.dataset.choice;
    box.querySelectorAll('.choice').forEach(b=>{ if(b.dataset.choice===s.answer)b.classList.add('correct'); if(b.dataset.choice===selected && selected!==s.answer)b.classList.add('incorrect'); });
    const fb=box.querySelector('.feedback'); fb.style.display='block'; fb.innerHTML=`<b>Answer:</b> ${s.answer}<br><b>Rationale:</b> ${s.rationale}`;
  });
}
function buildReport(){
  const answered=Object.keys(state.answers).length; const correct=Object.values(state.answers).filter(a=>a.correct).length;
  const pct=answered?Math.round(correct/answered*100):0;
  const weak=[...new Set(Object.values(state.answers).filter(a=>!a.correct).map(a=>a.topic))];
  byId('reportText').value = `AbDev BoardPrep Lab Study Report\n\nAnswered Items: ${answered}/100\nCorrect Items: ${correct}\nReadiness Score: ${pct}%\nWrong Answer Count: ${state.wrong.length}\nPriority Review Areas: ${weak.length?weak.join(', '):'None recorded'}\n\nStudy Interpretation:\nThe student should review missed topics by identifying the core concept, eliminating distractors, and linking symptoms or developmental markers to the correct theory or diagnosis.\n\nGenerated by AbDev BoardPrep Lab.`;
}
document.querySelectorAll('.nav').forEach(btn=>btn.onclick=()=>{ document.querySelectorAll('.nav').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); document.querySelectorAll('.section').forEach(s=>s.classList.remove('active')); byId(btn.dataset.section).classList.add('active'); renderTracker(); renderWrong(); });
byId('topicFilter').onchange=updateAll; byId('difficultyFilter').onchange=updateAll; byId('newScenario').onclick=renderScenario;
byId('resetProgress').onclick=()=>{ if(confirm('Reset all progress?')){ localStorage.removeItem('ADPL_STATE'); location.reload(); } };
byId('diagnosisDrill').onclick=()=>{ const v=byId('symptomCluster').value; const map={panic:'Most consistent cue: panic attacks/panic disorder. Look for abrupt onset, peak within minutes, and physiological arousal.',ocd:'Most consistent cue: OCD. Look for intrusive obsessions and compulsions performed to reduce distress.',mania:'Most consistent cue: manic episode. Look for elevated/irritable mood, increased energy, decreased need for sleep, risky behavior, and impairment.',autism:'Most consistent cue: autism spectrum disorder. Look for social communication deficits plus restricted/repetitive behavior.',delirium:'Most consistent cue: delirium. Look for acute onset, fluctuating attention, and altered awareness.'}; byId('diagnosisOutput').textContent=map[v]; };
byId('milestoneDrill').onclick=()=>{ const v=byId('milestoneCluster').value; const map={object:'Object permanence: sensorimotor stage; the infant understands objects continue to exist when unseen.',conservation:'Conservation: concrete operational stage; the child understands quantity remains stable despite changes in appearance.',identity:'Identity vs role confusion: Erikson’s adolescent crisis involving exploration and commitment.',attachment:'Secure base behavior: attachment figure is used as a base for exploration and comfort.',integrity:'Ego integrity vs despair: late adulthood life review and acceptance versus regret.'}; byId('milestoneOutput').textContent=map[v]; };
byId('buildReport').onclick=buildReport; byId('copyReport').onclick=()=>navigator.clipboard.writeText(byId('reportText').value);
populateTopics(); updateAll(); renderScenario();
