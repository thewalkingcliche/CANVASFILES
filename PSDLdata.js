const SCENARIOS = [
  {
    title: "Mindfulness and Test Anxiety",
    prompt: "A school psychologist wants to know whether students who completed a four-week mindfulness activity report lower test anxiety than students who did not receive the activity.",
    keywords: ["mindfulness", "test anxiety", "intervention", "control", "independent", "t-test", "mann"],
    iv: "Mindfulness condition: intervention vs no intervention",
    dv: "Test anxiety score",
    design: "Two independent groups",
    test: "Independent samples t-test if assumptions are met; Mann–Whitney U if seriously violated",
    h0: "There is no difference in test anxiety scores between groups.",
    h1: "There is a difference in test anxiety scores between groups."
  },
  {
    title: "Sleep Quality Before and After CBT-I",
    prompt: "A counseling center measures the sleep quality of 18 clients before and after a brief CBT-I session.",
    keywords: ["sleep", "pretest", "posttest", "before", "after", "paired", "wilcoxon"],
    iv: "Time: pretest vs posttest",
    dv: "Sleep quality score",
    design: "Repeated-measures / within-subjects",
    test: "Paired samples t-test if assumptions are met; Wilcoxon signed-rank test if violated",
    h0: "There is no difference in sleep quality scores from pretest to posttest.",
    h1: "There is a difference in sleep quality scores from pretest to posttest."
  },
  {
    title: "Parenting Style and Attachment Category",
    prompt: "A developmental psychology researcher examines whether parenting style is associated with attachment classification among adolescents.",
    keywords: ["parenting", "attachment", "category", "categorical", "chi-square", "fisher"],
    iv: "Parenting style category",
    dv: "Attachment classification",
    design: "Association between categorical variables",
    test: "Chi-square test of independence; Fisher's exact test if expected counts are too small",
    h0: "Parenting style and attachment classification are independent.",
    h1: "Parenting style and attachment classification are associated."
  },
  {
    title: "Stress and Academic Performance",
    prompt: "A psychology instructor examines whether perceived stress scores are related to students' final examination scores.",
    keywords: ["stress", "academic", "performance", "relationship", "correlation", "pearson", "spearman"],
    iv: "Perceived stress score",
    dv: "Final examination score",
    design: "Association between two scale variables",
    test: "Pearson r if assumptions are met; Spearman rho if ordinal or non-normal",
    h0: "There is no significant relationship between stress and examination scores.",
    h1: "There is a significant relationship between stress and examination scores."
  },
  {
    title: "Three Counseling Approaches",
    prompt: "A clinic compares depression scores among clients assigned to CBT, solution-focused brief therapy, or supportive counseling.",
    keywords: ["three", "counseling", "depression", "anova", "kruskal", "groups"],
    iv: "Counseling approach: CBT, SFBT, supportive counseling",
    dv: "Depression score",
    design: "Three independent groups",
    test: "One-way ANOVA if assumptions are met; Kruskal–Wallis test if violated",
    h0: "There is no difference in depression scores across counseling approaches.",
    h1: "At least one counseling approach differs in depression scores."
  },
  {
    title: "Psychometric Scale Reliability",
    prompt: "A test developer wants to examine whether 12 items of a new anxiety scale consistently measure the same construct.",
    keywords: ["items", "scale", "reliability", "alpha", "omega", "psychometric"],
    iv: "Scale items",
    dv: "Internal consistency estimate",
    design: "Psychometric reliability analysis",
    test: "Cronbach's alpha or McDonald's omega",
    h0: "The items do not show acceptable internal consistency.",
    h1: "The items show acceptable internal consistency."
  }
];

const QUIZ = [
  { q: "A researcher compares anxiety scores of students before and after a relaxation exercise. Which test is most appropriate if assumptions are met?", options: ["Independent samples t-test", "Paired samples t-test", "Chi-square test", "Pearson correlation"], answer: 1, rationale: "The same students were measured twice, so the scores are related. A paired samples t-test is appropriate." },
  { q: "A psychologist examines whether social media use category is associated with sleep quality category. Which test is most appropriate?", options: ["Pearson correlation", "One-way ANOVA", "Chi-square test of independence", "Paired samples t-test"], answer: 2, rationale: "Both variables are categorical, so a chi-square test of independence is appropriate." },
  { q: "A teacher compares mean motivation scores across three instructional methods. Which test is most appropriate if assumptions are met?", options: ["One-way ANOVA", "Mann–Whitney U", "Paired samples t-test", "Fisher's exact test"], answer: 0, rationale: "There are three independent groups and one continuous outcome, so one-way ANOVA is appropriate." },
  { q: "A researcher wants to know whether self-esteem scores are related to loneliness scores. Which test is most appropriate if both variables are scale-level and approximately normal?", options: ["Pearson r", "Wilcoxon signed-rank test", "Chi-square test", "Independent samples t-test"], answer: 0, rationale: "The question asks about the relationship between two continuous variables, so Pearson correlation is appropriate." },
  { q: "A clinical study has two independent groups, but the outcome is ordinal and strongly non-normal. Which test is most appropriate?", options: ["Independent samples t-test", "Mann–Whitney U test", "Paired samples t-test", "Repeated-measures ANOVA"], answer: 1, rationale: "For two independent groups with ordinal or clearly non-normal outcomes, Mann–Whitney U is the safer nonparametric option." },
  { q: "A researcher compares proportions of high and low burnout across two work arrangements. Several expected cell counts are below 5. Which test is safer?", options: ["Fisher's exact test", "Pearson r", "Paired t-test", "One-sample t-test"], answer: 0, rationale: "Fisher's exact test is safer when categorical cells have small expected counts." },
  { q: "A psychologist wants to predict counseling outcome from working alliance and baseline symptom severity. Which analysis fits best?", options: ["Multiple regression", "Wilcoxon signed-rank test", "Chi-square goodness of fit", "Independent samples t-test"], answer: 0, rationale: "The goal is prediction from multiple predictors, so multiple regression fits the research question." }
];
