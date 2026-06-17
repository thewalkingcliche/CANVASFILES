let logEntries = [];
let currentCase = CASES[0];

const $ = id => document.getElementById(id);
function populate(selectId, arr, key='name'){
  const el=$(selectId); el.innerHTML='';
  arr.forEach(item=>{ const opt=document.createElement('option'); opt.value=item[key]; opt.textContent=item[key]; el.appendChild(opt); });
}
function addLog(section, summary){
  logEntries.push({section, summary, time:new Date().toLocaleString()});
  $('logCount').textContent=logEntries.length;
  renderLog();
}
function renderLog(){
  const name=$('studentName')?.value || '';
  const reflection=$('reflection')?.value || '';
  let text=`NeuroPsych Explorer Lab Study Report\nStudent: ${name}\nDate: ${new Date().toLocaleString()}\n\nLearning Entries:\n`;
  logEntries.forEach((e,i)=> text += `\n${i+1}. [${e.section}] ${e.summary}\n   Time: ${e.time}\n`);
  text += `\nReflection:\n${reflection}\n`;
  if($('logOutput')) $('logOutput').textContent=text;
  return text;
}
function selectedBrain(){ return BRAIN_AREAS.find(x=>x.name===$('brainSelect').value); }
function renderBrain(){
  const b=selectedBrain();
  $('brainOutput').innerHTML=`<h3>${b.name}</h3><span class="pill">Brain–Behavior Link</span><p><strong>Primary function:</strong> ${b.function}</p><p><strong>Behavioral relevance:</strong> ${b.behavior}</p><p><strong>Possible impairment:</strong> ${b.impairment}</p><div class="note">Learning task: Explain how this region connects biological function with observable behavior.</div>`;
}
function selectedNeuro(){ return NEUROTRANSMITTERS.find(x=>x.name===$('neuroSelect').value); }
function renderNeuro(){
  const n=selectedNeuro();
  $('neuroOutput').innerHTML=`<h3>${n.name}</h3><span class="pill">Neurochemical System</span><p><strong>Core role:</strong> ${n.core}</p><p><strong>Psychological relevance:</strong> ${n.relevance}</p><div class="warn"><strong>Common misconception:</strong> ${n.myth}</div>`;
}
function renderSleep(){
  const hours=+$('sleepHours').value, stress=+$('sleepStress').value, caffeine=$('caffeine').value, screen=$('screen').value;
  $('sleepHoursLabel').textContent=hours; $('sleepStressLabel').textContent=stress;
  let risk=0; if(hours<6) risk+=2; if(hours<4) risk+=2; if(stress>6) risk+=2; if(caffeine==='afternoon') risk+=1; if(caffeine==='evening') risk+=2; if(screen==='moderate') risk+=1; if(screen==='high') risk+=2;
  const level=risk<=2?'Low disruption':risk<=5?'Moderate disruption':'High disruption';
  const effects=[];
  if(hours<6) effects.push('reduced attention and slower reaction time'); else effects.push('better restoration and attention stability');
  if(stress>6) effects.push('weaker emotional regulation and lighter sleep');
  if(caffeine==='evening') effects.push('delayed sleep onset and possible REM disruption');
  if(screen==='high') effects.push('circadian delay risk and later sleep timing');
  $('sleepOutput').innerHTML=`<h3>${level}</h3><p><strong>Predicted effects:</strong></p><ul>${effects.map(e=>`<li>${e}</li>`).join('')}</ul><div class="note">Mechanism focus: sleep supports attention, emotional regulation, and memory consolidation.</div>`;
}
function renderStress(){
  const intensity=+$('stressIntensity').value, duration=$('stressDuration').value, recovery=$('recovery').value;
  $('stressIntensityLabel').textContent=intensity;
  let load=intensity + (duration==='repeated'?3:duration==='chronic'?5:1) + (recovery==='moderate'?1:recovery==='low'?3:0);
  const level=load<8?'Adaptive stress response':load<14?'Elevated allostatic load':'High sustained physiological load';
  const sns=intensity>5?'strong sympathetic activation':'mild to moderate sympathetic activation';
  const hpa=duration==='acute'?'brief HPA-axis involvement':'sustained HPA-axis involvement with greater recovery demand';
  const outcome=load<8?'may sharpen alertness temporarily':load<14?'may disrupt attention, sleep, and emotional regulation':'may impair cognition, mood regulation, immune balance, and recovery';
  $('stressOutput').innerHTML=`<h3>${level}</h3><p><strong>SNS:</strong> ${sns}</p><p><strong>HPA axis:</strong> ${hpa}</p><p><strong>Likely behavioral effect:</strong> ${outcome}.</p><div class="note">Mechanism focus: acute stress may be adaptive; chronic stress increases physiological cost.</div>`;
}
function newCase(){
  currentCase=CASES[Math.floor(Math.random()*CASES.length)];
  $('caseText').textContent=currentCase.text;
  $('caseOutput').innerHTML='<h3>Case Feedback</h3><p>Select the likely system, then check mapping.</p>';
}
function checkCase(){
  const choice=$('caseChoice').value;
  const ok=choice===currentCase.answer;
  $('caseOutput').innerHTML=`<h3>${ok?'Strong mapping':'Revise the mapping'}</h3><p><strong>Your choice:</strong> ${choice}</p><p><strong>Target system:</strong> ${currentCase.answer}</p><p>${currentCase.explain}</p>`;
}
function renderLesion(){
  const b=BRAIN_AREAS.find(x=>x.name===$('lesionSelect').value);
  $('lesionOutput').innerHTML=`<h3>${b.name} Lesion Pattern</h3><p><strong>Likely effect:</strong> ${b.impairment}</p><p><strong>Clinical reasoning:</strong> Damage is interpreted by connecting the region's function to the observed behavioral change.</p><div class="warn">Avoid one-to-one localization. Real cases may involve networks, severity, compensation, and developmental timing.</div>`;
}

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active'); $(btn.dataset.tab).classList.add('active');
}));

populate('brainSelect', BRAIN_AREAS); populate('lesionSelect', BRAIN_AREAS); populate('neuroSelect', NEUROTRANSMITTERS); populate('caseChoice', BRAIN_AREAS);
$('brainSelect').addEventListener('change', renderBrain); $('neuroSelect').addEventListener('change', renderNeuro); $('lesionSelect').addEventListener('change', renderLesion);
['sleepHours','sleepStress','caffeine','screen'].forEach(id=>$(id).addEventListener('input', renderSleep));
['stressIntensity','stressDuration','recovery'].forEach(id=>$(id).addEventListener('input', renderStress));
$('brainSave').onclick=()=>{const b=selectedBrain(); addLog('Brain–Behavior Map', `${b.name}: ${b.behavior}`);};
$('neuroSave').onclick=()=>{const n=selectedNeuro(); addLog('Neurotransmitter Explorer', `${n.name}: ${n.core}`);};
$('sleepSave').onclick=()=>addLog('Sleep Simulator', $('sleepOutput').innerText.replace(/\n/g,' | '));
$('stressSave').onclick=()=>addLog('Stress Simulator', $('stressOutput').innerText.replace(/\n/g,' | '));
$('newCase').onclick=newCase; $('checkCase').onclick=checkCase;
$('caseSave').onclick=()=>addLog('Case-to-Brain Mapper', `Case: ${currentCase.text} | Target: ${currentCase.answer}`);
$('lesionSave').onclick=()=>{const b=BRAIN_AREAS.find(x=>x.name===$('lesionSelect').value); addLog('Lesion Explorer', `${b.name}: ${b.impairment}`);};
$('exportLog').onclick=()=>{ const text=renderLog(); const blob=new Blob([text],{type:'text/plain'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='neuropsych-explorer-study-report.txt'; a.click(); };
$('clearLog').onclick=()=>{ logEntries=[]; $('logCount').textContent=0; renderLog(); };
['studentName','reflection'].forEach(id=>$(id).addEventListener('input', renderLog));

renderBrain(); renderNeuro(); renderSleep(); renderStress(); newCase(); renderLesion(); renderLog();
