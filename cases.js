const CASES = [
  {
    id: "academic-anxiety",
    title: "Academic Anxiety",
    visibleProfile: "Mika, 20, college student. Presenting concern: anxiety before exams and class presentations.",
    hidden: {
      symptoms: ["palpitations", "trembling", "stomach discomfort", "overthinking", "avoidance of recitation", "poor sleep before academic tasks"],
      onset: "Symptoms began in senior high school and became more noticeable in college.",
      triggers: ["oral recitation", "graded presentations", "fear of being judged", "major exams"],
      functioning: "Academic performance remains adequate, but avoidance and sleep disruption are increasing.",
      risk: "No current suicidal ideation, self-harm, or intent to harm others.",
      supports: "Has supportive friends but avoids discussing emotional problems. Family sees her as high-achieving."
    },
    opening: "Hi. I’m Mika. I’ve been feeling really anxious lately, especially when I have exams or presentations. I’m not sure where to start."
  },
  {
    id: "depressive-symptoms",
    title: "Depressive Symptoms After Academic Failure",
    visibleProfile: "Carlo, 22, graduating student. Presenting concern: loss of motivation and emotional exhaustion.",
    hidden: {
      symptoms: ["low mood", "loss of interest", "fatigue", "poor concentration", "sleep disruption", "feelings of worthlessness"],
      onset: "Symptoms worsened after failing an important academic requirement.",
      triggers: ["academic failure", "family expectations", "comparison with peers"],
      functioning: "Misses deadlines, avoids classmates, and struggles to complete school tasks.",
      risk: "Passive thoughts of not wanting to wake up, but no active plan or intent. Needs careful risk assessment.",
      supports: "One close cousin is supportive. He has not told his parents about the severity of symptoms."
    },
    opening: "I feel tired most of the time. I used to care about graduating, but now I don’t feel motivated to do anything."
  },
  {
    id: "adjustment-college",
    title: "Adjustment Difficulty in College",
    visibleProfile: "Rhea, 18, first-year student. Presenting concern: difficulty adjusting to college life away from home.",
    hidden: {
      symptoms: ["homesickness", "crying spells", "social withdrawal", "difficulty sleeping", "worry", "low appetite"],
      onset: "Started during the first month of living in a dormitory.",
      triggers: ["being away from family", "new academic demands", "difficulty making friends"],
      functioning: "Attends classes but spends most free time alone. Grades are beginning to decline.",
      risk: "No suicidal ideation or self-harm, but feels overwhelmed and lonely.",
      supports: "Calls mother often but hides distress from peers."
    },
    opening: "College has been harder than I expected. I miss home a lot, and I don’t really feel like I belong here."
  },
  {
    id: "sleep-overthinking",
    title: "Sleep Problems and Overthinking",
    visibleProfile: "Nico, 21, psychology student. Presenting concern: difficulty sleeping due to persistent overthinking.",
    hidden: {
      symptoms: ["delayed sleep onset", "racing thoughts", "mental fatigue", "irritability", "daytime sleepiness", "reassurance-seeking"],
      onset: "Sleep problems have occurred for six months and worsened during exam season.",
      triggers: ["unfinished tasks", "fear of making mistakes", "uncertainty", "strict self-imposed rules"],
      functioning: "Still performs well but feels exhausted and tense most days.",
      risk: "No suicidal ideation, but significant distress and impairment in rest.",
      supports: "Has friends but feels embarrassed discussing sleep anxiety."
    },
    opening: "I can’t sleep properly. My mind keeps running even when I’m already tired."
  },
  {
    id: "internship-stress",
    title: "Internship Stress and Self-Doubt",
    visibleProfile: "Jan, 23, graduating psychology intern. Presenting concern: stress and self-doubt during internship.",
    hidden: {
      symptoms: ["anxiety", "self-doubt", "difficulty concentrating", "muscle tension", "fear of evaluation", "rumination after tasks"],
      onset: "Started after receiving critical feedback from a supervisor.",
      triggers: ["supervisor evaluation", "case presentations", "comparison with co-interns"],
      functioning: "Completes tasks but overprepares and avoids asking for help.",
      risk: "No current self-harm or suicidal ideation.",
      supports: "Close with one co-intern but reluctant to approach supervisors."
    },
    opening: "I’m scared I’m not good enough for internship. I keep thinking I’ll make a mistake."
  }
];
