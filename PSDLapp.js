const $ = (id) => document.getElementById(id);
let currentScenario = null;
let currentQuiz = 0;
let lastRecommendation = "";
let lastAPA = "";
let lastScenarioTitle = "";

function roundP(p) {
  if (Number.isNaN(p)) return "p = ___";
  if (p < .001) return "p < .001";
  return `p = ${p.toFixed(3).replace(/^0/, "")}`;
}

function html(strings) { return strings.join(""); }

document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    $(btn.dataset.tab).classList.add('active');
  });
});

function recommendTest() {
  const goal = $('goal').value;
  const groups = $('groups').value;
  const relationship = $('relationship').value;
  const level = $('level').value;
  const assumption = $('assumptionStatus').value;
  const context = $('context').selectedOptions[0].text;

  let test = "";
  let reason = "";
  let note = "";

  if (goal === 'frequency' || level === 'categorical') {
    test = "Chi-square test of independence";
    reason = "Use this when the research question asks whether two categorical variables are associated.";
    note = "Use Fisher's exact test when expected cell counts are too small.";
  } else if (goal === 'association') {
    test = assumption === 'violated' || level === 'ordinal' ? "Spearman rho" : "Pearson correlation";
    reason = "Use this when the research question asks whether two variables move together.";
    note = "Correlation does not establish causation.";
  } else if (goal === 'prediction') {
    test = "Simple or multiple regression";
    reason = "Use regression when the goal is to estimate or predict an outcome from one or more predictors.";
    note = "Check linearity, residuals, and influential cases.";
  } else if (goal === 'difference') {
    if (groups === 'two' && relationship === 'independent') {
      test = assumption === 'violated' || level === 'ordinal' ? "Mann–Whitney U test" : "Independent samples t-test";
      reason = "Use this for comparing two independent groups on one outcome.";
      note = "Example: comparing test anxiety between intervention and control groups.";
    } else if (groups === 'two' && relationship === 'related') {
      test = assumption === 'violated' || level === 'ordinal' ? "Wilcoxon signed-rank test" : "Paired samples t-test";
      reason = "Use this for comparing two related scores from the same participants or matched pairs.";
      note = "Example: pretest and posttest anxiety scores from the same clients.";
    } else if (groups === 'threeplus') {
      test = assumption === 'violated' || level === 'ordinal' ? "Kruskal–Wallis test" : "One-way ANOVA";
      reason = "Use this for comparing three or more groups on one outcome.";
      note = "Use post hoc tests when the omnibus result is significant.";
    } else {
      test = "One-sample t-test or descriptive statistics";
      reason = "Use this when one group is compared with a known value or when the goal is only to summarize scores.";
      note = "Clarify whether there is a comparison value."
    }
  }

  lastRecommendation = `${test}. ${reason}`;
  $('recommendation').innerHTML = `
    <h3>Recommended Test: <span class="badge">${test}</span></h3>
    <p><strong>Reason:</strong> ${reason}</p>
    <p><strong>Psychology context:</strong> ${context}</p>
    <p><strong>Teaching note:</strong> ${note}</p>
  `;
}

function generateScenario() {
  currentScenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
  lastScenarioTitle = currentScenario.title;
  $('scenarioBox').innerHTML = `
    <h3>${currentScenario.title}</h3>
    <p>${currentScenario.prompt}</p>
  `;
  $('scenarioAnswer').innerHTML = "";
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
    <p><strong>Alternative hypothesis:</strong> ${currentScenario.h1}</p>
  `;
}

function checkAssumptions() {
  const checked = [...document.querySelectorAll('.assumption:checked')].map(x => x.value);
  const count = checked.length;
  let decision = "";
  if (count >= 4) {
    decision = "Parametric testing is likely acceptable, provided the research design matches the selected test.";
  } else if (count >= 2) {
    decision = "Use caution. Inspect the data further, report assumption checks, and consider nonparametric alternatives when violations are serious.";
  } else {
    decision = "Nonparametric testing or descriptive analysis is safer unless additional evidence supports parametric assumptions.";
  }
  $('assumptionResult').innerHTML = `
    <h3>Assumption Decision</h3>
    <p>${decision}</p>
    <p><strong>Checked assumptions:</strong> ${count} out of 5.</p>
    <p><strong>Reminder:</strong> The correct test still depends on the research design, number of groups, and variable level.</p>
  `;
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
  const sig = !Number.isNaN(p) && p < .05 ? "significant" : "not significant";
  const direction = (!Number.isNaN(m1) && !Number.isNaN(m2))
    ? (m1 > m2 ? `${g1} had higher ${outcome} scores than ${g2}` : m1 < m2 ? `${g1} had lower ${outcome} scores than ${g2}` : `${g1} and ${g2} had equal mean scores`)
    : `the direction should be interpreted using the descriptive statistics`;

  let symbol = "";
  let sentence = "";

  if (test.includes('independent')) {
    symbol = `t(${df}) = ${Number.isNaN(stat) ? '___' : stat.toFixed(3)}`;
    sentence = `An independent samples t-test showed a ${sig} difference in ${outcome} between ${g1} and ${g2}, ${symbol}, ${roundP(p)}. ${direction}.`;
  } else if (test.includes('paired')) {
    symbol = `t(${df}) = ${Number.isNaN(stat) ? '___' : stat.toFixed(3)}`;
    sentence = `A paired samples t-test showed a ${sig} change in ${outcome} from ${g1} to ${g2}, ${symbol}, ${roundP(p)}. ${direction}.`;
  } else if (test === 'mann-whitney') {
    symbol = `U = ${Number.isNaN(stat) ? '___' : stat.toFixed(3)}`;
    sentence = `A Mann–Whitney U test showed a ${sig} difference in ${outcome} between ${g1} and ${g2}, ${symbol}, ${roundP(p)}. ${direction}.`;
  } else if (test === 'wilcoxon') {
    symbol = `W = ${Number.isNaN(stat) ? '___' : stat.toFixed(3)}`;
    sentence = `A Wilcoxon signed-rank test showed a ${sig} change in ${outcome} from ${g1} to ${g2}, ${symbol}, ${roundP(p)}. ${direction}.`;
  } else if (test === 'anova') {
    symbol = `F(${df}) = ${Number.isNaN(stat) ? '___' : stat.toFixed(3)}`;
    sentence = `A one-way ANOVA showed a ${sig} difference in ${outcome} across groups, ${symbol}, ${roundP(p)}.`;
  } else if (test === 'correlation') {
    symbol = `r(${df}) = ${Number.isNaN(stat) ? '___' : stat.toFixed(3)}`;
    sentence = `A Pearson correlation showed a ${sig} relationship between ${g1} and ${g2}, ${symbol}, ${roundP(p)}.`;
  } else if (test === 'chi-square') {
    symbol = `χ²(${df}) = ${Number.isNaN(stat) ? '___' : stat.toFixed(3)}`;
    sentence = `A chi-square test of independence showed a ${sig} association between ${g1} and ${g2}, ${symbol}, ${roundP(p)}.`;
  }

  lastAPA = sentence;
  $('apaOutput').innerHTML = `<h3>APA Interpretation</h3><p>${sentence}</p><p><strong>Check before submission:</strong> Add means, standard deviations, effect size, confidence interval, or post hoc results when required by the analysis.</p>`;
}

function renderQuiz() {
  const item = QUIZ[currentQuiz];
  $('quizBox').innerHTML = `
    <h3>Question ${currentQuiz + 1} of ${QUIZ.length}</h3>
    <p>${item.q}</p>
    ${item.options.map((opt, i) => `<label class="option"><input type="radio" name="quiz" value="${i}" /> ${String.fromCharCode(65+i)}. ${opt}</label>`).join('')}
  `;
  $('quizFeedback').innerHTML = "";
}

function checkQuiz() {
  const selected = document.querySelector('input[name="quiz"]:checked');
  if (!selected) {
    $('quizFeedback').innerHTML = `<p class="warning">Select an answer first.</p>`;
    return;
  }
  const item = QUIZ[currentQuiz];
  const correct = Number(selected.value) === item.answer;
  $('quizFeedback').innerHTML = `
    <h3>${correct ? 'Correct' : 'Incorrect'}</h3>
    <p><strong>Answer:</strong> ${item.options[item.answer]}</p>
    <p><strong>Rationale:</strong> ${item.rationale}</p>
  `;
}

function nextQuiz() {
  currentQuiz = (currentQuiz + 1) % QUIZ.length;
  renderQuiz();
}

function exportLog() {
  const name = $('studentName').value || "Student";
  const reflection = $('reflection').value || "No reflection entered.";
  const log = `PsychStat Decision Lab Learning Log\n\nStudent: ${name}\nDate: ${new Date().toLocaleDateString()}\n\nLast Test Recommendation:\n${lastRecommendation || 'No recommendation generated yet.'}\n\nLast Scenario Practiced:\n${lastScenarioTitle || 'No scenario generated yet.'}\n\nLast APA Interpretation:\n${lastAPA || 'No APA interpretation generated yet.'}\n\nReflection:\n${reflection}`;
  $('exportOutput').value = log;
}

$('recommendBtn').addEventListener('click', recommendTest);
$('newScenarioBtn').addEventListener('click', generateScenario);
$('showScenarioAnswerBtn').addEventListener('click', showScenarioAnswer);
$('checkAssumptionsBtn').addEventListener('click', checkAssumptions);
$('generateApaBtn').addEventListener('click', generateAPA);
$('checkQuizBtn').addEventListener('click', checkQuiz);
$('nextQuizBtn').addEventListener('click', nextQuiz);
$('exportBtn').addEventListener('click', exportLog);

generateScenario();
renderQuiz();
