const log = [];
const completed = new Set();
let currentCase = null;

function $(id){ return document.getElementById(id); }
function addLog(title, content){
  log.push(`[${new Date().toLocaleString()}] ${title}\n${content}\n`);
  updateLog();
}
function markDone(key){ completed.add(key); updateProgress(); }
function updateProgress(){
  const total = 6;
  const n = Math.min(completed.size, total);
  $('progressText').textContent = `${n} of ${total} activities completed`;
  $('progressBar').style.width = `${(n/total)*100}%`;
}
function updateLog(){ $('logBox').textContent = log.length ? log.join('\n---\n') : 'No activity yet.'; }
function fillSelect(id, arr){
  const el = $(id); el.innerHTML = arr.map(x => `<option>${x}</option>`).join('');
}
function normalCDF(x){
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp(-x*x/2);
  let p = d*t*(0.3193815 + t*(-0.3565638 + t*(1.781478 + t*(-1.821256 + t*1.330274))));
  if(x > 0) p = 1 - p;
  return p;
}
function fmt(n){ return Number.isFinite(n) ? n.toFixed(2) : '—'; }

function init(){
  fillSelect('purposeSelect', PAL_DATA.purposes);
  fillSelect('constructSelect', PAL_DATA.constructs);
  fillSelect('populationSelect', PAL_DATA.populations);
  document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    $(btn.dataset.tab).classList.add('active');
  }));
  updateLog(); updateProgress();
}

$('runSelector').addEventListener('click', () => {
  const purpose = $('purposeSelect').value;
  const construct = $('constructSelect').value;
  const pop = $('populationSelect').value;
  const stakes = $('stakesSelect').value;
  const recs = PAL_DATA.recommendations[purpose] || [];
  const cautions = [];
  if(stakes.includes('High')) cautions.push('Do not base the decision on one score only. Use converging evidence and document limitations.');
  if(pop === 'Child' || pop === 'Adolescent') cautions.push('Use developmentally appropriate norms and obtain guardian consent when required.');
  cautions.push('Match the test to the referral question, not to convenience.');
  $('selectorResult').innerHTML = `
    <h3>Recommended Assessment Plan</h3>
    <p><span class="pill">${purpose}</span><span class="pill">${construct}</span><span class="pill">${pop}</span></p>
    <h4>Recommended methods</h4>
    <ul>${recs.map(x=>`<li>${x}</li>`).join('')}</ul>
    <h4>Required safeguards</h4>
    <ul>${cautions.map(x=>`<li>${x}</li>`).join('')}</ul>
    <p class="warning">Assessment decision: use multiple data sources and interpret results within the referral context.</p>`;
  markDone('selector');
  addLog('Assessment Selector', `Purpose: ${purpose}\nConstruct: ${construct}\nPopulation: ${pop}\nStakes: ${stakes}\nRecommended: ${recs.join(', ')}`);
});

$('interpretScore').addEventListener('click', () => {
  const raw = parseFloat($('rawScore').value), mean = parseFloat($('meanScore').value), sd = parseFloat($('sdScore').value);
  const construct = $('scoreConstruct').value || 'the measured construct';
  if(!Number.isFinite(raw) || !Number.isFinite(mean) || !Number.isFinite(sd) || sd <= 0){ $('scoreResult').innerHTML = '<h3>Error</h3><p>Enter valid numeric values. SD must be greater than zero.</p>'; return; }
  const z = (raw - mean) / sd;
  const t = 50 + 10*z;
  const pct = normalCDF(z) * 100;
  let level = 'within the average range';
  if(z >= 2) level = 'very high relative to the norm group';
  else if(z >= 1) level = 'above the norm mean';
  else if(z <= -2) level = 'very low relative to the norm group';
  else if(z <= -1) level = 'below the norm mean';
  $('scoreResult').innerHTML = `
    <h3>Score Interpretation</h3>
    <p><strong>z-score:</strong> ${fmt(z)}</p>
    <p><strong>T-score:</strong> ${fmt(t)}</p>
    <p><strong>Estimated percentile:</strong> ${fmt(pct)}</p>
    <p class="warning">Interpretation: The examinee's score on ${construct} is ${level}. This statement should be integrated with interview data, behavioral observations, and referral context.</p>`;
  markDone('scores');
  addLog('Score Interpreter', `Raw=${raw}, Mean=${mean}, SD=${sd}, z=${fmt(z)}, T=${fmt(t)}, Percentile=${fmt(pct)}. Construct: ${construct}`);
});

$('newCase').addEventListener('click', () => {
  currentCase = PAL_DATA.cases[Math.floor(Math.random()*PAL_DATA.cases.length)];
  $('caseBox').innerHTML = `<strong>Case:</strong> ${currentCase.stem}`;
  $('caseResult').innerHTML = '<h3>Case Feedback</h3><p>Write your reasoning, then check.</p>';
});
$('checkCase').addEventListener('click', () => {
  if(!currentCase){ $('caseResult').innerHTML = '<h3>No Case</h3><p>Generate a case first.</p>'; return; }
  const issue = $('caseIssue').value.trim();
  const plan = $('casePlan').value.trim();
  const depth = (issue.length > 40 ? 1 : 0) + (plan.length > 40 ? 1 : 0);
  $('caseResult').innerHTML = `
    <h3>Model Feedback</h3>
    <p><strong>Main issue:</strong> ${currentCase.issue}</p>
    <p><strong>Recommended next step:</strong> ${currentCase.plan}</p>
    <p><strong>Your response depth:</strong> ${depth === 2 ? 'Adequate detail' : 'Needs more specific assessment reasoning'}</p>`;
  markDone('cases');
  addLog('Case Lab', `Case: ${currentCase.stem}\nStudent issue: ${issue}\nStudent plan: ${plan}\nModel issue: ${currentCase.issue}\nModel plan: ${currentCase.plan}`);
});

$('runEthics').addEventListener('click', () => {
  const checked = [...document.querySelectorAll('.ethic:checked')].map(x=>x.value);
  const score = checked.length;
  let risk = '<span class="risk-high">High risk</span>', action = 'Do not proceed until consent, competence, relevance, validity, reliability, norms, confidentiality, and multi-method safeguards are addressed.';
  if(score >= 6){ risk = '<span class="risk-low">Lower risk</span>'; action = 'Proceed cautiously, document the purpose and limitations, and keep interpretation tied to the referral question.'; }
  else if(score >= 4){ risk = '<span class="risk-mod">Moderate risk</span>'; action = 'Revise the assessment plan before use. Missing safeguards may weaken ethical and technical defensibility.'; }
  $('ethicsResult').innerHTML = `<h3>Ethical Risk: ${risk}</h3><p>${score}/8 safeguards selected.</p><p>${action}</p>`;
  markDone('ethics');
  addLog('Ethics Checker', `Safeguards selected: ${checked.join(', ') || 'none'}\nScore: ${score}/8`);
});

$('analyzeItem').addEventListener('click', () => {
  const uc = parseFloat($('upperCorrect').value), ut = parseFloat($('upperTotal').value), lc = parseFloat($('lowerCorrect').value), lt = parseFloat($('lowerTotal').value);
  if([uc,ut,lc,lt].some(x=>!Number.isFinite(x)) || ut<=0 || lt<=0){ $('itemResult').innerHTML = '<h3>Error</h3><p>Enter valid values.</p>'; return; }
  const p = (uc+lc)/(ut+lt);
  const d = (uc/ut) - (lc/lt);
  let diff = p < .30 ? 'difficult' : p > .80 ? 'easy' : 'moderate difficulty';
  let discrim = d >= .40 ? 'strong discrimination' : d >= .20 ? 'acceptable discrimination' : d >= 0 ? 'weak discrimination' : 'negative discrimination; review or remove';
  $('itemResult').innerHTML = `<h3>Item Analysis</h3><p><strong>Difficulty index p:</strong> ${fmt(p)}</p><p><strong>Discrimination index D:</strong> ${fmt(d)}</p><p class="warning">The item appears ${diff} with ${discrim}.</p>`;
  markDone('items');
  addLog('Item Analysis', `p=${fmt(p)}, D=${fmt(d)}. Interpretation: ${diff}; ${discrim}.`);
});

$('buildReport').addEventListener('click', () => {
  const referral = $('referral').value.trim() || '[referral question]';
  const sources = $('sources').value.trim() || '[data sources]';
  const findings = $('findings').value.trim() || '[key findings]';
  const limitations = $('limitations').value.trim() || 'Results should be interpreted within the limits of available data and the assessment context.';
  const report = `Based on the referral question concerning ${referral}, available information was gathered from ${sources}. Findings suggest ${findings}. These results should not be interpreted as a standalone conclusion; they require integration with the client’s history, observed functioning, and the purpose of assessment. Limitations include ${limitations}`;
  $('reportResult').innerHTML = `<h3>Draft Assessment Summary</h3><p>${report}</p><button onclick="navigator.clipboard.writeText(document.querySelector('#reportResult p').innerText)">Copy Summary</button>`;
  markDone('report');
  addLog('Report Builder', report);
});

$('copyLog').addEventListener('click', () => navigator.clipboard.writeText($('logBox').textContent));
$('clearLog').addEventListener('click', () => { log.length = 0; completed.clear(); updateLog(); updateProgress(); });

init();
