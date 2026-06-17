const PAL_DATA = {
  purposes: [
    "Clinical screening", "Diagnostic clarification", "Educational placement", "Career guidance", "Intervention planning", "Research measurement", "Program evaluation", "Neuropsychological referral screening"
  ],
  constructs: [
    "Intelligence / cognitive ability", "Achievement", "Personality", "Mental health symptoms", "Adaptive functioning", "Aptitude", "Interest", "Attitudes", "Behavioral functioning", "Executive functioning"
  ],
  populations: ["Child", "Adolescent", "College student", "Adult", "Older adult", "Employee", "Clinical client", "Community sample"],
  recommendations: {
    "Clinical screening": ["Brief symptom checklist", "Clinical interview", "Behavioral observation", "Collateral information when appropriate"],
    "Diagnostic clarification": ["Structured or semi-structured interview", "Multi-method assessment battery", "Norm-referenced symptom measures", "Functional impairment assessment"],
    "Educational placement": ["Cognitive ability test", "Achievement test", "Teacher/parent rating scales", "Classroom observation"],
    "Career guidance": ["Interest inventory", "Work values scale", "Aptitude assessment", "Career interview"],
    "Intervention planning": ["Baseline symptom measure", "Functional assessment", "Strengths and resources inventory", "Progress monitoring tool"],
    "Research measurement": ["Validated scale with reliability evidence", "Construct validity review", "Pilot testing", "Clear scoring protocol"],
    "Program evaluation": ["Pre-post outcome measure", "Satisfaction scale", "Behavioral indicators", "Qualitative feedback form"],
    "Neuropsychological referral screening": ["Brief cognitive screener", "Functional history", "Medical/developmental history", "Referral for full neuropsychological testing if indicated"]
  },
  cases: [
    {
      stem: "A 10-year-old student is referred for assessment due to persistent difficulty in reading despite regular classroom instruction. The teacher asks whether the child has low intelligence.",
      issue: "Avoid assuming low intelligence from academic difficulty alone. The case requires assessment of achievement, cognitive functioning, learning history, and instructional exposure.",
      plan: "Use a multi-method educational assessment: achievement testing, cognitive assessment, developmental and school history, classroom data, and teacher/parent reports. Interpret reading difficulty in context."
    },
    {
      stem: "A college student reports severe anxiety during oral presentations. The instructor requests a single test score to decide whether the student should be exempted from all presentations.",
      issue: "A single score is insufficient for a high-impact decision. Functional impairment, context, and accommodations must be assessed.",
      plan: "Use clinical interview, anxiety scale, functional assessment, and academic context review. Recommend reasonable accommodations only when supported by multiple data sources."
    },
    {
      stem: "A company wants to use an online personality quiz from social media for hiring applicants because it is free and easy to administer.",
      issue: "The proposed tool lacks evidence of reliability, validity, standardization, and job relevance. It is ethically risky for selection.",
      plan: "Use validated, job-relevant assessment methods with documented reliability, validity, fairness, and standardized administration."
    },
    {
      stem: "A client obtains a high depression score on a screening scale after a recent breakup. The family asks for a formal diagnosis based only on that score.",
      issue: "Screening scores do not establish diagnosis. Context, duration, impairment, risk, and differential considerations must be assessed.",
      plan: "Conduct clinical interview, risk assessment, symptom history, functional impairment review, and use screening results as supportive evidence only."
    },
    {
      stem: "A researcher translates an English self-esteem scale into Filipino and immediately uses it as the main outcome measure without pilot testing.",
      issue: "Translation alone does not establish measurement equivalence or validity in the target population.",
      plan: "Use translation/back-translation or committee review, cognitive interviews, pilot testing, reliability analysis, and validity evidence before full use."
    },
    {
      stem: "A parent requests the raw test protocol of another child to compare results with their own child’s performance.",
      issue: "Test materials and another client’s records are protected. Confidentiality and test security must be preserved.",
      plan: "Decline release of protected materials and provide only appropriate summary information to authorized parties."
    },
    {
      stem: "A guidance counselor uses a test normed only on adults to interpret scores of Grade 6 students.",
      issue: "Norms are inappropriate for the examinee group, making score interpretation invalid or misleading.",
      plan: "Use age-appropriate norms and a test validated for the developmental level of the examinees."
    },
    {
      stem: "A trainee notices that most students answered an item correctly, including low-performing students. The instructor asks whether the item should remain in the test.",
      issue: "The item may be very easy and may have weak discrimination. Item analysis is needed before deciding.",
      plan: "Review item difficulty, discrimination, content relevance, and alignment with learning objectives before retaining, revising, or removing it."
    }
  ]
};
