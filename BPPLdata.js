const BPPL_ITEMS = [
  {
    "id": 1,
    "domain": "Psychological Assessment",
    "topic": "Reliability",
    "difficulty": "Easy",
    "question": "A test gives highly similar scores when administered to the same group two weeks apart. What evidence is shown?",
    "options": [
      "Internal consistency",
      "Test-retest reliability",
      "Content validity",
      "Inter-rater reliability"
    ],
    "answer": 1,
    "rationale": "Test-retest reliability concerns score stability across time."
  },
  {
    "id": 2,
    "domain": "Psychological Assessment",
    "topic": "Reliability",
    "difficulty": "Easy",
    "question": "Two examiners independently score the same projective test protocols. Which reliability estimate is most relevant?",
    "options": [
      "Inter-rater reliability",
      "Parallel forms reliability",
      "Split-half reliability",
      "Predictive validity"
    ],
    "answer": 0,
    "rationale": "Inter-rater reliability estimates agreement between scorers or observers."
  },
  {
    "id": 3,
    "domain": "Psychological Assessment",
    "topic": "Reliability",
    "difficulty": "Moderate",
    "question": "A test developer wants to know whether items in a depression scale measure the same construct. Which estimate is most appropriate?",
    "options": [
      "Test-retest reliability",
      "Internal consistency",
      "Face validity",
      "Criterion validity"
    ],
    "answer": 1,
    "rationale": "Internal consistency evaluates whether items within a scale cohere around the same construct."
  },
  {
    "id": 4,
    "domain": "Psychological Assessment",
    "topic": "Reliability",
    "difficulty": "Moderate",
    "question": "A reliability coefficient of .92 generally indicates that the test scores are:",
    "options": [
      "Highly consistent",
      "Invalid",
      "Normally distributed",
      "Free from cultural bias"
    ],
    "answer": 0,
    "rationale": "A high reliability coefficient indicates score consistency, not validity or fairness."
  },
  {
    "id": 5,
    "domain": "Psychological Assessment",
    "topic": "Reliability",
    "difficulty": "Hard",
    "question": "A long test tends to have higher reliability than a very short test mainly because:",
    "options": [
      "It removes all measurement error",
      "It samples more behavior from the construct domain",
      "It eliminates validity threats",
      "It forces a normal distribution"
    ],
    "answer": 1,
    "rationale": "Longer tests usually provide broader sampling of the construct, which can increase reliability."
  },
  {
    "id": 6,
    "domain": "Psychological Assessment",
    "topic": "Validity",
    "difficulty": "Easy",
    "question": "A math achievement test covers all topics taught in the course syllabus. Which validity evidence is emphasized?",
    "options": [
      "Construct validity",
      "Content validity",
      "Concurrent validity",
      "Face validity"
    ],
    "answer": 1,
    "rationale": "Content validity concerns adequate representation of the target content domain."
  },
  {
    "id": 7,
    "domain": "Psychological Assessment",
    "topic": "Validity",
    "difficulty": "Easy",
    "question": "An employment test predicts later job performance ratings. Which validity evidence is shown?",
    "options": [
      "Predictive criterion-related validity",
      "Content validity",
      "Face validity",
      "Internal consistency"
    ],
    "answer": 0,
    "rationale": "Predictive validity evaluates how well scores forecast future criterion performance."
  },
  {
    "id": 8,
    "domain": "Psychological Assessment",
    "topic": "Validity",
    "difficulty": "Moderate",
    "question": "A new anxiety scale correlates strongly with an established anxiety inventory. Which evidence is shown?",
    "options": [
      "Discriminant validity",
      "Convergent validity",
      "Test-retest reliability",
      "Content validity"
    ],
    "answer": 1,
    "rationale": "Convergent validity is supported when measures of related constructs correlate strongly."
  },
  {
    "id": 9,
    "domain": "Psychological Assessment",
    "topic": "Validity",
    "difficulty": "Moderate",
    "question": "A self-esteem scale has low correlations with unrelated math ability scores. Which evidence is supported?",
    "options": [
      "Discriminant validity",
      "Predictive validity",
      "Face validity",
      "Inter-rater reliability"
    ],
    "answer": 0,
    "rationale": "Discriminant validity is supported when a test does not correlate strongly with unrelated constructs."
  },
  {
    "id": 10,
    "domain": "Psychological Assessment",
    "topic": "Validity",
    "difficulty": "Hard",
    "question": "A test is reliable but does not measure the intended construct. The best conclusion is:",
    "options": [
      "Reliability guarantees validity",
      "Validity can exist without reliability",
      "Reliability is necessary but not sufficient for validity",
      "The test is automatically fair"
    ],
    "answer": 2,
    "rationale": "Reliable scores can still be consistently wrong for the intended purpose."
  },
  {
    "id": 11,
    "domain": "Psychological Assessment",
    "topic": "Norms",
    "difficulty": "Easy",
    "question": "A percentile rank of 75 means the examinee:",
    "options": [
      "Answered 75% of items correctly",
      "Scored better than about 75% of the norm group",
      "Has a z-score of 75",
      "Failed 25% of the test"
    ],
    "answer": 1,
    "rationale": "Percentile rank locates a score relative to a reference group."
  },
  {
    "id": 12,
    "domain": "Psychological Assessment",
    "topic": "Norms",
    "difficulty": "Easy",
    "question": "A z-score of +1.00 means the raw score is:",
    "options": [
      "One SD above the mean",
      "One SD below the mean",
      "Equal to the median only",
      "At the 100th percentile"
    ],
    "answer": 0,
    "rationale": "A z-score of +1.00 is one standard deviation above the mean."
  },
  {
    "id": 13,
    "domain": "Psychological Assessment",
    "topic": "Norms",
    "difficulty": "Moderate",
    "question": "If a T-score has mean 50 and SD 10, a z-score of -1.5 equals:",
    "options": [
      "35",
      "40",
      "45",
      "65"
    ],
    "answer": 0,
    "rationale": "T = 50 + 10z; therefore 50 + 10(-1.5) = 35."
  },
  {
    "id": 14,
    "domain": "Psychological Assessment",
    "topic": "Norms",
    "difficulty": "Moderate",
    "question": "Local norms are especially important when:",
    "options": [
      "The test is short",
      "The population differs from the original norm group",
      "The reliability is above .80",
      "The answer key is objective"
    ],
    "answer": 1,
    "rationale": "Norms should match the population for which interpretation will be made."
  },
  {
    "id": 15,
    "domain": "Psychological Assessment",
    "topic": "Norms",
    "difficulty": "Hard",
    "question": "The main limitation of using outdated norms is that:",
    "options": [
      "Validity no longer matters",
      "Score comparisons may not reflect the current population",
      "Reliability becomes impossible to compute",
      "Percentile ranks become raw scores"
    ],
    "answer": 1,
    "rationale": "Outdated norms can distort score interpretation when populations change over time."
  },
  {
    "id": 16,
    "domain": "Psychological Assessment",
    "topic": "Test Construction",
    "difficulty": "Easy",
    "question": "Item difficulty in classical test theory refers to:",
    "options": [
      "Proportion of examinees who answered correctly",
      "Correlation with total score",
      "Number of distractors",
      "Length of the item stem"
    ],
    "answer": 0,
    "rationale": "Item difficulty is usually the proportion correct; higher values mean easier items."
  },
  {
    "id": 17,
    "domain": "Psychological Assessment",
    "topic": "Test Construction",
    "difficulty": "Moderate",
    "question": "A good multiple-choice distractor should be:",
    "options": [
      "Obviously wrong",
      "Plausible to less knowledgeable examinees",
      "Longer than the correct answer",
      "Never chosen"
    ],
    "answer": 1,
    "rationale": "Distractors should attract examinees who have not mastered the concept."
  },
  {
    "id": 18,
    "domain": "Psychological Assessment",
    "topic": "Test Construction",
    "difficulty": "Moderate",
    "question": "Item discrimination refers to an item\u2019s ability to:",
    "options": [
      "Measure speed only",
      "Distinguish high-performing from low-performing examinees",
      "Increase test length",
      "Make the test easier"
    ],
    "answer": 1,
    "rationale": "Discrimination shows whether stronger examinees are more likely to answer correctly."
  },
  {
    "id": 19,
    "domain": "Psychological Assessment",
    "topic": "Test Construction",
    "difficulty": "Hard",
    "question": "An item answered correctly by both low and high scorers at nearly equal rates has:",
    "options": [
      "High discrimination",
      "Low discrimination",
      "High validity automatically",
      "Perfect reliability"
    ],
    "answer": 1,
    "rationale": "Low discrimination means the item poorly separates strong and weak examinees."
  },
  {
    "id": 20,
    "domain": "Psychological Assessment",
    "topic": "Test Construction",
    "difficulty": "Hard",
    "question": "The best first step in constructing a classroom achievement test is to:",
    "options": [
      "Write difficult items immediately",
      "Define objectives and content areas",
      "Administer the final test",
      "Compute norms before items exist"
    ],
    "answer": 1,
    "rationale": "Test construction begins with defining purpose, objectives, and content specifications."
  },
  {
    "id": 21,
    "domain": "Psychological Assessment",
    "topic": "Ethics",
    "difficulty": "Easy",
    "question": "Before administering a psychological test, the examiner should usually obtain:",
    "options": [
      "Informed consent",
      "A diagnosis",
      "A job offer",
      "A percentile rank"
    ],
    "answer": 0,
    "rationale": "Informed consent is a basic ethical requirement unless legally or contextually exempted."
  },
  {
    "id": 22,
    "domain": "Psychological Assessment",
    "topic": "Ethics",
    "difficulty": "Easy",
    "question": "A test user interprets a clinical inventory without training. The main issue is:",
    "options": [
      "Low face validity",
      "Lack of competence",
      "High reliability",
      "Criterion contamination"
    ],
    "answer": 1,
    "rationale": "Ethical test use requires competence in administration and interpretation."
  },
  {
    "id": 23,
    "domain": "Psychological Assessment",
    "topic": "Ethics",
    "difficulty": "Moderate",
    "question": "Using a test for a purpose not supported by its validation evidence is primarily a problem of:",
    "options": [
      "Appropriate test use",
      "Item length",
      "Practice effect",
      "Speededness only"
    ],
    "answer": 0,
    "rationale": "Tests should be used only for purposes supported by evidence and professional standards."
  },
  {
    "id": 24,
    "domain": "Psychological Assessment",
    "topic": "Ethics",
    "difficulty": "Moderate",
    "question": "Test security mainly protects:",
    "options": [
      "The examiner\u2019s preference",
      "The integrity and validity of future testing",
      "The length of the test",
      "The client\u2019s diagnosis only"
    ],
    "answer": 1,
    "rationale": "Exposed test materials can compromise validity and fairness."
  },
  {
    "id": 25,
    "domain": "Psychological Assessment",
    "topic": "Ethics",
    "difficulty": "Hard",
    "question": "When reporting assessment findings, the psychologist should prioritize:",
    "options": [
      "Technical jargon only",
      "Clear, relevant, and supportable conclusions",
      "All raw data without explanation",
      "Only favorable results"
    ],
    "answer": 1,
    "rationale": "Reports must be understandable, relevant, and grounded in assessment evidence."
  },
  {
    "id": 26,
    "domain": "Psychological Assessment",
    "topic": "Assessment Process",
    "difficulty": "Easy",
    "question": "The first step in assessment is usually to clarify the:",
    "options": [
      "Referral question",
      "Percentile rank",
      "Final diagnosis",
      "Norm table"
    ],
    "answer": 0,
    "rationale": "Assessment begins by clarifying the purpose and referral question."
  },
  {
    "id": 27,
    "domain": "Psychological Assessment",
    "topic": "Assessment Process",
    "difficulty": "Easy",
    "question": "A clinical interview is best described as:",
    "options": [
      "A standardized test only",
      "A data-gathering method for history, symptoms, and context",
      "A substitute for all tests",
      "A scoring key"
    ],
    "answer": 1,
    "rationale": "Interviews gather relevant contextual and symptom information."
  },
  {
    "id": 28,
    "domain": "Psychological Assessment",
    "topic": "Assessment Process",
    "difficulty": "Moderate",
    "question": "Using interviews, tests, records, and observations reflects:",
    "options": [
      "Single-method assessment",
      "Multimethod assessment",
      "Random testing",
      "Criterion contamination"
    ],
    "answer": 1,
    "rationale": "Multimethod assessment strengthens conclusions through multiple data sources."
  },
  {
    "id": 29,
    "domain": "Psychological Assessment",
    "topic": "Assessment Process",
    "difficulty": "Moderate",
    "question": "A behavioral observation is most useful for:",
    "options": [
      "Directly noting behavior in context",
      "Replacing informed consent",
      "Computing IQ automatically",
      "Establishing national norms"
    ],
    "answer": 0,
    "rationale": "Observation provides direct evidence of behavior under specific conditions."
  },
  {
    "id": 30,
    "domain": "Psychological Assessment",
    "topic": "Assessment Process",
    "difficulty": "Hard",
    "question": "A discrepancy between interview data and test scores should lead the examiner to:",
    "options": [
      "Ignore one source automatically",
      "Integrate and investigate possible explanations",
      "Report only the highest score",
      "Change the scores"
    ],
    "answer": 1,
    "rationale": "Assessment requires careful integration and reconciliation of conflicting data."
  },
  {
    "id": 31,
    "domain": "Psychological Assessment",
    "topic": "Intelligence Testing",
    "difficulty": "Easy",
    "question": "IQ tests are primarily designed to measure:",
    "options": [
      "General cognitive ability and related domains",
      "Moral character",
      "Job satisfaction",
      "Organizational climate"
    ],
    "answer": 0,
    "rationale": "IQ tests assess cognitive functioning, not character or climate."
  },
  {
    "id": 32,
    "domain": "Psychological Assessment",
    "topic": "Intelligence Testing",
    "difficulty": "Moderate",
    "question": "A Full Scale IQ score should be interpreted cautiously when:",
    "options": [
      "Index scores vary widely",
      "The test has a manual",
      "The examinee is older than 18",
      "The test is individually administered"
    ],
    "answer": 0,
    "rationale": "Large index discrepancies can make the global score less representative."
  },
  {
    "id": 33,
    "domain": "Psychological Assessment",
    "topic": "Intelligence Testing",
    "difficulty": "Moderate",
    "question": "The Flynn effect refers to:",
    "options": [
      "Rising IQ scores across generations",
      "Declining reliability over time",
      "Inter-rater disagreement",
      "Random guessing"
    ],
    "answer": 0,
    "rationale": "The Flynn effect describes generational increases in IQ test performance."
  },
  {
    "id": 34,
    "domain": "Psychological Assessment",
    "topic": "Intelligence Testing",
    "difficulty": "Hard",
    "question": "A low processing speed score may be influenced by:",
    "options": [
      "Only moral weakness",
      "Motor, attention, anxiety, or visual scanning factors",
      "Always high verbal ability",
      "Job satisfaction"
    ],
    "answer": 1,
    "rationale": "Processing speed can be affected by several cognitive and noncognitive factors."
  },
  {
    "id": 35,
    "domain": "Psychological Assessment",
    "topic": "Intelligence Testing",
    "difficulty": "Hard",
    "question": "Best practice in interpreting intelligence test results is to:",
    "options": [
      "Use IQ alone for all decisions",
      "Integrate scores with history, observations, and referral concerns",
      "Ignore confidence intervals",
      "Use only the highest subtest"
    ],
    "answer": 1,
    "rationale": "Cognitive scores require contextual interpretation."
  },
  {
    "id": 36,
    "domain": "Psychological Assessment",
    "topic": "Personality Assessment",
    "difficulty": "Easy",
    "question": "A self-report personality inventory depends mainly on:",
    "options": [
      "The client\u2019s responses to structured items",
      "Observer scoring only",
      "Brain imaging",
      "Reaction time only"
    ],
    "answer": 0,
    "rationale": "Self-report inventories use examinee responses to standardized items."
  },
  {
    "id": 37,
    "domain": "Psychological Assessment",
    "topic": "Personality Assessment",
    "difficulty": "Moderate",
    "question": "Social desirability threatens personality assessment because respondents may:",
    "options": [
      "Answer in an overly favorable manner",
      "Forget the test date",
      "Increase item difficulty",
      "Improve norms"
    ],
    "answer": 0,
    "rationale": "Social desirability can distort responses toward favorable self-presentation."
  },
  {
    "id": 38,
    "domain": "Psychological Assessment",
    "topic": "Personality Assessment",
    "difficulty": "Moderate",
    "question": "Validity scales in personality inventories are used to detect:",
    "options": [
      "Response style and test-taking attitude",
      "Only math ability",
      "Item length",
      "Job tenure"
    ],
    "answer": 0,
    "rationale": "Validity scales help evaluate response consistency, exaggeration, defensiveness, and related patterns."
  },
  {
    "id": 39,
    "domain": "Psychological Assessment",
    "topic": "Personality Assessment",
    "difficulty": "Hard",
    "question": "Projective techniques require caution mainly because:",
    "options": [
      "They are always objective",
      "Scoring and interpretation may have weaker reliability and validity evidence",
      "They cannot be administered individually",
      "They measure only intelligence"
    ],
    "answer": 1,
    "rationale": "Projective methods often require careful attention to scoring reliability and validity support."
  },
  {
    "id": 40,
    "domain": "Psychological Assessment",
    "topic": "Personality Assessment",
    "difficulty": "Hard",
    "question": "A personality test should not be interpreted by relying only on:",
    "options": [
      "A single elevated scale without context",
      "Multiple data sources",
      "Norms and validity indicators",
      "Referral questions"
    ],
    "answer": 0,
    "rationale": "Single-scale interpretation without context can be misleading."
  },
  {
    "id": 41,
    "domain": "Psychological Assessment",
    "topic": "Special Populations",
    "difficulty": "Easy",
    "question": "Testing a child with sensory impairment may require:",
    "options": [
      "Appropriate accommodations",
      "Ignoring the impairment",
      "Using adult norms always",
      "Removing consent"
    ],
    "answer": 0,
    "rationale": "Accommodations may be needed to support fair assessment."
  },
  {
    "id": 42,
    "domain": "Psychological Assessment",
    "topic": "Special Populations",
    "difficulty": "Moderate",
    "question": "When testing bilingual examinees, the examiner should consider:",
    "options": [
      "Language proficiency and test language demands",
      "Only the test color",
      "The examiner\u2019s favorite test",
      "Item order only"
    ],
    "answer": 0,
    "rationale": "Language demands can affect performance and interpretation."
  },
  {
    "id": 43,
    "domain": "Psychological Assessment",
    "topic": "Special Populations",
    "difficulty": "Moderate",
    "question": "A culturally fair interpretation requires attention to:",
    "options": [
      "Norm group, language, experience, and context",
      "Only raw score",
      "Only test speed",
      "Only the highest subtest"
    ],
    "answer": 0,
    "rationale": "Cultural context affects the meaning and fairness of assessment results."
  },
  {
    "id": 44,
    "domain": "Psychological Assessment",
    "topic": "Special Populations",
    "difficulty": "Hard",
    "question": "A test translated informally without validation may have problems with:",
    "options": [
      "Linguistic and construct equivalence",
      "Too much reliability automatically",
      "No need for norms",
      "Perfect content validity"
    ],
    "answer": 0,
    "rationale": "Translation alone does not guarantee equivalent meaning or measurement."
  },
  {
    "id": 45,
    "domain": "Psychological Assessment",
    "topic": "Special Populations",
    "difficulty": "Hard",
    "question": "The best response when norms do not fit the examinee\u2019s background is to:",
    "options": [
      "Use the norms uncritically",
      "State limitations and interpret cautiously",
      "Invent new percentile ranks",
      "Avoid all assessment conclusions"
    ],
    "answer": 1,
    "rationale": "Limitations should be stated and interpretation should be cautious."
  },
  {
    "id": 46,
    "domain": "Psychological Assessment",
    "topic": "Clinical Assessment",
    "difficulty": "Easy",
    "question": "A screening instrument is mainly used to:",
    "options": [
      "Identify possible concerns needing further evaluation",
      "Provide final diagnosis alone",
      "Replace clinical judgment",
      "Guarantee treatment success"
    ],
    "answer": 0,
    "rationale": "Screeners flag possible concerns but do not provide full diagnosis alone."
  },
  {
    "id": 47,
    "domain": "Psychological Assessment",
    "topic": "Clinical Assessment",
    "difficulty": "Moderate",
    "question": "A diagnosis should be based on:",
    "options": [
      "A single test score only",
      "Integrated evidence from interview, criteria, history, and assessment data",
      "The client\u2019s age only",
      "A norm table only"
    ],
    "answer": 1,
    "rationale": "Diagnosis requires integrated clinical evidence."
  },
  {
    "id": 48,
    "domain": "Psychological Assessment",
    "topic": "Clinical Assessment",
    "difficulty": "Moderate",
    "question": "Risk assessment should be included when there are indications of:",
    "options": [
      "Self-harm, suicide, violence, or severe impairment",
      "High test reliability only",
      "A short referral letter",
      "Good rapport"
    ],
    "answer": 0,
    "rationale": "Safety concerns require direct risk assessment."
  },
  {
    "id": 49,
    "domain": "Psychological Assessment",
    "topic": "Clinical Assessment",
    "difficulty": "Hard",
    "question": "A high depression inventory score should be interpreted as:",
    "options": [
      "Evidence of elevated reported symptoms, not a diagnosis by itself",
      "A guaranteed diagnosis",
      "Proof of malingering",
      "Invalid automatically"
    ],
    "answer": 0,
    "rationale": "Inventory scores indicate symptom elevation and require clinical integration."
  },
  {
    "id": 50,
    "domain": "Psychological Assessment",
    "topic": "Clinical Assessment",
    "difficulty": "Hard",
    "question": "The best assessment recommendation is one that is:",
    "options": [
      "Linked to findings and referral needs",
      "Generic for all clients",
      "Based only on age",
      "Unrelated to test results"
    ],
    "answer": 0,
    "rationale": "Recommendations should follow from assessment findings and referral concerns."
  },
  {
    "id": 51,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Job Analysis",
    "difficulty": "Easy",
    "question": "Job analysis is primarily used to identify:",
    "options": [
      "Tasks, duties, responsibilities, and KSAOs",
      "Employee hobbies",
      "Company logos",
      "Salary only"
    ],
    "answer": 0,
    "rationale": "Job analysis defines work requirements and worker attributes needed for performance."
  },
  {
    "id": 52,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Job Analysis",
    "difficulty": "Easy",
    "question": "KSAO stands for:",
    "options": [
      "Knowledge, skills, abilities, and other characteristics",
      "Key salary and occupation",
      "Known stress and overload",
      "Knowledge score and outcome"
    ],
    "answer": 0,
    "rationale": "KSAOs describe worker requirements for job performance."
  },
  {
    "id": 53,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Job Analysis",
    "difficulty": "Moderate",
    "question": "A critical incident technique asks job experts to describe:",
    "options": [
      "Effective and ineffective job behaviors",
      "Company history only",
      "Salary expectations",
      "Personality disorders"
    ],
    "answer": 0,
    "rationale": "Critical incidents capture concrete examples of successful and unsuccessful performance."
  },
  {
    "id": 54,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Job Analysis",
    "difficulty": "Moderate",
    "question": "A job description focuses mainly on:",
    "options": [
      "What the job involves",
      "Who should be promoted",
      "A personality diagnosis",
      "A therapy plan"
    ],
    "answer": 0,
    "rationale": "Job descriptions summarize duties, tasks, and responsibilities."
  },
  {
    "id": 55,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Job Analysis",
    "difficulty": "Hard",
    "question": "A selection procedure is more defensible when it is based on:",
    "options": [
      "Supervisor intuition only",
      "Systematic job analysis",
      "Applicant appearance",
      "Unstructured impressions"
    ],
    "answer": 1,
    "rationale": "Job analysis supports job relevance and legal defensibility."
  },
  {
    "id": 56,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Selection",
    "difficulty": "Easy",
    "question": "The most defensible interview format for selection is generally:",
    "options": [
      "Unstructured interview",
      "Structured interview",
      "Casual conversation",
      "Stress interview without scoring"
    ],
    "answer": 1,
    "rationale": "Structured interviews standardize questions and scoring, improving reliability and validity."
  },
  {
    "id": 57,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Selection",
    "difficulty": "Easy",
    "question": "A work sample test asks applicants to:",
    "options": [
      "Perform tasks similar to the job",
      "Describe childhood memories",
      "Rate company climate",
      "Guess random items"
    ],
    "answer": 0,
    "rationale": "Work samples measure job-relevant performance directly."
  },
  {
    "id": 58,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Selection",
    "difficulty": "Moderate",
    "question": "Incremental validity refers to whether a new predictor:",
    "options": [
      "Adds prediction beyond existing predictors",
      "Has a long manual",
      "Looks professional",
      "Is easy to administer only"
    ],
    "answer": 0,
    "rationale": "Incremental validity means added predictive value beyond current tools."
  },
  {
    "id": 59,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Selection",
    "difficulty": "Moderate",
    "question": "Adverse impact in selection refers to:",
    "options": [
      "A selection procedure disproportionately screening out a protected group",
      "A high applicant score",
      "A training plan",
      "A job description"
    ],
    "answer": 0,
    "rationale": "Adverse impact involves unequal selection effects across groups."
  },
  {
    "id": 60,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Selection",
    "difficulty": "Hard",
    "question": "Using personality tests as the sole basis for hiring is risky because:",
    "options": [
      "They are always invalid",
      "They should be integrated with job-related evidence and other methods",
      "They cannot be scored",
      "They only measure intelligence"
    ],
    "answer": 1,
    "rationale": "Personality tests require job relevance and should not be the only basis for high-stakes decisions."
  },
  {
    "id": 61,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Performance Appraisal",
    "difficulty": "Easy",
    "question": "Performance appraisal is mainly used to evaluate:",
    "options": [
      "Employee job performance",
      "IQ norms",
      "Therapy progress only",
      "Test item difficulty"
    ],
    "answer": 0,
    "rationale": "Performance appraisal assesses work performance for feedback and decisions."
  },
  {
    "id": 62,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Performance Appraisal",
    "difficulty": "Easy",
    "question": "A halo error occurs when:",
    "options": [
      "One positive impression influences ratings across areas",
      "Ratings are based on separate behaviors",
      "The rater uses objective data only",
      "The job is analyzed"
    ],
    "answer": 0,
    "rationale": "Halo error is a global impression bias affecting specific ratings."
  },
  {
    "id": 63,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Performance Appraisal",
    "difficulty": "Moderate",
    "question": "Central tendency error occurs when raters:",
    "options": [
      "Rate everyone near the middle",
      "Use only high ratings",
      "Use only low ratings",
      "Score using behavior anchors"
    ],
    "answer": 0,
    "rationale": "Central tendency reduces differentiation by clustering ratings around average."
  },
  {
    "id": 64,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Performance Appraisal",
    "difficulty": "Moderate",
    "question": "Behaviorally anchored rating scales are useful because they:",
    "options": [
      "Link ratings to specific behavioral examples",
      "Remove the need for job analysis",
      "Measure personality only",
      "Avoid all feedback"
    ],
    "answer": 0,
    "rationale": "BARS connect rating levels with observable work behaviors."
  },
  {
    "id": 65,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Performance Appraisal",
    "difficulty": "Hard",
    "question": "A performance appraisal system is strongest when it is:",
    "options": [
      "Job-related, standardized, and supported by rater training",
      "Informal and undocumented",
      "Based only on popularity",
      "Used without feedback"
    ],
    "answer": 0,
    "rationale": "Good appraisal systems are structured, job-related, and supported by trained raters."
  },
  {
    "id": 66,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Training",
    "difficulty": "Easy",
    "question": "Training needs analysis identifies:",
    "options": [
      "Gaps between current and desired performance",
      "Employee birth order",
      "Test norms",
      "Leadership style only"
    ],
    "answer": 0,
    "rationale": "Needs analysis determines what training is necessary and for whom."
  },
  {
    "id": 67,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Training",
    "difficulty": "Easy",
    "question": "Kirkpatrick\u2019s model includes reaction, learning, behavior, and:",
    "options": [
      "Results",
      "Anxiety",
      "Norms",
      "Discrimination"
    ],
    "answer": 0,
    "rationale": "Kirkpatrick\u2019s model evaluates results as the fourth level."
  },
  {
    "id": 68,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Training",
    "difficulty": "Moderate",
    "question": "Transfer of training means:",
    "options": [
      "Applying learned skills back on the job",
      "Memorizing test items",
      "Changing job titles",
      "Reducing all validity evidence"
    ],
    "answer": 0,
    "rationale": "Transfer occurs when training improves workplace behavior."
  },
  {
    "id": 69,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Training",
    "difficulty": "Moderate",
    "question": "A training program improves test knowledge but not workplace behavior. The weak level is:",
    "options": [
      "Reaction",
      "Behavior transfer",
      "Attendance",
      "Norming"
    ],
    "answer": 1,
    "rationale": "Learning may occur without transfer to job behavior."
  },
  {
    "id": 70,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Training",
    "difficulty": "Hard",
    "question": "Training evaluation is stronger when it includes:",
    "options": [
      "Pre-post data, behavior indicators, and work outcomes",
      "Only participant enjoyment",
      "No baseline",
      "Only trainer opinion"
    ],
    "answer": 0,
    "rationale": "Evaluation improves when it measures change, behavior, and results."
  },
  {
    "id": 71,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Motivation",
    "difficulty": "Easy",
    "question": "Maslow\u2019s theory is best known for:",
    "options": [
      "Hierarchy of needs",
      "Two-factor theory",
      "Equity theory",
      "Goal-setting theory"
    ],
    "answer": 0,
    "rationale": "Maslow proposed a hierarchy of human needs."
  },
  {
    "id": 72,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Motivation",
    "difficulty": "Easy",
    "question": "Herzberg distinguished motivators from:",
    "options": [
      "Hygiene factors",
      "Norms",
      "Validity scales",
      "Job descriptions"
    ],
    "answer": 0,
    "rationale": "Herzberg\u2019s two-factor theory separates motivators from hygiene factors."
  },
  {
    "id": 73,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Motivation",
    "difficulty": "Moderate",
    "question": "Equity theory focuses on perceived fairness in:",
    "options": [
      "Input-output ratios",
      "Item difficulty",
      "Clinical diagnosis",
      "Test translation"
    ],
    "answer": 0,
    "rationale": "Equity theory concerns fairness comparisons between what one contributes and receives."
  },
  {
    "id": 74,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Motivation",
    "difficulty": "Moderate",
    "question": "Goal-setting theory predicts better performance when goals are:",
    "options": [
      "Specific and challenging with feedback",
      "Vague and impossible",
      "Absent",
      "Secret and unmeasured"
    ],
    "answer": 0,
    "rationale": "Specific, challenging goals with feedback tend to improve performance."
  },
  {
    "id": 75,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Motivation",
    "difficulty": "Hard",
    "question": "Expectancy theory states that motivation depends on expectancy, instrumentality, and:",
    "options": [
      "Valence",
      "Reliability",
      "Halo error",
      "Norming"
    ],
    "answer": 0,
    "rationale": "Valence is the value placed on outcomes in expectancy theory."
  },
  {
    "id": 76,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Leadership",
    "difficulty": "Easy",
    "question": "Transformational leadership emphasizes:",
    "options": [
      "Inspiring change and developing followers",
      "Punishment only",
      "Random selection",
      "Item analysis"
    ],
    "answer": 0,
    "rationale": "Transformational leaders motivate through vision, inspiration, and development."
  },
  {
    "id": 77,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Leadership",
    "difficulty": "Easy",
    "question": "Transactional leadership mainly uses:",
    "options": [
      "Rewards and exchanges for performance",
      "Unconditional inspiration only",
      "Projective tests",
      "Norm tables"
    ],
    "answer": 0,
    "rationale": "Transactional leadership is based on exchanges, rewards, and corrective action."
  },
  {
    "id": 78,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Leadership",
    "difficulty": "Moderate",
    "question": "Leader-member exchange theory focuses on:",
    "options": [
      "Quality of leader-follower relationships",
      "Test reliability",
      "Item difficulty",
      "Job satisfaction only"
    ],
    "answer": 0,
    "rationale": "LMX theory examines dyadic relationship quality between leader and member."
  },
  {
    "id": 79,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Leadership",
    "difficulty": "Moderate",
    "question": "A leader who adjusts style based on follower readiness reflects:",
    "options": [
      "Situational leadership",
      "Classical conditioning",
      "Criterion validity",
      "Job enlargement"
    ],
    "answer": 0,
    "rationale": "Situational leadership emphasizes adapting style to follower needs and readiness."
  },
  {
    "id": 80,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Leadership",
    "difficulty": "Hard",
    "question": "An ethical leadership approach requires:",
    "options": [
      "Modeling fairness, integrity, and accountability",
      "Maximizing obedience regardless of harm",
      "Ignoring employee voice",
      "Using favoritism"
    ],
    "answer": 0,
    "rationale": "Ethical leadership requires principled and fair conduct."
  },
  {
    "id": 81,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Organizational Behavior",
    "difficulty": "Easy",
    "question": "Job satisfaction refers to:",
    "options": [
      "Positive evaluation of one\u2019s job",
      "Test reliability",
      "Cognitive ability only",
      "Item discrimination"
    ],
    "answer": 0,
    "rationale": "Job satisfaction is an attitude toward one\u2019s work."
  },
  {
    "id": 82,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Organizational Behavior",
    "difficulty": "Easy",
    "question": "Organizational commitment concerns:",
    "options": [
      "Attachment to and identification with the organization",
      "Percentile rank",
      "Test validity",
      "Item writing"
    ],
    "answer": 0,
    "rationale": "Commitment reflects psychological attachment to the organization."
  },
  {
    "id": 83,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Organizational Behavior",
    "difficulty": "Moderate",
    "question": "Burnout is commonly characterized by exhaustion, cynicism, and:",
    "options": [
      "Reduced professional efficacy",
      "High percentile rank",
      "Item difficulty",
      "Structured scoring"
    ],
    "answer": 0,
    "rationale": "Burnout includes emotional exhaustion, cynicism/depersonalization, and reduced efficacy."
  },
  {
    "id": 84,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Organizational Behavior",
    "difficulty": "Moderate",
    "question": "Psychological safety means employees feel able to:",
    "options": [
      "Speak up without fear of humiliation or punishment",
      "Avoid all feedback",
      "Ignore policies",
      "Use invalid tests"
    ],
    "answer": 0,
    "rationale": "Psychological safety supports interpersonal risk-taking and voice."
  },
  {
    "id": 85,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Organizational Behavior",
    "difficulty": "Hard",
    "question": "Work engagement is commonly described through vigor, dedication, and:",
    "options": [
      "Absorption",
      "Norming",
      "Halo error",
      "Criterion contamination"
    ],
    "answer": 0,
    "rationale": "Engagement is often defined by vigor, dedication, and absorption."
  },
  {
    "id": 86,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Groups and Teams",
    "difficulty": "Easy",
    "question": "Social loafing occurs when individuals:",
    "options": [
      "Exert less effort in a group than alone",
      "Improve through feedback",
      "Score higher on IQ tests",
      "Use structured interviews"
    ],
    "answer": 0,
    "rationale": "Social loafing is reduced individual effort in group settings."
  },
  {
    "id": 87,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Groups and Teams",
    "difficulty": "Moderate",
    "question": "Groupthink is most likely when teams:",
    "options": [
      "Suppress dissent to maintain harmony",
      "Encourage critical debate",
      "Use independent review",
      "Invite outside opinions"
    ],
    "answer": 0,
    "rationale": "Groupthink occurs when cohesion and pressure for agreement impair decisions."
  },
  {
    "id": 88,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Groups and Teams",
    "difficulty": "Moderate",
    "question": "Team cohesion refers to:",
    "options": [
      "The degree of unity and attraction among members",
      "A reliability coefficient",
      "A job description",
      "A selection ratio"
    ],
    "answer": 0,
    "rationale": "Cohesion reflects unity, attraction, and commitment within a team."
  },
  {
    "id": 89,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Groups and Teams",
    "difficulty": "Hard",
    "question": "A cross-functional team is composed of members who:",
    "options": [
      "Come from different areas of expertise",
      "Have identical duties only",
      "Are randomly tested",
      "Do not interact"
    ],
    "answer": 0,
    "rationale": "Cross-functional teams combine different specializations."
  },
  {
    "id": 90,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Groups and Teams",
    "difficulty": "Hard",
    "question": "Conflict over how work should be done is called:",
    "options": [
      "Process conflict",
      "Criterion validity",
      "Norm conflict",
      "Halo conflict"
    ],
    "answer": 0,
    "rationale": "Process conflict concerns task logistics, roles, and procedures."
  },
  {
    "id": 91,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Work Attitudes",
    "difficulty": "Easy",
    "question": "Turnover intention refers to:",
    "options": [
      "An employee\u2019s intention to leave the organization",
      "A test score conversion",
      "A leadership style",
      "A training manual"
    ],
    "answer": 0,
    "rationale": "Turnover intention is the cognitive intention to quit."
  },
  {
    "id": 92,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Work Attitudes",
    "difficulty": "Moderate",
    "question": "Absenteeism may be influenced by job satisfaction, health, and:",
    "options": [
      "Work conditions",
      "Item difficulty",
      "Percentile norms",
      "Face validity only"
    ],
    "answer": 0,
    "rationale": "Absenteeism can be shaped by personal, health, and organizational conditions."
  },
  {
    "id": 93,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Work Attitudes",
    "difficulty": "Moderate",
    "question": "Organizational citizenship behavior refers to:",
    "options": [
      "Discretionary behavior that supports the organization",
      "Required minimum job output only",
      "Clinical diagnosis",
      "Raw score conversion"
    ],
    "answer": 0,
    "rationale": "OCBs are voluntary behaviors that help coworkers or the organization."
  },
  {
    "id": 94,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Work Attitudes",
    "difficulty": "Hard",
    "question": "Counterproductive work behavior refers to:",
    "options": [
      "Actions that harm the organization or its members",
      "High job engagement",
      "Training transfer",
      "Structured interview scoring"
    ],
    "answer": 0,
    "rationale": "CWBs include harmful workplace behaviors such as theft, sabotage, or harassment."
  },
  {
    "id": 95,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Work Attitudes",
    "difficulty": "Hard",
    "question": "Affective commitment means staying because employees:",
    "options": [
      "Want to stay emotionally",
      "Need to stay for costs",
      "Feel obligated morally",
      "Cannot find another job"
    ],
    "answer": 0,
    "rationale": "Affective commitment reflects emotional attachment and desire to remain."
  },
  {
    "id": 96,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Work Design",
    "difficulty": "Easy",
    "question": "Job rotation involves:",
    "options": [
      "Moving employees among different tasks or jobs",
      "Increasing only pay",
      "Removing feedback",
      "Testing applicants"
    ],
    "answer": 0,
    "rationale": "Job rotation exposes employees to different tasks or roles."
  },
  {
    "id": 97,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Work Design",
    "difficulty": "Moderate",
    "question": "Job enrichment increases:",
    "options": [
      "Depth, autonomy, and meaningful responsibility",
      "Only task repetition",
      "Only salary records",
      "Only test length"
    ],
    "answer": 0,
    "rationale": "Job enrichment adds responsibility, autonomy, and meaningfulness."
  },
  {
    "id": 98,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Work Design",
    "difficulty": "Moderate",
    "question": "The Job Characteristics Model includes skill variety, task identity, task significance, autonomy, and:",
    "options": [
      "Feedback",
      "Percentile rank",
      "Inter-rater reliability",
      "Adverse impact"
    ],
    "answer": 0,
    "rationale": "Feedback is one of the five core job characteristics."
  },
  {
    "id": 99,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Work Design",
    "difficulty": "Hard",
    "question": "Autonomy in work design refers to:",
    "options": [
      "Freedom and discretion in scheduling and performing work",
      "The number of applicants",
      "The validity coefficient",
      "The test manual"
    ],
    "answer": 0,
    "rationale": "Autonomy is discretion over work methods and timing."
  },
  {
    "id": 100,
    "domain": "Industrial/Organizational Psychology",
    "topic": "Work Design",
    "difficulty": "Hard",
    "question": "A job with high task significance is one where employees perceive:",
    "options": [
      "Their work affects others in meaningful ways",
      "The work has no consequence",
      "The job is always easy",
      "Ratings are invalid"
    ],
    "answer": 0,
    "rationale": "Task significance concerns the perceived impact of the job on others."
  }
];
