const WPDL_TOPICS = [
  "Job Analysis","Recruitment","Selection","Training","Performance Appraisal","Motivation","Leadership","Organizational Culture","Work Stress","Organizational Development","Teams","Ethics"
];

const WPDL_CASES = [
[
  {
    "id": 1,
    "topic": "Job Analysis",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Role confusion in a new HR unit",
    "stem": "Employees perform overlapping tasks and supervisors disagree about what the HR assistant role should include.",
    "options": [
      "Conduct a job analysis before changing selection or appraisal tools",
      "Increase salary immediately",
      "Use a personality inventory for all workers",
      "Remove tasks from the role without evidence"
    ],
    "answer": "Conduct a job analysis before changing selection or appraisal tools",
    "rationale": "Job analysis is the foundation for defining duties, KSAOs, selection criteria, training needs, and appraisal standards.",
    "distractors": [
      "'Increase salary immediately' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use a personality inventory for all workers' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Remove tasks from the role without evidence' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 2,
    "topic": "Job Analysis",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Choosing the best job analysis method",
    "stem": "An I/O consultant needs detailed task information from current employees and supervisors for a clerical role.",
    "options": [
      "Use interviews, questionnaires, and observation to document tasks and KSAOs",
      "Use only a projective test",
      "Use customer satisfaction ratings only",
      "Use informal comments from one manager"
    ],
    "answer": "Use interviews, questionnaires, and observation to document tasks and KSAOs",
    "rationale": "Multiple job analysis methods improve accuracy and reduce single-source bias.",
    "distractors": [
      "'Use only a projective test' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use customer satisfaction ratings only' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use informal comments from one manager' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 3,
    "topic": "Recruitment",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Low applicant pool",
    "stem": "A company has few qualified applicants despite many job postings.",
    "options": [
      "Review recruitment sources, employer branding, and job advertisement clarity",
      "Lower standards without analysis",
      "Hire the first available applicant",
      "Use only employee referrals indefinitely"
    ],
    "answer": "Review recruitment sources, employer branding, and job advertisement clarity",
    "rationale": "Recruitment problems require examining applicant attraction, communication, and source effectiveness.",
    "distractors": [
      "'Lower standards without analysis' is weaker because it does not directly address the I/O principle in the stem.",
      "'Hire the first available applicant' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only employee referrals indefinitely' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 4,
    "topic": "Recruitment",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Realistic job preview",
    "stem": "New hires resign after learning the job includes rotating shifts and emotional labor.",
    "options": [
      "Use a realistic job preview during recruitment",
      "Hide difficult job demands",
      "Add a personality test after hiring",
      "Use only monetary incentives"
    ],
    "answer": "Use a realistic job preview during recruitment",
    "rationale": "Realistic job previews reduce mismatch by clarifying job demands before acceptance.",
    "distractors": [
      "'Hide difficult job demands' is weaker because it does not directly address the I/O principle in the stem.",
      "'Add a personality test after hiring' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only monetary incentives' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 5,
    "topic": "Selection",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Structured interviews",
    "stem": "An employer wants to reduce bias in interviews.",
    "options": [
      "Use standardized job-related questions and scoring rubrics",
      "Use casual conversation only",
      "Ask different questions to each applicant",
      "Select based on interviewer intuition"
    ],
    "answer": "Use standardized job-related questions and scoring rubrics",
    "rationale": "Structured interviews improve consistency, job relevance, and defensibility.",
    "distractors": [
      "'Use casual conversation only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ask different questions to each applicant' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Select based on interviewer intuition' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 6,
    "topic": "Selection",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "High-stakes hiring",
    "stem": "A supervisor wants to hire based only on a personality score.",
    "options": [
      "Use personality results only as one part of a multi-method selection system",
      "Hire only the highest personality score",
      "Reject applicants with average scores",
      "Ignore job analysis"
    ],
    "answer": "Use personality results only as one part of a multi-method selection system",
    "rationale": "Single-test decisions are weak; selection should be job-related and based on multiple valid sources.",
    "distractors": [
      "'Hire only the highest personality score' is weaker because it does not directly address the I/O principle in the stem.",
      "'Reject applicants with average scores' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore job analysis' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 7,
    "topic": "Selection",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Adverse impact concern",
    "stem": "A cognitive ability test predicts performance but appears to screen out a protected group at a higher rate.",
    "options": [
      "Evaluate adverse impact and consider valid complementary predictors",
      "Discard all tests automatically",
      "Ignore group differences if the test is useful",
      "Use unstructured interviews instead"
    ],
    "answer": "Evaluate adverse impact and consider valid complementary predictors",
    "rationale": "Selection systems must balance validity, fairness, and legal defensibility.",
    "distractors": [
      "'Discard all tests automatically' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ignore group differences if the test is useful' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use unstructured interviews instead' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 8,
    "topic": "Training",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Skill gap",
    "stem": "Employees know the policy but cannot use the new software accurately.",
    "options": [
      "Provide skills training with practice and feedback",
      "Deliver a motivational speech only",
      "Change the entire appraisal system",
      "Reduce job standards"
    ],
    "answer": "Provide skills training with practice and feedback",
    "rationale": "A demonstrated inability to perform a skill is a training need.",
    "distractors": [
      "'Deliver a motivational speech only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Change the entire appraisal system' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Reduce job standards' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 9,
    "topic": "Training",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Training needs analysis",
    "stem": "Performance problems may be due to unclear procedures, outdated tools, or lack of skill.",
    "options": [
      "Conduct organizational, task, and person analysis",
      "Immediately buy an online course",
      "Punish low performers",
      "Replace the team leader without evidence"
    ],
    "answer": "Conduct organizational, task, and person analysis",
    "rationale": "Training needs analysis determines whether training is the correct intervention.",
    "distractors": [
      "'Immediately buy an online course' is weaker because it does not directly address the I/O principle in the stem.",
      "'Punish low performers' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Replace the team leader without evidence' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 10,
    "topic": "Performance Appraisal",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Leniency error",
    "stem": "A supervisor gives nearly all employees excellent ratings to avoid conflict.",
    "options": [
      "Leniency error",
      "Halo effect",
      "Contrast effect",
      "Recency effect"
    ],
    "answer": "Leniency error",
    "rationale": "Leniency occurs when ratings are consistently too favorable.",
    "distractors": [
      "'Halo effect' is weaker because it does not directly address the I/O principle in the stem.",
      "'Contrast effect' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Recency effect' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 11,
    "topic": "Performance Appraisal",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Unclear appraisal criteria",
    "stem": "Employees say their ratings depend on whether the supervisor likes them.",
    "options": [
      "Use behaviorally anchored and job-related appraisal criteria",
      "Keep ratings private and vague",
      "Use popularity votes",
      "Rate only attendance"
    ],
    "answer": "Use behaviorally anchored and job-related appraisal criteria",
    "rationale": "Clear criteria reduce subjectivity and improve appraisal fairness.",
    "distractors": [
      "'Keep ratings private and vague' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use popularity votes' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Rate only attendance' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 12,
    "topic": "Performance Appraisal",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Criterion contamination",
    "stem": "Sales employees are rated partly on store location traffic that they cannot control.",
    "options": [
      "Remove uncontrollable factors from appraisal criteria",
      "Keep the criterion because it is easy to measure",
      "Rate only personality",
      "Use only peer gossip"
    ],
    "answer": "Remove uncontrollable factors from appraisal criteria",
    "rationale": "Criterion contamination occurs when performance measures include irrelevant or uncontrollable factors.",
    "distractors": [
      "'Keep the criterion because it is easy to measure' is weaker because it does not directly address the I/O principle in the stem.",
      "'Rate only personality' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only peer gossip' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 13,
    "topic": "Motivation",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Equity theory",
    "stem": "An employee reduces effort after learning a coworker with similar output receives higher pay.",
    "options": [
      "Equity theory",
      "Goal-setting theory",
      "Trait theory",
      "Classical conditioning"
    ],
    "answer": "Equity theory",
    "rationale": "Equity theory focuses on perceived fairness of input-output ratios.",
    "distractors": [
      "'Goal-setting theory' is weaker because it does not directly address the I/O principle in the stem.",
      "'Trait theory' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Classical conditioning' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 14,
    "topic": "Motivation",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Expectancy problem",
    "stem": "Employees believe effort will not improve performance because equipment frequently fails.",
    "options": [
      "Address expectancy by fixing resources and removing barriers",
      "Offer praise only",
      "Set harder goals immediately",
      "Ignore tools and punish workers"
    ],
    "answer": "Address expectancy by fixing resources and removing barriers",
    "rationale": "Expectancy suffers when effort is not perceived to lead to performance.",
    "distractors": [
      "'Offer praise only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Set harder goals immediately' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore tools and punish workers' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 15,
    "topic": "Motivation",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Goal-setting theory",
    "stem": "A manager wants to improve productivity using goals.",
    "options": [
      "Use specific, difficult, accepted goals with feedback",
      "Use vague goals like 'do your best'",
      "Use goals unrelated to job tasks",
      "Set goals without feedback"
    ],
    "answer": "Use specific, difficult, accepted goals with feedback",
    "rationale": "Goal-setting theory emphasizes specificity, difficulty, acceptance, and feedback.",
    "distractors": [
      "'Use vague goals like 'do your best'' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use goals unrelated to job tasks' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Set goals without feedback' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 16,
    "topic": "Leadership",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Transformational leadership",
    "stem": "A leader inspires employees through vision, intellectual stimulation, and individualized consideration.",
    "options": [
      "Transformational leadership",
      "Transactional leadership",
      "Laissez-faire leadership",
      "Autocratic leadership"
    ],
    "answer": "Transformational leadership",
    "rationale": "Transformational leadership motivates through vision, inspiration, stimulation, and individualized support.",
    "distractors": [
      "'Transactional leadership' is weaker because it does not directly address the I/O principle in the stem.",
      "'Laissez-faire leadership' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Autocratic leadership' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 17,
    "topic": "Leadership",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Poor leader-member relations",
    "stem": "Some employees receive more trust, information, and support from the leader than others.",
    "options": [
      "Leader-member exchange concern",
      "Scientific management concern",
      "Recruitment validity concern",
      "Norming concern"
    ],
    "answer": "Leader-member exchange concern",
    "rationale": "LMX theory focuses on differential relationship quality between leader and member.",
    "distractors": [
      "'Scientific management concern' is weaker because it does not directly address the I/O principle in the stem.",
      "'Recruitment validity concern' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Norming concern' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 18,
    "topic": "Leadership",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Situational leadership",
    "stem": "A new employee lacks competence but is willing to learn.",
    "options": [
      "Use high direction with support and coaching",
      "Delegate fully immediately",
      "Use no feedback",
      "Apply punishment only"
    ],
    "answer": "Use high direction with support and coaching",
    "rationale": "Development level should guide the balance of direction and support.",
    "distractors": [
      "'Delegate fully immediately' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use no feedback' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Apply punishment only' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 19,
    "topic": "Organizational Culture",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Culture diagnosis",
    "stem": "Employees describe the workplace as competitive, risk-avoidant, and hierarchical.",
    "options": [
      "Assess organizational culture and climate before recommending change",
      "Start individual therapy for all workers",
      "Use a typing speed test",
      "Change the logo only"
    ],
    "answer": "Assess organizational culture and climate before recommending change",
    "rationale": "Culture and climate shape shared norms, expectations, and behavior.",
    "distractors": [
      "'Start individual therapy for all workers' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use a typing speed test' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Change the logo only' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 20,
    "topic": "Organizational Culture",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Climate versus culture",
    "stem": "A survey measures employees' current perceptions of safety practices and supervisor support.",
    "options": [
      "Organizational climate",
      "Organizational culture",
      "Job analysis",
      "Selection ratio"
    ],
    "answer": "Organizational climate",
    "rationale": "Climate refers to shared perceptions of current policies, practices, and procedures.",
    "distractors": [
      "'Organizational culture' is weaker because it does not directly address the I/O principle in the stem.",
      "'Job analysis' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Selection ratio' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 21,
    "topic": "Work Stress",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Burnout risk",
    "stem": "Employees report exhaustion, cynicism, and reduced professional efficacy after months of overload.",
    "options": [
      "Assess burnout and workload demands",
      "Give only a team-building game",
      "Ignore workload and require positivity",
      "Use stricter attendance penalties"
    ],
    "answer": "Assess burnout and workload demands",
    "rationale": "Burnout is linked to chronic work stress and requires examining demands and resources.",
    "distractors": [
      "'Give only a team-building game' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ignore workload and require positivity' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use stricter attendance penalties' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 22,
    "topic": "Work Stress",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Job demands-resources",
    "stem": "High workload is paired with low autonomy and poor supervisor support.",
    "options": [
      "Increase resources and reduce excessive demands",
      "Only recruit more extroverts",
      "Use a harder appraisal form",
      "Stop all feedback"
    ],
    "answer": "Increase resources and reduce excessive demands",
    "rationale": "JD-R model explains strain through demands and resources.",
    "distractors": [
      "'Only recruit more extroverts' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use a harder appraisal form' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Stop all feedback' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 23,
    "topic": "Organizational Development",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Resistance to change",
    "stem": "Employees resist a new system because they were not consulted and do not understand the reason for change.",
    "options": [
      "Use communication, participation, and support strategies",
      "Force compliance without explanation",
      "Remove all senior employees",
      "Ignore employee concerns"
    ],
    "answer": "Use communication, participation, and support strategies",
    "rationale": "Change management requires addressing information, participation, and readiness.",
    "distractors": [
      "'Force compliance without explanation' is weaker because it does not directly address the I/O principle in the stem.",
      "'Remove all senior employees' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore employee concerns' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 24,
    "topic": "Organizational Development",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Action research",
    "stem": "An I/O consultant collects data, gives feedback, plans action, and evaluates change.",
    "options": [
      "Action research",
      "Classical conditioning",
      "Random assignment only",
      "Trait assessment"
    ],
    "answer": "Action research",
    "rationale": "Action research uses data collection, feedback, action planning, and evaluation.",
    "distractors": [
      "'Classical conditioning' is weaker because it does not directly address the I/O principle in the stem.",
      "'Random assignment only' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Trait assessment' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 25,
    "topic": "Teams",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Social loafing",
    "stem": "Some members reduce effort in a group project because individual contributions are not visible.",
    "options": [
      "Social loafing",
      "Groupthink",
      "Halo effect",
      "Role overload"
    ],
    "answer": "Social loafing",
    "rationale": "Social loafing occurs when individual effort decreases in group contexts.",
    "distractors": [
      "'Groupthink' is weaker because it does not directly address the I/O principle in the stem.",
      "'Halo effect' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Role overload' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 26,
    "topic": "Teams",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Team conflict",
    "stem": "A team has task disagreement that becomes personal hostility.",
    "options": [
      "Separate task conflict from relationship conflict and clarify roles/processes",
      "Ignore conflict until resignation",
      "Use only personality testing",
      "Punish all disagreement"
    ],
    "answer": "Separate task conflict from relationship conflict and clarify roles/processes",
    "rationale": "Task conflict can be productive; relationship conflict is usually harmful.",
    "distractors": [
      "'Ignore conflict until resignation' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use only personality testing' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Punish all disagreement' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 27,
    "topic": "Ethics",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Test confidentiality",
    "stem": "A manager asks for raw psychological test results of applicants.",
    "options": [
      "Protect confidentiality and release only appropriate job-relevant summaries",
      "Give all raw scores to the manager",
      "Post scores publicly",
      "Let coworkers interpret the results"
    ],
    "answer": "Protect confidentiality and release only appropriate job-relevant summaries",
    "rationale": "Assessment data require confidentiality and qualified interpretation.",
    "distractors": [
      "'Give all raw scores to the manager' is weaker because it does not directly address the I/O principle in the stem.",
      "'Post scores publicly' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Let coworkers interpret the results' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 28,
    "topic": "Ethics",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Using tests beyond purpose",
    "stem": "A wellness survey is later used to decide promotions without informing employees.",
    "options": [
      "This is unethical use beyond the stated purpose",
      "It is acceptable if management owns the data",
      "It is acceptable if scores are numerical",
      "It is required for all surveys"
    ],
    "answer": "This is unethical use beyond the stated purpose",
    "rationale": "Test and survey data must be used according to informed purpose and ethical boundaries.",
    "distractors": [
      "'It is acceptable if management owns the data' is weaker because it does not directly address the I/O principle in the stem.",
      "'It is acceptable if scores are numerical' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'It is required for all surveys' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 29,
    "topic": "Job Analysis",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Role confusion in a new HR unit 2",
    "stem": "Employees perform overlapping tasks and supervisors disagree about what the HR assistant role should include. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Conduct a job analysis before changing selection or appraisal tools",
      "Increase salary immediately",
      "Use a personality inventory for all workers",
      "Remove tasks from the role without evidence"
    ],
    "answer": "Conduct a job analysis before changing selection or appraisal tools",
    "rationale": "Job analysis is the foundation for defining duties, KSAOs, selection criteria, training needs, and appraisal standards.",
    "distractors": [
      "'Increase salary immediately' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use a personality inventory for all workers' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Remove tasks from the role without evidence' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 30,
    "topic": "Job Analysis",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Choosing the best job analysis method 2",
    "stem": "An I/O consultant needs detailed task information from current employees and supervisors for a clerical role. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Use interviews, questionnaires, and observation to document tasks and KSAOs",
      "Use only a projective test",
      "Use customer satisfaction ratings only",
      "Use informal comments from one manager"
    ],
    "answer": "Use interviews, questionnaires, and observation to document tasks and KSAOs",
    "rationale": "Multiple job analysis methods improve accuracy and reduce single-source bias.",
    "distractors": [
      "'Use only a projective test' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use customer satisfaction ratings only' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use informal comments from one manager' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 31,
    "topic": "Recruitment",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Low applicant pool 2",
    "stem": "A company has few qualified applicants despite many job postings. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Review recruitment sources, employer branding, and job advertisement clarity",
      "Lower standards without analysis",
      "Hire the first available applicant",
      "Use only employee referrals indefinitely"
    ],
    "answer": "Review recruitment sources, employer branding, and job advertisement clarity",
    "rationale": "Recruitment problems require examining applicant attraction, communication, and source effectiveness.",
    "distractors": [
      "'Lower standards without analysis' is weaker because it does not directly address the I/O principle in the stem.",
      "'Hire the first available applicant' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only employee referrals indefinitely' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 32,
    "topic": "Recruitment",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Realistic job preview 2",
    "stem": "New hires resign after learning the job includes rotating shifts and emotional labor. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Use a realistic job preview during recruitment",
      "Hide difficult job demands",
      "Add a personality test after hiring",
      "Use only monetary incentives"
    ],
    "answer": "Use a realistic job preview during recruitment",
    "rationale": "Realistic job previews reduce mismatch by clarifying job demands before acceptance.",
    "distractors": [
      "'Hide difficult job demands' is weaker because it does not directly address the I/O principle in the stem.",
      "'Add a personality test after hiring' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only monetary incentives' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 33,
    "topic": "Selection",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Structured interviews 2",
    "stem": "An employer wants to reduce bias in interviews. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Use standardized job-related questions and scoring rubrics",
      "Use casual conversation only",
      "Ask different questions to each applicant",
      "Select based on interviewer intuition"
    ],
    "answer": "Use standardized job-related questions and scoring rubrics",
    "rationale": "Structured interviews improve consistency, job relevance, and defensibility.",
    "distractors": [
      "'Use casual conversation only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ask different questions to each applicant' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Select based on interviewer intuition' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 34,
    "topic": "Selection",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "High-stakes hiring 2",
    "stem": "A supervisor wants to hire based only on a personality score. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Use personality results only as one part of a multi-method selection system",
      "Hire only the highest personality score",
      "Reject applicants with average scores",
      "Ignore job analysis"
    ],
    "answer": "Use personality results only as one part of a multi-method selection system",
    "rationale": "Single-test decisions are weak; selection should be job-related and based on multiple valid sources.",
    "distractors": [
      "'Hire only the highest personality score' is weaker because it does not directly address the I/O principle in the stem.",
      "'Reject applicants with average scores' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore job analysis' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 35,
    "topic": "Selection",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Adverse impact concern 2",
    "stem": "A cognitive ability test predicts performance but appears to screen out a protected group at a higher rate. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Evaluate adverse impact and consider valid complementary predictors",
      "Discard all tests automatically",
      "Ignore group differences if the test is useful",
      "Use unstructured interviews instead"
    ],
    "answer": "Evaluate adverse impact and consider valid complementary predictors",
    "rationale": "Selection systems must balance validity, fairness, and legal defensibility.",
    "distractors": [
      "'Discard all tests automatically' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ignore group differences if the test is useful' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use unstructured interviews instead' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 36,
    "topic": "Training",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Skill gap 2",
    "stem": "Employees know the policy but cannot use the new software accurately. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Provide skills training with practice and feedback",
      "Deliver a motivational speech only",
      "Change the entire appraisal system",
      "Reduce job standards"
    ],
    "answer": "Provide skills training with practice and feedback",
    "rationale": "A demonstrated inability to perform a skill is a training need.",
    "distractors": [
      "'Deliver a motivational speech only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Change the entire appraisal system' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Reduce job standards' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 37,
    "topic": "Training",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Training needs analysis 2",
    "stem": "Performance problems may be due to unclear procedures, outdated tools, or lack of skill. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Conduct organizational, task, and person analysis",
      "Immediately buy an online course",
      "Punish low performers",
      "Replace the team leader without evidence"
    ],
    "answer": "Conduct organizational, task, and person analysis",
    "rationale": "Training needs analysis determines whether training is the correct intervention.",
    "distractors": [
      "'Immediately buy an online course' is weaker because it does not directly address the I/O principle in the stem.",
      "'Punish low performers' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Replace the team leader without evidence' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 38,
    "topic": "Performance Appraisal",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Leniency error 2",
    "stem": "A supervisor gives nearly all employees excellent ratings to avoid conflict. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Leniency error",
      "Halo effect",
      "Contrast effect",
      "Recency effect"
    ],
    "answer": "Leniency error",
    "rationale": "Leniency occurs when ratings are consistently too favorable.",
    "distractors": [
      "'Halo effect' is weaker because it does not directly address the I/O principle in the stem.",
      "'Contrast effect' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Recency effect' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 39,
    "topic": "Performance Appraisal",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Unclear appraisal criteria 2",
    "stem": "Employees say their ratings depend on whether the supervisor likes them. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Use behaviorally anchored and job-related appraisal criteria",
      "Keep ratings private and vague",
      "Use popularity votes",
      "Rate only attendance"
    ],
    "answer": "Use behaviorally anchored and job-related appraisal criteria",
    "rationale": "Clear criteria reduce subjectivity and improve appraisal fairness.",
    "distractors": [
      "'Keep ratings private and vague' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use popularity votes' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Rate only attendance' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 40,
    "topic": "Performance Appraisal",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Criterion contamination 2",
    "stem": "Sales employees are rated partly on store location traffic that they cannot control. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Remove uncontrollable factors from appraisal criteria",
      "Keep the criterion because it is easy to measure",
      "Rate only personality",
      "Use only peer gossip"
    ],
    "answer": "Remove uncontrollable factors from appraisal criteria",
    "rationale": "Criterion contamination occurs when performance measures include irrelevant or uncontrollable factors.",
    "distractors": [
      "'Keep the criterion because it is easy to measure' is weaker because it does not directly address the I/O principle in the stem.",
      "'Rate only personality' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only peer gossip' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 41,
    "topic": "Motivation",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Equity theory 2",
    "stem": "An employee reduces effort after learning a coworker with similar output receives higher pay. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Equity theory",
      "Goal-setting theory",
      "Trait theory",
      "Classical conditioning"
    ],
    "answer": "Equity theory",
    "rationale": "Equity theory focuses on perceived fairness of input-output ratios.",
    "distractors": [
      "'Goal-setting theory' is weaker because it does not directly address the I/O principle in the stem.",
      "'Trait theory' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Classical conditioning' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 42,
    "topic": "Motivation",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Expectancy problem 2",
    "stem": "Employees believe effort will not improve performance because equipment frequently fails. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Address expectancy by fixing resources and removing barriers",
      "Offer praise only",
      "Set harder goals immediately",
      "Ignore tools and punish workers"
    ],
    "answer": "Address expectancy by fixing resources and removing barriers",
    "rationale": "Expectancy suffers when effort is not perceived to lead to performance.",
    "distractors": [
      "'Offer praise only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Set harder goals immediately' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore tools and punish workers' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 43,
    "topic": "Motivation",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Goal-setting theory 2",
    "stem": "A manager wants to improve productivity using goals. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Use specific, difficult, accepted goals with feedback",
      "Use vague goals like 'do your best'",
      "Use goals unrelated to job tasks",
      "Set goals without feedback"
    ],
    "answer": "Use specific, difficult, accepted goals with feedback",
    "rationale": "Goal-setting theory emphasizes specificity, difficulty, acceptance, and feedback.",
    "distractors": [
      "'Use vague goals like 'do your best'' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use goals unrelated to job tasks' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Set goals without feedback' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 44,
    "topic": "Leadership",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Transformational leadership 2",
    "stem": "A leader inspires employees through vision, intellectual stimulation, and individualized consideration. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Transformational leadership",
      "Transactional leadership",
      "Laissez-faire leadership",
      "Autocratic leadership"
    ],
    "answer": "Transformational leadership",
    "rationale": "Transformational leadership motivates through vision, inspiration, stimulation, and individualized support.",
    "distractors": [
      "'Transactional leadership' is weaker because it does not directly address the I/O principle in the stem.",
      "'Laissez-faire leadership' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Autocratic leadership' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 45,
    "topic": "Leadership",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Poor leader-member relations 2",
    "stem": "Some employees receive more trust, information, and support from the leader than others. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Leader-member exchange concern",
      "Scientific management concern",
      "Recruitment validity concern",
      "Norming concern"
    ],
    "answer": "Leader-member exchange concern",
    "rationale": "LMX theory focuses on differential relationship quality between leader and member.",
    "distractors": [
      "'Scientific management concern' is weaker because it does not directly address the I/O principle in the stem.",
      "'Recruitment validity concern' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Norming concern' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 46,
    "topic": "Leadership",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Situational leadership 2",
    "stem": "A new employee lacks competence but is willing to learn. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Use high direction with support and coaching",
      "Delegate fully immediately",
      "Use no feedback",
      "Apply punishment only"
    ],
    "answer": "Use high direction with support and coaching",
    "rationale": "Development level should guide the balance of direction and support.",
    "distractors": [
      "'Delegate fully immediately' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use no feedback' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Apply punishment only' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 47,
    "topic": "Organizational Culture",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Culture diagnosis 2",
    "stem": "Employees describe the workplace as competitive, risk-avoidant, and hierarchical. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Assess organizational culture and climate before recommending change",
      "Start individual therapy for all workers",
      "Use a typing speed test",
      "Change the logo only"
    ],
    "answer": "Assess organizational culture and climate before recommending change",
    "rationale": "Culture and climate shape shared norms, expectations, and behavior.",
    "distractors": [
      "'Start individual therapy for all workers' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use a typing speed test' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Change the logo only' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 48,
    "topic": "Organizational Culture",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Climate versus culture 2",
    "stem": "A survey measures employees' current perceptions of safety practices and supervisor support. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Organizational climate",
      "Organizational culture",
      "Job analysis",
      "Selection ratio"
    ],
    "answer": "Organizational climate",
    "rationale": "Climate refers to shared perceptions of current policies, practices, and procedures.",
    "distractors": [
      "'Organizational culture' is weaker because it does not directly address the I/O principle in the stem.",
      "'Job analysis' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Selection ratio' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 49,
    "topic": "Work Stress",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Burnout risk 2",
    "stem": "Employees report exhaustion, cynicism, and reduced professional efficacy after months of overload. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Assess burnout and workload demands",
      "Give only a team-building game",
      "Ignore workload and require positivity",
      "Use stricter attendance penalties"
    ],
    "answer": "Assess burnout and workload demands",
    "rationale": "Burnout is linked to chronic work stress and requires examining demands and resources.",
    "distractors": [
      "'Give only a team-building game' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ignore workload and require positivity' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use stricter attendance penalties' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 50,
    "topic": "Work Stress",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Job demands-resources 2",
    "stem": "High workload is paired with low autonomy and poor supervisor support. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Increase resources and reduce excessive demands",
      "Only recruit more extroverts",
      "Use a harder appraisal form",
      "Stop all feedback"
    ],
    "answer": "Increase resources and reduce excessive demands",
    "rationale": "JD-R model explains strain through demands and resources.",
    "distractors": [
      "'Only recruit more extroverts' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use a harder appraisal form' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Stop all feedback' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 51,
    "topic": "Organizational Development",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Resistance to change 2",
    "stem": "Employees resist a new system because they were not consulted and do not understand the reason for change. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Use communication, participation, and support strategies",
      "Force compliance without explanation",
      "Remove all senior employees",
      "Ignore employee concerns"
    ],
    "answer": "Use communication, participation, and support strategies",
    "rationale": "Change management requires addressing information, participation, and readiness.",
    "distractors": [
      "'Force compliance without explanation' is weaker because it does not directly address the I/O principle in the stem.",
      "'Remove all senior employees' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore employee concerns' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 52,
    "topic": "Organizational Development",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Action research 2",
    "stem": "An I/O consultant collects data, gives feedback, plans action, and evaluates change. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Action research",
      "Classical conditioning",
      "Random assignment only",
      "Trait assessment"
    ],
    "answer": "Action research",
    "rationale": "Action research uses data collection, feedback, action planning, and evaluation.",
    "distractors": [
      "'Classical conditioning' is weaker because it does not directly address the I/O principle in the stem.",
      "'Random assignment only' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Trait assessment' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 53,
    "topic": "Teams",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Social loafing 2",
    "stem": "Some members reduce effort in a group project because individual contributions are not visible. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Social loafing",
      "Groupthink",
      "Halo effect",
      "Role overload"
    ],
    "answer": "Social loafing",
    "rationale": "Social loafing occurs when individual effort decreases in group contexts.",
    "distractors": [
      "'Groupthink' is weaker because it does not directly address the I/O principle in the stem.",
      "'Halo effect' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Role overload' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 54,
    "topic": "Teams",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Team conflict 2",
    "stem": "A team has task disagreement that becomes personal hostility. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Separate task conflict from relationship conflict and clarify roles/processes",
      "Ignore conflict until resignation",
      "Use only personality testing",
      "Punish all disagreement"
    ],
    "answer": "Separate task conflict from relationship conflict and clarify roles/processes",
    "rationale": "Task conflict can be productive; relationship conflict is usually harmful.",
    "distractors": [
      "'Ignore conflict until resignation' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use only personality testing' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Punish all disagreement' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 55,
    "topic": "Ethics",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Test confidentiality 2",
    "stem": "A manager asks for raw psychological test results of applicants. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "Protect confidentiality and release only appropriate job-relevant summaries",
      "Give all raw scores to the manager",
      "Post scores publicly",
      "Let coworkers interpret the results"
    ],
    "answer": "Protect confidentiality and release only appropriate job-relevant summaries",
    "rationale": "Assessment data require confidentiality and qualified interpretation.",
    "distractors": [
      "'Give all raw scores to the manager' is weaker because it does not directly address the I/O principle in the stem.",
      "'Post scores publicly' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Let coworkers interpret the results' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 56,
    "topic": "Ethics",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Using tests beyond purpose 2",
    "stem": "A wellness survey is later used to decide promotions without informing employees. The consultant must decide the most defensible first action for case variation 2.",
    "options": [
      "This is unethical use beyond the stated purpose",
      "It is acceptable if management owns the data",
      "It is acceptable if scores are numerical",
      "It is required for all surveys"
    ],
    "answer": "This is unethical use beyond the stated purpose",
    "rationale": "Test and survey data must be used according to informed purpose and ethical boundaries.",
    "distractors": [
      "'It is acceptable if management owns the data' is weaker because it does not directly address the I/O principle in the stem.",
      "'It is acceptable if scores are numerical' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'It is required for all surveys' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 57,
    "topic": "Job Analysis",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Role confusion in a new HR unit 3",
    "stem": "Employees perform overlapping tasks and supervisors disagree about what the HR assistant role should include. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Conduct a job analysis before changing selection or appraisal tools",
      "Increase salary immediately",
      "Use a personality inventory for all workers",
      "Remove tasks from the role without evidence"
    ],
    "answer": "Conduct a job analysis before changing selection or appraisal tools",
    "rationale": "Job analysis is the foundation for defining duties, KSAOs, selection criteria, training needs, and appraisal standards.",
    "distractors": [
      "'Increase salary immediately' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use a personality inventory for all workers' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Remove tasks from the role without evidence' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 58,
    "topic": "Job Analysis",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Choosing the best job analysis method 3",
    "stem": "An I/O consultant needs detailed task information from current employees and supervisors for a clerical role. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Use interviews, questionnaires, and observation to document tasks and KSAOs",
      "Use only a projective test",
      "Use customer satisfaction ratings only",
      "Use informal comments from one manager"
    ],
    "answer": "Use interviews, questionnaires, and observation to document tasks and KSAOs",
    "rationale": "Multiple job analysis methods improve accuracy and reduce single-source bias.",
    "distractors": [
      "'Use only a projective test' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use customer satisfaction ratings only' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use informal comments from one manager' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 59,
    "topic": "Recruitment",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Low applicant pool 3",
    "stem": "A company has few qualified applicants despite many job postings. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Review recruitment sources, employer branding, and job advertisement clarity",
      "Lower standards without analysis",
      "Hire the first available applicant",
      "Use only employee referrals indefinitely"
    ],
    "answer": "Review recruitment sources, employer branding, and job advertisement clarity",
    "rationale": "Recruitment problems require examining applicant attraction, communication, and source effectiveness.",
    "distractors": [
      "'Lower standards without analysis' is weaker because it does not directly address the I/O principle in the stem.",
      "'Hire the first available applicant' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only employee referrals indefinitely' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 60,
    "topic": "Recruitment",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Realistic job preview 3",
    "stem": "New hires resign after learning the job includes rotating shifts and emotional labor. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Use a realistic job preview during recruitment",
      "Hide difficult job demands",
      "Add a personality test after hiring",
      "Use only monetary incentives"
    ],
    "answer": "Use a realistic job preview during recruitment",
    "rationale": "Realistic job previews reduce mismatch by clarifying job demands before acceptance.",
    "distractors": [
      "'Hide difficult job demands' is weaker because it does not directly address the I/O principle in the stem.",
      "'Add a personality test after hiring' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only monetary incentives' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 61,
    "topic": "Selection",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Structured interviews 3",
    "stem": "An employer wants to reduce bias in interviews. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Use standardized job-related questions and scoring rubrics",
      "Use casual conversation only",
      "Ask different questions to each applicant",
      "Select based on interviewer intuition"
    ],
    "answer": "Use standardized job-related questions and scoring rubrics",
    "rationale": "Structured interviews improve consistency, job relevance, and defensibility.",
    "distractors": [
      "'Use casual conversation only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ask different questions to each applicant' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Select based on interviewer intuition' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 62,
    "topic": "Selection",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "High-stakes hiring 3",
    "stem": "A supervisor wants to hire based only on a personality score. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Use personality results only as one part of a multi-method selection system",
      "Hire only the highest personality score",
      "Reject applicants with average scores",
      "Ignore job analysis"
    ],
    "answer": "Use personality results only as one part of a multi-method selection system",
    "rationale": "Single-test decisions are weak; selection should be job-related and based on multiple valid sources.",
    "distractors": [
      "'Hire only the highest personality score' is weaker because it does not directly address the I/O principle in the stem.",
      "'Reject applicants with average scores' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore job analysis' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 63,
    "topic": "Selection",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Adverse impact concern 3",
    "stem": "A cognitive ability test predicts performance but appears to screen out a protected group at a higher rate. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Evaluate adverse impact and consider valid complementary predictors",
      "Discard all tests automatically",
      "Ignore group differences if the test is useful",
      "Use unstructured interviews instead"
    ],
    "answer": "Evaluate adverse impact and consider valid complementary predictors",
    "rationale": "Selection systems must balance validity, fairness, and legal defensibility.",
    "distractors": [
      "'Discard all tests automatically' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ignore group differences if the test is useful' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use unstructured interviews instead' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 64,
    "topic": "Training",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Skill gap 3",
    "stem": "Employees know the policy but cannot use the new software accurately. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Provide skills training with practice and feedback",
      "Deliver a motivational speech only",
      "Change the entire appraisal system",
      "Reduce job standards"
    ],
    "answer": "Provide skills training with practice and feedback",
    "rationale": "A demonstrated inability to perform a skill is a training need.",
    "distractors": [
      "'Deliver a motivational speech only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Change the entire appraisal system' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Reduce job standards' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 65,
    "topic": "Training",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Training needs analysis 3",
    "stem": "Performance problems may be due to unclear procedures, outdated tools, or lack of skill. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Conduct organizational, task, and person analysis",
      "Immediately buy an online course",
      "Punish low performers",
      "Replace the team leader without evidence"
    ],
    "answer": "Conduct organizational, task, and person analysis",
    "rationale": "Training needs analysis determines whether training is the correct intervention.",
    "distractors": [
      "'Immediately buy an online course' is weaker because it does not directly address the I/O principle in the stem.",
      "'Punish low performers' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Replace the team leader without evidence' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 66,
    "topic": "Performance Appraisal",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Leniency error 3",
    "stem": "A supervisor gives nearly all employees excellent ratings to avoid conflict. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Leniency error",
      "Halo effect",
      "Contrast effect",
      "Recency effect"
    ],
    "answer": "Leniency error",
    "rationale": "Leniency occurs when ratings are consistently too favorable.",
    "distractors": [
      "'Halo effect' is weaker because it does not directly address the I/O principle in the stem.",
      "'Contrast effect' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Recency effect' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 67,
    "topic": "Performance Appraisal",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Unclear appraisal criteria 3",
    "stem": "Employees say their ratings depend on whether the supervisor likes them. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Use behaviorally anchored and job-related appraisal criteria",
      "Keep ratings private and vague",
      "Use popularity votes",
      "Rate only attendance"
    ],
    "answer": "Use behaviorally anchored and job-related appraisal criteria",
    "rationale": "Clear criteria reduce subjectivity and improve appraisal fairness.",
    "distractors": [
      "'Keep ratings private and vague' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use popularity votes' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Rate only attendance' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 68,
    "topic": "Performance Appraisal",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Criterion contamination 3",
    "stem": "Sales employees are rated partly on store location traffic that they cannot control. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Remove uncontrollable factors from appraisal criteria",
      "Keep the criterion because it is easy to measure",
      "Rate only personality",
      "Use only peer gossip"
    ],
    "answer": "Remove uncontrollable factors from appraisal criteria",
    "rationale": "Criterion contamination occurs when performance measures include irrelevant or uncontrollable factors.",
    "distractors": [
      "'Keep the criterion because it is easy to measure' is weaker because it does not directly address the I/O principle in the stem.",
      "'Rate only personality' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only peer gossip' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 69,
    "topic": "Motivation",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Equity theory 3",
    "stem": "An employee reduces effort after learning a coworker with similar output receives higher pay. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Equity theory",
      "Goal-setting theory",
      "Trait theory",
      "Classical conditioning"
    ],
    "answer": "Equity theory",
    "rationale": "Equity theory focuses on perceived fairness of input-output ratios.",
    "distractors": [
      "'Goal-setting theory' is weaker because it does not directly address the I/O principle in the stem.",
      "'Trait theory' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Classical conditioning' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 70,
    "topic": "Motivation",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Expectancy problem 3",
    "stem": "Employees believe effort will not improve performance because equipment frequently fails. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Address expectancy by fixing resources and removing barriers",
      "Offer praise only",
      "Set harder goals immediately",
      "Ignore tools and punish workers"
    ],
    "answer": "Address expectancy by fixing resources and removing barriers",
    "rationale": "Expectancy suffers when effort is not perceived to lead to performance.",
    "distractors": [
      "'Offer praise only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Set harder goals immediately' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore tools and punish workers' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 71,
    "topic": "Motivation",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Goal-setting theory 3",
    "stem": "A manager wants to improve productivity using goals. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Use specific, difficult, accepted goals with feedback",
      "Use vague goals like 'do your best'",
      "Use goals unrelated to job tasks",
      "Set goals without feedback"
    ],
    "answer": "Use specific, difficult, accepted goals with feedback",
    "rationale": "Goal-setting theory emphasizes specificity, difficulty, acceptance, and feedback.",
    "distractors": [
      "'Use vague goals like 'do your best'' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use goals unrelated to job tasks' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Set goals without feedback' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 72,
    "topic": "Leadership",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Transformational leadership 3",
    "stem": "A leader inspires employees through vision, intellectual stimulation, and individualized consideration. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Transformational leadership",
      "Transactional leadership",
      "Laissez-faire leadership",
      "Autocratic leadership"
    ],
    "answer": "Transformational leadership",
    "rationale": "Transformational leadership motivates through vision, inspiration, stimulation, and individualized support.",
    "distractors": [
      "'Transactional leadership' is weaker because it does not directly address the I/O principle in the stem.",
      "'Laissez-faire leadership' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Autocratic leadership' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 73,
    "topic": "Leadership",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Poor leader-member relations 3",
    "stem": "Some employees receive more trust, information, and support from the leader than others. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Leader-member exchange concern",
      "Scientific management concern",
      "Recruitment validity concern",
      "Norming concern"
    ],
    "answer": "Leader-member exchange concern",
    "rationale": "LMX theory focuses on differential relationship quality between leader and member.",
    "distractors": [
      "'Scientific management concern' is weaker because it does not directly address the I/O principle in the stem.",
      "'Recruitment validity concern' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Norming concern' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 74,
    "topic": "Leadership",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Situational leadership 3",
    "stem": "A new employee lacks competence but is willing to learn. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Use high direction with support and coaching",
      "Delegate fully immediately",
      "Use no feedback",
      "Apply punishment only"
    ],
    "answer": "Use high direction with support and coaching",
    "rationale": "Development level should guide the balance of direction and support.",
    "distractors": [
      "'Delegate fully immediately' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use no feedback' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Apply punishment only' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 75,
    "topic": "Organizational Culture",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Culture diagnosis 3",
    "stem": "Employees describe the workplace as competitive, risk-avoidant, and hierarchical. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Assess organizational culture and climate before recommending change",
      "Start individual therapy for all workers",
      "Use a typing speed test",
      "Change the logo only"
    ],
    "answer": "Assess organizational culture and climate before recommending change",
    "rationale": "Culture and climate shape shared norms, expectations, and behavior.",
    "distractors": [
      "'Start individual therapy for all workers' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use a typing speed test' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Change the logo only' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 76,
    "topic": "Organizational Culture",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Climate versus culture 3",
    "stem": "A survey measures employees' current perceptions of safety practices and supervisor support. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Organizational climate",
      "Organizational culture",
      "Job analysis",
      "Selection ratio"
    ],
    "answer": "Organizational climate",
    "rationale": "Climate refers to shared perceptions of current policies, practices, and procedures.",
    "distractors": [
      "'Organizational culture' is weaker because it does not directly address the I/O principle in the stem.",
      "'Job analysis' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Selection ratio' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 77,
    "topic": "Work Stress",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Burnout risk 3",
    "stem": "Employees report exhaustion, cynicism, and reduced professional efficacy after months of overload. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Assess burnout and workload demands",
      "Give only a team-building game",
      "Ignore workload and require positivity",
      "Use stricter attendance penalties"
    ],
    "answer": "Assess burnout and workload demands",
    "rationale": "Burnout is linked to chronic work stress and requires examining demands and resources.",
    "distractors": [
      "'Give only a team-building game' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ignore workload and require positivity' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use stricter attendance penalties' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 78,
    "topic": "Work Stress",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Job demands-resources 3",
    "stem": "High workload is paired with low autonomy and poor supervisor support. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Increase resources and reduce excessive demands",
      "Only recruit more extroverts",
      "Use a harder appraisal form",
      "Stop all feedback"
    ],
    "answer": "Increase resources and reduce excessive demands",
    "rationale": "JD-R model explains strain through demands and resources.",
    "distractors": [
      "'Only recruit more extroverts' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use a harder appraisal form' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Stop all feedback' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 79,
    "topic": "Organizational Development",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Resistance to change 3",
    "stem": "Employees resist a new system because they were not consulted and do not understand the reason for change. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Use communication, participation, and support strategies",
      "Force compliance without explanation",
      "Remove all senior employees",
      "Ignore employee concerns"
    ],
    "answer": "Use communication, participation, and support strategies",
    "rationale": "Change management requires addressing information, participation, and readiness.",
    "distractors": [
      "'Force compliance without explanation' is weaker because it does not directly address the I/O principle in the stem.",
      "'Remove all senior employees' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore employee concerns' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 80,
    "topic": "Organizational Development",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Action research 3",
    "stem": "An I/O consultant collects data, gives feedback, plans action, and evaluates change. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Action research",
      "Classical conditioning",
      "Random assignment only",
      "Trait assessment"
    ],
    "answer": "Action research",
    "rationale": "Action research uses data collection, feedback, action planning, and evaluation.",
    "distractors": [
      "'Classical conditioning' is weaker because it does not directly address the I/O principle in the stem.",
      "'Random assignment only' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Trait assessment' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 81,
    "topic": "Teams",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Social loafing 3",
    "stem": "Some members reduce effort in a group project because individual contributions are not visible. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Social loafing",
      "Groupthink",
      "Halo effect",
      "Role overload"
    ],
    "answer": "Social loafing",
    "rationale": "Social loafing occurs when individual effort decreases in group contexts.",
    "distractors": [
      "'Groupthink' is weaker because it does not directly address the I/O principle in the stem.",
      "'Halo effect' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Role overload' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 82,
    "topic": "Teams",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Team conflict 3",
    "stem": "A team has task disagreement that becomes personal hostility. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Separate task conflict from relationship conflict and clarify roles/processes",
      "Ignore conflict until resignation",
      "Use only personality testing",
      "Punish all disagreement"
    ],
    "answer": "Separate task conflict from relationship conflict and clarify roles/processes",
    "rationale": "Task conflict can be productive; relationship conflict is usually harmful.",
    "distractors": [
      "'Ignore conflict until resignation' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use only personality testing' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Punish all disagreement' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 83,
    "topic": "Ethics",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Test confidentiality 3",
    "stem": "A manager asks for raw psychological test results of applicants. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "Protect confidentiality and release only appropriate job-relevant summaries",
      "Give all raw scores to the manager",
      "Post scores publicly",
      "Let coworkers interpret the results"
    ],
    "answer": "Protect confidentiality and release only appropriate job-relevant summaries",
    "rationale": "Assessment data require confidentiality and qualified interpretation.",
    "distractors": [
      "'Give all raw scores to the manager' is weaker because it does not directly address the I/O principle in the stem.",
      "'Post scores publicly' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Let coworkers interpret the results' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 84,
    "topic": "Ethics",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Using tests beyond purpose 3",
    "stem": "A wellness survey is later used to decide promotions without informing employees. The consultant must decide the most defensible first action for case variation 3.",
    "options": [
      "This is unethical use beyond the stated purpose",
      "It is acceptable if management owns the data",
      "It is acceptable if scores are numerical",
      "It is required for all surveys"
    ],
    "answer": "This is unethical use beyond the stated purpose",
    "rationale": "Test and survey data must be used according to informed purpose and ethical boundaries.",
    "distractors": [
      "'It is acceptable if management owns the data' is weaker because it does not directly address the I/O principle in the stem.",
      "'It is acceptable if scores are numerical' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'It is required for all surveys' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 85,
    "topic": "Job Analysis",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Role confusion in a new HR unit 4",
    "stem": "Employees perform overlapping tasks and supervisors disagree about what the HR assistant role should include. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Conduct a job analysis before changing selection or appraisal tools",
      "Increase salary immediately",
      "Use a personality inventory for all workers",
      "Remove tasks from the role without evidence"
    ],
    "answer": "Conduct a job analysis before changing selection or appraisal tools",
    "rationale": "Job analysis is the foundation for defining duties, KSAOs, selection criteria, training needs, and appraisal standards.",
    "distractors": [
      "'Increase salary immediately' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use a personality inventory for all workers' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Remove tasks from the role without evidence' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 86,
    "topic": "Job Analysis",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Choosing the best job analysis method 4",
    "stem": "An I/O consultant needs detailed task information from current employees and supervisors for a clerical role. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Use interviews, questionnaires, and observation to document tasks and KSAOs",
      "Use only a projective test",
      "Use customer satisfaction ratings only",
      "Use informal comments from one manager"
    ],
    "answer": "Use interviews, questionnaires, and observation to document tasks and KSAOs",
    "rationale": "Multiple job analysis methods improve accuracy and reduce single-source bias.",
    "distractors": [
      "'Use only a projective test' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use customer satisfaction ratings only' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use informal comments from one manager' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 87,
    "topic": "Recruitment",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Low applicant pool 4",
    "stem": "A company has few qualified applicants despite many job postings. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Review recruitment sources, employer branding, and job advertisement clarity",
      "Lower standards without analysis",
      "Hire the first available applicant",
      "Use only employee referrals indefinitely"
    ],
    "answer": "Review recruitment sources, employer branding, and job advertisement clarity",
    "rationale": "Recruitment problems require examining applicant attraction, communication, and source effectiveness.",
    "distractors": [
      "'Lower standards without analysis' is weaker because it does not directly address the I/O principle in the stem.",
      "'Hire the first available applicant' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only employee referrals indefinitely' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 88,
    "topic": "Recruitment",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Realistic job preview 4",
    "stem": "New hires resign after learning the job includes rotating shifts and emotional labor. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Use a realistic job preview during recruitment",
      "Hide difficult job demands",
      "Add a personality test after hiring",
      "Use only monetary incentives"
    ],
    "answer": "Use a realistic job preview during recruitment",
    "rationale": "Realistic job previews reduce mismatch by clarifying job demands before acceptance.",
    "distractors": [
      "'Hide difficult job demands' is weaker because it does not directly address the I/O principle in the stem.",
      "'Add a personality test after hiring' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only monetary incentives' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 89,
    "topic": "Selection",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Structured interviews 4",
    "stem": "An employer wants to reduce bias in interviews. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Use standardized job-related questions and scoring rubrics",
      "Use casual conversation only",
      "Ask different questions to each applicant",
      "Select based on interviewer intuition"
    ],
    "answer": "Use standardized job-related questions and scoring rubrics",
    "rationale": "Structured interviews improve consistency, job relevance, and defensibility.",
    "distractors": [
      "'Use casual conversation only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ask different questions to each applicant' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Select based on interviewer intuition' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 90,
    "topic": "Selection",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "High-stakes hiring 4",
    "stem": "A supervisor wants to hire based only on a personality score. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Use personality results only as one part of a multi-method selection system",
      "Hire only the highest personality score",
      "Reject applicants with average scores",
      "Ignore job analysis"
    ],
    "answer": "Use personality results only as one part of a multi-method selection system",
    "rationale": "Single-test decisions are weak; selection should be job-related and based on multiple valid sources.",
    "distractors": [
      "'Hire only the highest personality score' is weaker because it does not directly address the I/O principle in the stem.",
      "'Reject applicants with average scores' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore job analysis' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 91,
    "topic": "Selection",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Adverse impact concern 4",
    "stem": "A cognitive ability test predicts performance but appears to screen out a protected group at a higher rate. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Evaluate adverse impact and consider valid complementary predictors",
      "Discard all tests automatically",
      "Ignore group differences if the test is useful",
      "Use unstructured interviews instead"
    ],
    "answer": "Evaluate adverse impact and consider valid complementary predictors",
    "rationale": "Selection systems must balance validity, fairness, and legal defensibility.",
    "distractors": [
      "'Discard all tests automatically' is weaker because it does not directly address the I/O principle in the stem.",
      "'Ignore group differences if the test is useful' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use unstructured interviews instead' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 92,
    "topic": "Training",
    "difficulty": "Easy",
    "mode": "Applied",
    "title": "Skill gap 4",
    "stem": "Employees know the policy but cannot use the new software accurately. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Provide skills training with practice and feedback",
      "Deliver a motivational speech only",
      "Change the entire appraisal system",
      "Reduce job standards"
    ],
    "answer": "Provide skills training with practice and feedback",
    "rationale": "A demonstrated inability to perform a skill is a training need.",
    "distractors": [
      "'Deliver a motivational speech only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Change the entire appraisal system' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Reduce job standards' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 93,
    "topic": "Training",
    "difficulty": "Moderate",
    "mode": "Board",
    "title": "Training needs analysis 4",
    "stem": "Performance problems may be due to unclear procedures, outdated tools, or lack of skill. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Conduct organizational, task, and person analysis",
      "Immediately buy an online course",
      "Punish low performers",
      "Replace the team leader without evidence"
    ],
    "answer": "Conduct organizational, task, and person analysis",
    "rationale": "Training needs analysis determines whether training is the correct intervention.",
    "distractors": [
      "'Immediately buy an online course' is weaker because it does not directly address the I/O principle in the stem.",
      "'Punish low performers' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Replace the team leader without evidence' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 94,
    "topic": "Performance Appraisal",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Leniency error 4",
    "stem": "A supervisor gives nearly all employees excellent ratings to avoid conflict. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Leniency error",
      "Halo effect",
      "Contrast effect",
      "Recency effect"
    ],
    "answer": "Leniency error",
    "rationale": "Leniency occurs when ratings are consistently too favorable.",
    "distractors": [
      "'Halo effect' is weaker because it does not directly address the I/O principle in the stem.",
      "'Contrast effect' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Recency effect' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 95,
    "topic": "Performance Appraisal",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Unclear appraisal criteria 4",
    "stem": "Employees say their ratings depend on whether the supervisor likes them. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Use behaviorally anchored and job-related appraisal criteria",
      "Keep ratings private and vague",
      "Use popularity votes",
      "Rate only attendance"
    ],
    "answer": "Use behaviorally anchored and job-related appraisal criteria",
    "rationale": "Clear criteria reduce subjectivity and improve appraisal fairness.",
    "distractors": [
      "'Keep ratings private and vague' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use popularity votes' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Rate only attendance' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 96,
    "topic": "Performance Appraisal",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Criterion contamination 4",
    "stem": "Sales employees are rated partly on store location traffic that they cannot control. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Remove uncontrollable factors from appraisal criteria",
      "Keep the criterion because it is easy to measure",
      "Rate only personality",
      "Use only peer gossip"
    ],
    "answer": "Remove uncontrollable factors from appraisal criteria",
    "rationale": "Criterion contamination occurs when performance measures include irrelevant or uncontrollable factors.",
    "distractors": [
      "'Keep the criterion because it is easy to measure' is weaker because it does not directly address the I/O principle in the stem.",
      "'Rate only personality' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Use only peer gossip' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 97,
    "topic": "Motivation",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Equity theory 4",
    "stem": "An employee reduces effort after learning a coworker with similar output receives higher pay. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Equity theory",
      "Goal-setting theory",
      "Trait theory",
      "Classical conditioning"
    ],
    "answer": "Equity theory",
    "rationale": "Equity theory focuses on perceived fairness of input-output ratios.",
    "distractors": [
      "'Goal-setting theory' is weaker because it does not directly address the I/O principle in the stem.",
      "'Trait theory' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Classical conditioning' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 98,
    "topic": "Motivation",
    "difficulty": "Moderate",
    "mode": "Applied",
    "title": "Expectancy problem 4",
    "stem": "Employees believe effort will not improve performance because equipment frequently fails. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Address expectancy by fixing resources and removing barriers",
      "Offer praise only",
      "Set harder goals immediately",
      "Ignore tools and punish workers"
    ],
    "answer": "Address expectancy by fixing resources and removing barriers",
    "rationale": "Expectancy suffers when effort is not perceived to lead to performance.",
    "distractors": [
      "'Offer praise only' is weaker because it does not directly address the I/O principle in the stem.",
      "'Set harder goals immediately' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Ignore tools and punish workers' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 99,
    "topic": "Motivation",
    "difficulty": "Difficult",
    "mode": "Board",
    "title": "Goal-setting theory 4",
    "stem": "A manager wants to improve productivity using goals. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Use specific, difficult, accepted goals with feedback",
      "Use vague goals like 'do your best'",
      "Use goals unrelated to job tasks",
      "Set goals without feedback"
    ],
    "answer": "Use specific, difficult, accepted goals with feedback",
    "rationale": "Goal-setting theory emphasizes specificity, difficulty, acceptance, and feedback.",
    "distractors": [
      "'Use vague goals like 'do your best'' is weaker because it does not directly address the I/O principle in the stem.",
      "'Use goals unrelated to job tasks' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Set goals without feedback' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  },
  {
    "id": 100,
    "topic": "Leadership",
    "difficulty": "Easy",
    "mode": "Board",
    "title": "Transformational leadership 4",
    "stem": "A leader inspires employees through vision, intellectual stimulation, and individualized consideration. The consultant must decide the most defensible first action for case variation 4.",
    "options": [
      "Transformational leadership",
      "Transactional leadership",
      "Laissez-faire leadership",
      "Autocratic leadership"
    ],
    "answer": "Transformational leadership",
    "rationale": "Transformational leadership motivates through vision, inspiration, stimulation, and individualized support.",
    "distractors": [
      "'Transactional leadership' is weaker because it does not directly address the I/O principle in the stem.",
      "'Laissez-faire leadership' is weaker because it relies on an unsupported or incomplete decision rule.",
      "'Autocratic leadership' is weaker because it ignores job relevance, evidence, or fairness."
    ]
  }
]
];

const WPDL_JOBS = {
  "HR assistant": {
    duties:["Maintain HR records","Coordinate recruitment schedules","Assist onboarding","Prepare basic HR reports"],
    ksaos:["Attention to detail","Confidentiality","Communication skills","Basic labor and HR process knowledge"],
    methods:["Structured interview","Work sample on documentation","Situational judgment test","Reference check"]
  },
  "Guidance associate": {
    duties:["Assist student intake","Maintain case records","Coordinate referrals","Support psychoeducation activities"],
    ksaos:["Helping skills","Ethical sensitivity","Record management","Empathic communication"],
    methods:["Structured interview","Role-play exercise","Writing sample","Reference check"]
  },
  "Call center representative": {
    duties:["Handle customer concerns","Document calls","Follow scripts","Manage emotional interactions"],
    ksaos:["Verbal communication","Emotional regulation","Typing accuracy","Problem solving"],
    methods:["Work simulation","Structured interview","Typing test","Situational judgment test"]
  },
  "Sales associate": {
    duties:["Assist customers","Maintain product displays","Process transactions","Meet sales targets"],
    ksaos:["Persuasion","Product learning","Service orientation","Integrity"],
    methods:["Role-play","Structured interview","Biodata review","Work sample"]
  },
  "Teacher": {
    duties:["Plan lessons","Deliver instruction","Assess learning","Manage classroom behavior"],
    ksaos:["Instructional skill","Classroom management","Assessment literacy","Patience"],
    methods:["Teaching demonstration","Structured interview","Portfolio review","Reference check"]
  },
  "Team leader": {
    duties:["Monitor team performance","Coach members","Coordinate workflow","Resolve conflicts"],
    ksaos:["Leadership","Feedback skills","Planning","Conflict management"],
    methods:["Assessment center exercise","Structured interview","Situational judgment test","Performance record review"]
  }
};

const WPDL_SELECTION_METHODS = [
  {name:"Structured interview", validity:"High", risk:"Low", note:"Strong when based on job analysis and standardized scoring."},
  {name:"Work sample test", validity:"High", risk:"Low", note:"Directly samples job behavior and is highly job-relevant."},
  {name:"Cognitive ability test", validity:"High", risk:"Moderate", note:"Useful predictor but must be monitored for adverse impact."},
  {name:"Personality inventory", validity:"Moderate", risk:"Moderate", note:"Use only job-relevant traits and never as the sole basis."},
  {name:"Situational judgment test", validity:"Moderate", risk:"Low", note:"Useful for applied judgment and role-specific scenarios."},
  {name:"Unstructured interview", validity:"Low", risk:"High", note:"Prone to bias and weak standardization."},
  {name:"Graphology", validity:"Very low", risk:"High", note:"Not defensible as a selection method."},
  {name:"Reference check", validity:"Low to moderate", risk:"Moderate", note:"Useful as supporting data, not as sole predictor."}
];

const WPDL_TRAINING_PROBLEMS = [
  "Employees do not know the new policy.",
  "Employees understand the policy but cannot operate the system.",
  "Employees can do the task but do not see why effort matters.",
  "Employees cannot meet targets because tools are unavailable.",
  "Employees receive no feedback until annual appraisal.",
  "Employees experience overload due to unclear role boundaries."
];

const WPDL_APPRAISAL = [
  {stem:"A supervisor rates everyone as average to avoid making distinctions.", answer:"Central tendency", options:["Central tendency","Leniency","Halo effect","Contrast effect"], rationale:"Central tendency occurs when raters avoid high or low ratings."},
  {stem:"A supervisor gives high ratings to all employees to avoid complaints.", answer:"Leniency", options:["Leniency","Strictness","Horn effect","Recency effect"], rationale:"Leniency is the tendency to rate too favorably."},
  {stem:"A supervisor gives low ratings to almost everyone regardless of actual performance.", answer:"Strictness", options:["Strictness","Halo effect","Similarity bias","Criterion deficiency"], rationale:"Strictness is the tendency to rate too harshly."},
  {stem:"One excellent presentation causes the supervisor to rate the employee high in all areas.", answer:"Halo effect", options:["Halo effect","Horn effect","Contrast effect","Recency effect"], rationale:"Halo effect is when one positive trait influences all ratings."},
  {stem:"One mistake causes the supervisor to rate the employee poorly across all dimensions.", answer:"Horn effect", options:["Horn effect","Leniency","Central tendency","Social loafing"], rationale:"Horn effect is when one negative feature affects all ratings."},
  {stem:"The supervisor rates an average employee poorly after evaluating an outstanding employee.", answer:"Contrast effect", options:["Contrast effect","Halo effect","Leniency","Frame-of-reference error"], rationale:"Contrast effect occurs when ratings are influenced by comparison with others."},
  {stem:"The latest incident dominates the entire annual performance rating.", answer:"Recency effect", options:["Recency effect","Primacy effect","Strictness","Criterion contamination"], rationale:"Recency effect overweights recent events."},
  {stem:"The supervisor gives better ratings to employees who share the same hobbies and background.", answer:"Similar-to-me bias", options:["Similar-to-me bias","Central tendency","Criterion deficiency","Job enrichment"], rationale:"Similar-to-me bias favors people perceived as similar to the rater."}
];

const WPDL_MOTIVATION = [
  {stem:"An employee believes effort will not lead to performance because the system frequently crashes.", answer:"Expectancy theory", options:["Expectancy theory","Equity theory","Two-factor theory","Need for achievement"], rationale:"Expectancy concerns belief that effort can lead to performance."},
  {stem:"An employee feels unfairly paid compared with a coworker who contributes less.", answer:"Equity theory", options:["Equity theory","Goal-setting theory","Maslow's theory","ERG theory"], rationale:"Equity theory focuses on fairness of inputs and outcomes."},
  {stem:"Employees improve after receiving specific, difficult goals and weekly feedback.", answer:"Goal-setting theory", options:["Goal-setting theory","Trait theory","Scientific management","Two-factor theory"], rationale:"Goal-setting theory emphasizes specific challenging goals with feedback."},
  {stem:"A worker is motivated by autonomy, mastery, and meaningful work.", answer:"Self-determination theory", options:["Self-determination theory","Equity theory","Reinforcement theory","Path-goal theory"], rationale:"Self-determination theory emphasizes autonomy, competence, and relatedness."},
  {stem:"Employees dislike poor supervision and salary policy, but improving them only prevents dissatisfaction.", answer:"Herzberg's two-factor theory", options:["Herzberg's two-factor theory","Expectancy theory","Goal-setting theory","LMX theory"], rationale:"Hygiene factors prevent dissatisfaction; motivators drive satisfaction."},
  {stem:"A manager redesigns work to increase skill variety, task identity, task significance, autonomy, and feedback.", answer:"Job characteristics model", options:["Job characteristics model","Equity theory","Trait activation","Groupthink"], rationale:"These are the core job dimensions in the job characteristics model."}
];
