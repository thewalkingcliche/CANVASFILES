const ADPL_ITEMS = [
  {
    "id": 1,
    "domain": "Abnormal Psychology",
    "topic": "Anxiety Disorders",
    "difficulty": "Easy",
    "stem": "A client reports sudden episodes of intense fear with palpitations, trembling, and fear of dying. The episodes peak within minutes. Which diagnosis is most closely suggested?",
    "choices": [
      "Generalized anxiety disorder",
      "Panic disorder",
      "Illness anxiety disorder",
      "Specific phobia"
    ],
    "answer": "Panic disorder",
    "rationale": "Panic attacks peak rapidly and involve intense physiological arousal; recurrent unexpected attacks suggest panic disorder."
  },
  {
    "id": 2,
    "domain": "Abnormal Psychology",
    "topic": "Anxiety Disorders",
    "difficulty": "Easy",
    "stem": "Persistent excessive worry across several life areas for at least six months is most characteristic of:",
    "choices": [
      "Panic disorder",
      "Generalized anxiety disorder",
      "Agoraphobia",
      "Social anxiety disorder"
    ],
    "answer": "Generalized anxiety disorder",
    "rationale": "GAD centers on excessive, difficult-to-control worry across domains with associated symptoms."
  },
  {
    "id": 3,
    "domain": "Abnormal Psychology",
    "topic": "Anxiety Disorders",
    "difficulty": "Easy",
    "stem": "Fear of embarrassment during performance or interaction situations most directly points to:",
    "choices": [
      "Social anxiety disorder",
      "Separation anxiety disorder",
      "Specific phobia",
      "Acute stress disorder"
    ],
    "answer": "Social anxiety disorder",
    "rationale": "Social anxiety disorder involves fear of negative evaluation in social or performance contexts."
  },
  {
    "id": 4,
    "domain": "Abnormal Psychology",
    "topic": "Anxiety Disorders",
    "difficulty": "Easy",
    "stem": "A client avoids elevators only after becoming trapped in one. The most fitting diagnosis is:",
    "choices": [
      "Specific phobia",
      "Panic disorder",
      "OCD",
      "GAD"
    ],
    "answer": "Specific phobia",
    "rationale": "The fear is circumscribed to a specific object or situation and leads to avoidance."
  },
  {
    "id": 5,
    "domain": "Abnormal Psychology",
    "topic": "Obsessive-Compulsive Disorders",
    "difficulty": "Moderate",
    "stem": "Which feature best separates obsessions from ordinary worries?",
    "choices": [
      "They are always realistic",
      "They are intrusive, unwanted, and distressing",
      "They occur only during sleep",
      "They always involve hallucinations"
    ],
    "answer": "They are intrusive, unwanted, and distressing",
    "rationale": "Obsessions are recurrent intrusive thoughts, urges, or images experienced as unwanted."
  },
  {
    "id": 6,
    "domain": "Abnormal Psychology",
    "topic": "Obsessive-Compulsive Disorders",
    "difficulty": "Easy",
    "stem": "A person repeatedly checks the stove to reduce anxiety from intrusive thoughts of causing a fire. The checking behavior is a:",
    "choices": [
      "Delusion",
      "Compulsion",
      "Flashback",
      "Negative symptom"
    ],
    "answer": "Compulsion",
    "rationale": "Compulsions are repetitive behaviors or mental acts performed to reduce distress or prevent feared outcomes."
  },
  {
    "id": 7,
    "domain": "Abnormal Psychology",
    "topic": "Mood Disorders",
    "difficulty": "Easy",
    "stem": "A depressed client has low mood, anhedonia, sleep disturbance, fatigue, guilt, and impaired functioning for three weeks. The best diagnosis is:",
    "choices": [
      "Persistent depressive disorder",
      "Major depressive episode",
      "Cyclothymic disorder",
      "Adjustment disorder only"
    ],
    "answer": "Major depressive episode",
    "rationale": "A major depressive episode requires at least two weeks of depressive symptoms including low mood or anhedonia."
  },
  {
    "id": 8,
    "domain": "Abnormal Psychology",
    "topic": "Mood Disorders",
    "difficulty": "Moderate",
    "stem": "A history of manic episodes rules out a diagnosis of:",
    "choices": [
      "Bipolar I disorder",
      "Major depressive disorder",
      "Schizoaffective disorder",
      "Cyclothymic disorder"
    ],
    "answer": "Major depressive disorder",
    "rationale": "Mania indicates a bipolar-spectrum diagnosis rather than unipolar major depressive disorder."
  },
  {
    "id": 9,
    "domain": "Abnormal Psychology",
    "topic": "Mood Disorders",
    "difficulty": "Easy",
    "stem": "Elevated mood, decreased need for sleep, pressured speech, risky behavior, and impairment requiring hospitalization indicate:",
    "choices": [
      "Hypomanic episode",
      "Manic episode",
      "Panic attack",
      "Acute stress reaction"
    ],
    "answer": "Manic episode",
    "rationale": "Marked impairment, psychosis, or hospitalization supports mania rather than hypomania."
  },
  {
    "id": 10,
    "domain": "Abnormal Psychology",
    "topic": "Mood Disorders",
    "difficulty": "Moderate",
    "stem": "A two-year pattern of depressed mood more days than not with lower-grade symptoms is most consistent with:",
    "choices": [
      "Persistent depressive disorder",
      "Brief psychotic disorder",
      "Bipolar II disorder",
      "Acute stress disorder"
    ],
    "answer": "Persistent depressive disorder",
    "rationale": "Persistent depressive disorder involves chronic depressed mood over at least two years in adults."
  },
  {
    "id": 11,
    "domain": "Abnormal Psychology",
    "topic": "Psychotic Disorders",
    "difficulty": "Easy",
    "stem": "Hallucinations are best defined as:",
    "choices": [
      "Fixed false beliefs",
      "Sensory perceptions without external stimuli",
      "Disorganized speech only",
      "Loss of motivation"
    ],
    "answer": "Sensory perceptions without external stimuli",
    "rationale": "Hallucinations are perceptual experiences occurring without corresponding external input."
  },
  {
    "id": 12,
    "domain": "Abnormal Psychology",
    "topic": "Psychotic Disorders",
    "difficulty": "Easy",
    "stem": "Delusions are best described as:",
    "choices": [
      "False fixed beliefs not changed by evidence",
      "Rapid mood shifts",
      "Avoidant behaviors",
      "Loss of consciousness"
    ],
    "answer": "False fixed beliefs not changed by evidence",
    "rationale": "Delusions are fixed false beliefs held despite contradictory evidence."
  },
  {
    "id": 13,
    "domain": "Abnormal Psychology",
    "topic": "Psychotic Disorders",
    "difficulty": "Moderate",
    "stem": "Flat affect, avolition, and alogia are examples of:",
    "choices": [
      "Positive symptoms",
      "Negative symptoms",
      "Compulsions",
      "Dissociative symptoms"
    ],
    "answer": "Negative symptoms",
    "rationale": "Negative symptoms involve reduction or absence of normal emotional and behavioral functions."
  },
  {
    "id": 14,
    "domain": "Abnormal Psychology",
    "topic": "Psychotic Disorders",
    "difficulty": "Moderate",
    "stem": "Psychotic symptoms lasting more than one day but less than one month suggest:",
    "choices": [
      "Brief psychotic disorder",
      "Schizophrenia",
      "Delusional disorder",
      "Schizotypal personality disorder"
    ],
    "answer": "Brief psychotic disorder",
    "rationale": "Brief psychotic disorder is time-limited, lasting at least one day but less than one month."
  },
  {
    "id": 15,
    "domain": "Abnormal Psychology",
    "topic": "Psychotic Disorders",
    "difficulty": "Easy",
    "stem": "Schizophrenia requires disturbance lasting at least:",
    "choices": [
      "One week",
      "One month",
      "Six months",
      "Two years"
    ],
    "answer": "Six months",
    "rationale": "Schizophrenia requires continuous signs of disturbance for at least six months."
  },
  {
    "id": 16,
    "domain": "Abnormal Psychology",
    "topic": "Trauma and Stressor Disorders",
    "difficulty": "Easy",
    "stem": "Intrusive memories, avoidance, negative mood/cognition, and hyperarousal after trauma lasting more than one month suggest:",
    "choices": [
      "PTSD",
      "Acute stress disorder",
      "Panic disorder",
      "Somatic symptom disorder"
    ],
    "answer": "PTSD",
    "rationale": "PTSD requires trauma exposure and symptom clusters persisting beyond one month."
  },
  {
    "id": 17,
    "domain": "Abnormal Psychology",
    "topic": "Trauma and Stressor Disorders",
    "difficulty": "Moderate",
    "stem": "Trauma symptoms lasting from three days to one month after exposure are most consistent with:",
    "choices": [
      "Acute stress disorder",
      "PTSD",
      "Adjustment disorder",
      "GAD"
    ],
    "answer": "Acute stress disorder",
    "rationale": "Acute stress disorder occurs shortly after trauma and lasts up to one month."
  },
  {
    "id": 18,
    "domain": "Abnormal Psychology",
    "topic": "Trauma and Stressor Disorders",
    "difficulty": "Easy",
    "stem": "A disproportionate emotional response to a clear stressor within three months is most consistent with:",
    "choices": [
      "Adjustment disorder",
      "Panic disorder",
      "Schizophrenia",
      "Dysthymia"
    ],
    "answer": "Adjustment disorder",
    "rationale": "Adjustment disorder follows an identifiable stressor and causes distress or impairment."
  },
  {
    "id": 19,
    "domain": "Abnormal Psychology",
    "topic": "Somatic and Dissociative Disorders",
    "difficulty": "Moderate",
    "stem": "A client experiences memory gaps for autobiographical information after trauma. This is most aligned with:",
    "choices": [
      "Dissociative amnesia",
      "Somatic symptom disorder",
      "Conversion disorder",
      "Illness anxiety disorder"
    ],
    "answer": "Dissociative amnesia",
    "rationale": "Dissociative amnesia involves inability to recall important autobiographical information, often trauma-related."
  },
  {
    "id": 20,
    "domain": "Abnormal Psychology",
    "topic": "Somatic and Dissociative Disorders",
    "difficulty": "Moderate",
    "stem": "Neurological-like symptoms incompatible with medical findings are most characteristic of:",
    "choices": [
      "Conversion disorder",
      "Malingering",
      "OCD",
      "GAD"
    ],
    "answer": "Conversion disorder",
    "rationale": "Conversion disorder involves altered motor or sensory function inconsistent with recognized neurological disease."
  },
  {
    "id": 21,
    "domain": "Abnormal Psychology",
    "topic": "Somatic and Dissociative Disorders",
    "difficulty": "Easy",
    "stem": "Excessive preoccupation with having a serious illness despite minimal symptoms suggests:",
    "choices": [
      "Illness anxiety disorder",
      "Somatic symptom disorder",
      "Panic disorder",
      "Delusional disorder"
    ],
    "answer": "Illness anxiety disorder",
    "rationale": "Illness anxiety disorder involves high health anxiety with minimal or absent somatic symptoms."
  },
  {
    "id": 22,
    "domain": "Abnormal Psychology",
    "topic": "Personality Disorders",
    "difficulty": "Easy",
    "stem": "A pervasive pattern of instability in relationships, self-image, affect, and impulsivity suggests:",
    "choices": [
      "Borderline personality disorder",
      "Avoidant personality disorder",
      "Schizoid personality disorder",
      "Obsessive-compulsive personality disorder"
    ],
    "answer": "Borderline personality disorder",
    "rationale": "Borderline personality disorder is marked by instability, impulsivity, and abandonment sensitivity."
  },
  {
    "id": 23,
    "domain": "Abnormal Psychology",
    "topic": "Personality Disorders",
    "difficulty": "Easy",
    "stem": "Grandiosity, need for admiration, and lack of empathy are most characteristic of:",
    "choices": [
      "Narcissistic personality disorder",
      "Histrionic personality disorder",
      "Antisocial personality disorder",
      "Dependent personality disorder"
    ],
    "answer": "Narcissistic personality disorder",
    "rationale": "Narcissistic personality disorder involves grandiosity, admiration needs, and impaired empathy."
  },
  {
    "id": 24,
    "domain": "Abnormal Psychology",
    "topic": "Personality Disorders",
    "difficulty": "Moderate",
    "stem": "Disregard for rights of others with deceitfulness and irresponsibility after age 18 suggests:",
    "choices": [
      "Antisocial personality disorder",
      "Conduct disorder only",
      "Borderline personality disorder",
      "Paranoid personality disorder"
    ],
    "answer": "Antisocial personality disorder",
    "rationale": "Antisocial personality disorder requires adult pattern plus evidence of conduct disorder before age 15."
  },
  {
    "id": 25,
    "domain": "Abnormal Psychology",
    "topic": "Personality Disorders",
    "difficulty": "Moderate",
    "stem": "Social inhibition, feelings of inadequacy, and hypersensitivity to criticism suggest:",
    "choices": [
      "Avoidant personality disorder",
      "Schizoid personality disorder",
      "Dependent personality disorder",
      "Paranoid personality disorder"
    ],
    "answer": "Avoidant personality disorder",
    "rationale": "Avoidant personality disorder involves desire for connection but avoidance due to fear of rejection."
  },
  {
    "id": 26,
    "domain": "Abnormal Psychology",
    "topic": "Neurodevelopmental Disorders",
    "difficulty": "Easy",
    "stem": "Autism spectrum disorder primarily involves deficits in social communication plus:",
    "choices": [
      "Restricted and repetitive behaviors",
      "Manic symptoms",
      "Dissociative symptoms",
      "Obsessive fear of illness only"
    ],
    "answer": "Restricted and repetitive behaviors",
    "rationale": "ASD requires social communication deficits and restricted/repetitive patterns of behavior."
  },
  {
    "id": 27,
    "domain": "Abnormal Psychology",
    "topic": "Neurodevelopmental Disorders",
    "difficulty": "Easy",
    "stem": "ADHD requires symptoms of inattention and/or hyperactivity-impulsivity that:",
    "choices": [
      "Begin only in adulthood",
      "Occur in two or more settings",
      "Occur only during exams",
      "Are explained by psychosis"
    ],
    "answer": "Occur in two or more settings",
    "rationale": "ADHD symptoms must impair functioning and be present across settings."
  },
  {
    "id": 28,
    "domain": "Abnormal Psychology",
    "topic": "Neurodevelopmental Disorders",
    "difficulty": "Moderate",
    "stem": "Intellectual disability diagnosis requires deficits in intellectual functioning and:",
    "choices": [
      "Adaptive functioning",
      "Creativity",
      "Mood regulation only",
      "Attachment style"
    ],
    "answer": "Adaptive functioning",
    "rationale": "Intellectual disability requires limitations in both intellectual and adaptive functioning."
  },
  {
    "id": 29,
    "domain": "Abnormal Psychology",
    "topic": "Substance-Related Disorders",
    "difficulty": "Easy",
    "stem": "A pattern of substance use causing impairment, tolerance, and inability to cut down suggests:",
    "choices": [
      "Substance use disorder",
      "Substance intoxication only",
      "Withdrawal only",
      "Impulse-control disorder"
    ],
    "answer": "Substance use disorder",
    "rationale": "Substance use disorder involves problematic use with impairment and criteria such as tolerance or failed control."
  },
  {
    "id": 30,
    "domain": "Abnormal Psychology",
    "topic": "Substance-Related Disorders",
    "difficulty": "Easy",
    "stem": "Tolerance means:",
    "choices": [
      "Need for increased amounts to achieve effect",
      "Fear of using substances",
      "Immediate psychosis",
      "Complete abstinence"
    ],
    "answer": "Need for increased amounts to achieve effect",
    "rationale": "Tolerance refers to reduced effect or need for more substance to achieve the same effect."
  },
  {
    "id": 31,
    "domain": "Abnormal Psychology",
    "topic": "Substance-Related Disorders",
    "difficulty": "Easy",
    "stem": "Withdrawal refers to:",
    "choices": [
      "Symptoms after reducing or stopping substance use",
      "A moral weakness",
      "A personality disorder",
      "A type of hallucination"
    ],
    "answer": "Symptoms after reducing or stopping substance use",
    "rationale": "Withdrawal symptoms emerge when substance levels decline after prolonged use."
  },
  {
    "id": 32,
    "domain": "Abnormal Psychology",
    "topic": "Clinical Ethics and Risk",
    "difficulty": "Easy",
    "stem": "The first priority when a client reports suicidal ideation with plan and intent is:",
    "choices": [
      "Interpret personality dynamics",
      "Complete a career inventory",
      "Ensure safety and conduct risk management",
      "Assign homework only"
    ],
    "answer": "Ensure safety and conduct risk management",
    "rationale": "Active suicidal ideation with plan and intent requires immediate safety assessment and intervention."
  },
  {
    "id": 33,
    "domain": "Abnormal Psychology",
    "topic": "Clinical Ethics and Risk",
    "difficulty": "Easy",
    "stem": "Which question is most appropriate in suicide risk assessment?",
    "choices": [
      "You are not thinking of hurting yourself, right?",
      "Have you had thoughts of ending your life?",
      "Why are you being dramatic?",
      "Can we ignore that for now?"
    ],
    "answer": "Have you had thoughts of ending your life?",
    "rationale": "Direct, nonjudgmental questions about suicide are clinically appropriate and do not implant suicidal thoughts."
  },
  {
    "id": 34,
    "domain": "Abnormal Psychology",
    "topic": "Clinical Ethics and Risk",
    "difficulty": "Difficult",
    "stem": "A client threatens serious harm to an identifiable person. The clinician should prioritize:",
    "choices": [
      "Confidentiality without exception",
      "Duty to protect consistent with law and policy",
      "Ending the session without documentation",
      "Ignoring the statement"
    ],
    "answer": "Duty to protect consistent with law and policy",
    "rationale": "Threats of serious harm may require protective action according to legal and ethical standards."
  },
  {
    "id": 35,
    "domain": "Abnormal Psychology",
    "topic": "Obsessive-Compulsive Disorders",
    "difficulty": "Moderate",
    "stem": "A symptom is ego-dystonic when it is:",
    "choices": [
      "Experienced as inconsistent with the self",
      "Enjoyed and valued",
      "Always psychotic",
      "Always neurological"
    ],
    "answer": "Experienced as inconsistent with the self",
    "rationale": "Ego-dystonic symptoms are experienced as unwanted or inconsistent with self-concept."
  },
  {
    "id": 36,
    "domain": "Abnormal Psychology",
    "topic": "Obsessive-Compulsive Disorders",
    "difficulty": "Moderate",
    "stem": "Body dysmorphic disorder centers on:",
    "choices": [
      "Preoccupation with perceived flaws in appearance",
      "Fear of public speaking",
      "Memory gaps",
      "Grandiose delusions"
    ],
    "answer": "Preoccupation with perceived flaws in appearance",
    "rationale": "BDD involves distressing preoccupation with perceived defects in appearance."
  },
  {
    "id": 37,
    "domain": "Abnormal Psychology",
    "topic": "Obsessive-Compulsive Disorders",
    "difficulty": "Moderate",
    "stem": "Hoarding disorder involves difficulty discarding possessions due to:",
    "choices": [
      "Perceived need to save them",
      "Lack of empathy",
      "Fear of germs only",
      "Desire for social status"
    ],
    "answer": "Perceived need to save them",
    "rationale": "Hoarding disorder involves persistent difficulty discarding possessions regardless of actual value."
  },
  {
    "id": 38,
    "domain": "Abnormal Psychology",
    "topic": "Mood Disorders",
    "difficulty": "Moderate",
    "stem": "The core feature of anorexia nervosa is:",
    "choices": [
      "Restriction leading to significantly low body weight",
      "Binge eating only",
      "Purging without body image concern",
      "Psychotic loss of appetite"
    ],
    "answer": "Restriction leading to significantly low body weight",
    "rationale": "Anorexia nervosa includes restriction, low body weight, fear of weight gain, and body image disturbance."
  },
  {
    "id": 39,
    "domain": "Abnormal Psychology",
    "topic": "Mood Disorders",
    "difficulty": "Moderate",
    "stem": "Binge eating followed by compensatory behaviors such as vomiting suggests:",
    "choices": [
      "Bulimia nervosa",
      "Binge eating disorder",
      "Anorexia nervosa restricting type",
      "Pica"
    ],
    "answer": "Bulimia nervosa",
    "rationale": "Bulimia nervosa involves binge episodes with inappropriate compensatory behaviors."
  },
  {
    "id": 40,
    "domain": "Abnormal Psychology",
    "topic": "Clinical Ethics and Risk",
    "difficulty": "Difficult",
    "stem": "Delirium is distinguished from dementia by:",
    "choices": [
      "Acute onset and fluctuating attention",
      "Lifelong stability",
      "Only motor symptoms",
      "Absence of cognitive change"
    ],
    "answer": "Acute onset and fluctuating attention",
    "rationale": "Delirium has acute onset, fluctuating course, and attention disturbance."
  },
  {
    "id": 41,
    "domain": "Abnormal Psychology",
    "topic": "Clinical Ethics and Risk",
    "difficulty": "Moderate",
    "stem": "Dementia is now commonly referred to in DSM-5 terminology as:",
    "choices": [
      "Major neurocognitive disorder",
      "Brief psychotic disorder",
      "Dissociative identity disorder",
      "Intellectual disability"
    ],
    "answer": "Major neurocognitive disorder",
    "rationale": "Major neurocognitive disorder is the DSM-5 term for significant acquired cognitive decline."
  },
  {
    "id": 42,
    "domain": "Abnormal Psychology",
    "topic": "Anxiety Disorders",
    "difficulty": "Moderate",
    "stem": "A phobia of being in places where escape may be difficult is:",
    "choices": [
      "Agoraphobia",
      "Specific phobia",
      "Social anxiety disorder",
      "Separation anxiety disorder"
    ],
    "answer": "Agoraphobia",
    "rationale": "Agoraphobia involves fear of situations where escape may be difficult or help unavailable."
  },
  {
    "id": 43,
    "domain": "Abnormal Psychology",
    "topic": "Anxiety Disorders",
    "difficulty": "Difficult",
    "stem": "Selective mutism is most often classified under:",
    "choices": [
      "Anxiety disorders",
      "Mood disorders",
      "Psychotic disorders",
      "Substance disorders"
    ],
    "answer": "Anxiety disorders",
    "rationale": "Selective mutism involves consistent failure to speak in specific social situations despite speaking elsewhere."
  },
  {
    "id": 44,
    "domain": "Abnormal Psychology",
    "topic": "Mood Disorders",
    "difficulty": "Moderate",
    "stem": "Bipolar II disorder requires:",
    "choices": [
      "At least one hypomanic episode and one major depressive episode",
      "At least one manic episode",
      "Only chronic depressed mood",
      "Only cyclothymic symptoms"
    ],
    "answer": "At least one hypomanic episode and one major depressive episode",
    "rationale": "Bipolar II requires hypomania plus major depression, with no history of full mania."
  },
  {
    "id": 45,
    "domain": "Abnormal Psychology",
    "topic": "Mood Disorders",
    "difficulty": "Difficult",
    "stem": "Cyclothymic disorder involves:",
    "choices": [
      "Chronic fluctuating hypomanic and depressive symptoms below full episode threshold",
      "One manic episode",
      "Psychosis for six months",
      "Panic attacks only"
    ],
    "answer": "Chronic fluctuating hypomanic and depressive symptoms below full episode threshold",
    "rationale": "Cyclothymia involves persistent subthreshold mood fluctuations over time."
  },
  {
    "id": 46,
    "domain": "Abnormal Psychology",
    "topic": "Psychotic Disorders",
    "difficulty": "Difficult",
    "stem": "Schizoaffective disorder requires psychotic symptoms plus mood episodes and at least two weeks of:",
    "choices": [
      "Delusions or hallucinations without mood episode",
      "Only panic symptoms",
      "Only personality traits",
      "Only substance intoxication"
    ],
    "answer": "Delusions or hallucinations without mood episode",
    "rationale": "Schizoaffective disorder includes a period of psychosis without prominent mood symptoms."
  },
  {
    "id": 47,
    "domain": "Abnormal Psychology",
    "topic": "Psychotic Disorders",
    "difficulty": "Difficult",
    "stem": "A fixed nonbizarre delusion for at least one month with otherwise relatively preserved functioning suggests:",
    "choices": [
      "Delusional disorder",
      "Schizophrenia",
      "Brief psychotic disorder",
      "OCD"
    ],
    "answer": "Delusional disorder",
    "rationale": "Delusional disorder involves persistent delusions without the broader symptom pattern of schizophrenia."
  },
  {
    "id": 48,
    "domain": "Abnormal Psychology",
    "topic": "Trauma and Stressor Disorders",
    "difficulty": "Difficult",
    "stem": "Repeated exposure to trauma details through professional duties may qualify as trauma exposure for PTSD when it is:",
    "choices": [
      "Extreme or repeated",
      "Only through movies",
      "Only imagined",
      "Only in dreams"
    ],
    "answer": "Extreme or repeated",
    "rationale": "PTSD criteria include repeated or extreme exposure to aversive trauma details in occupational roles."
  },
  {
    "id": 49,
    "domain": "Abnormal Psychology",
    "topic": "Clinical Ethics and Risk",
    "difficulty": "Easy",
    "stem": "The most ethical statement about diagnosis is:",
    "choices": [
      "Diagnosis should be based on sufficient assessment data",
      "Diagnosis can be made from one symptom",
      "Diagnosis is never revised",
      "Diagnosis replaces case formulation"
    ],
    "answer": "Diagnosis should be based on sufficient assessment data",
    "rationale": "Diagnosis requires adequate assessment and should be revised when evidence changes."
  },
  {
    "id": 50,
    "domain": "Abnormal Psychology",
    "topic": "Clinical Ethics and Risk",
    "difficulty": "Moderate",
    "stem": "Which is the strongest protective factor in risk formulation?",
    "choices": [
      "Specific plan and access to means",
      "Social support and willingness to seek help",
      "Hopelessness",
      "Recent severe loss"
    ],
    "answer": "Social support and willingness to seek help",
    "rationale": "Protective factors reduce risk; support and help-seeking can buffer clinical risk."
  },
  {
    "id": 51,
    "domain": "Developmental Psychology",
    "topic": "Piaget",
    "difficulty": "Easy",
    "stem": "According to Piaget, object permanence typically emerges during the:",
    "choices": [
      "Sensorimotor stage",
      "Preoperational stage",
      "Concrete operational stage",
      "Formal operational stage"
    ],
    "answer": "Sensorimotor stage",
    "rationale": "Object permanence is a key achievement of the sensorimotor period."
  },
  {
    "id": 52,
    "domain": "Developmental Psychology",
    "topic": "Piaget",
    "difficulty": "Easy",
    "stem": "Egocentrism is most characteristic of Piaget\u2019s:",
    "choices": [
      "Preoperational stage",
      "Formal operational stage",
      "Sensorimotor stage",
      "Concrete operational stage"
    ],
    "answer": "Preoperational stage",
    "rationale": "Preoperational children often struggle to take another person\u2019s perspective."
  },
  {
    "id": 53,
    "domain": "Developmental Psychology",
    "topic": "Piaget",
    "difficulty": "Easy",
    "stem": "Understanding conservation is most associated with the:",
    "choices": [
      "Concrete operational stage",
      "Sensorimotor stage",
      "Preoperational stage",
      "Trust stage"
    ],
    "answer": "Concrete operational stage",
    "rationale": "Conservation develops during concrete operations with logical thinking about tangible objects."
  },
  {
    "id": 54,
    "domain": "Developmental Psychology",
    "topic": "Piaget",
    "difficulty": "Easy",
    "stem": "Abstract hypothetical reasoning is most associated with:",
    "choices": [
      "Formal operational stage",
      "Preoperational stage",
      "Sensorimotor stage",
      "Autonomy stage"
    ],
    "answer": "Formal operational stage",
    "rationale": "Formal operations involve abstract, hypothetical, and systematic reasoning."
  },
  {
    "id": 55,
    "domain": "Developmental Psychology",
    "topic": "Piaget",
    "difficulty": "Moderate",
    "stem": "Assimilation means:",
    "choices": [
      "Fitting new experience into existing schemas",
      "Changing schemas to fit new information",
      "Forgetting old learning",
      "Punishing behavior"
    ],
    "answer": "Fitting new experience into existing schemas",
    "rationale": "Assimilation interprets new information using existing cognitive structures."
  },
  {
    "id": 56,
    "domain": "Developmental Psychology",
    "topic": "Piaget",
    "difficulty": "Moderate",
    "stem": "Accommodation means:",
    "choices": [
      "Changing schemas based on new experience",
      "Repeating reflexes",
      "Ignoring contradictions",
      "Imitating adults only"
    ],
    "answer": "Changing schemas based on new experience",
    "rationale": "Accommodation modifies cognitive structures when existing schemas are insufficient."
  },
  {
    "id": 57,
    "domain": "Developmental Psychology",
    "topic": "Erikson",
    "difficulty": "Easy",
    "stem": "Erikson\u2019s first psychosocial crisis is:",
    "choices": [
      "Trust vs mistrust",
      "Autonomy vs shame",
      "Initiative vs guilt",
      "Industry vs inferiority"
    ],
    "answer": "Trust vs mistrust",
    "rationale": "Infancy centers on trust versus mistrust based on reliable caregiving."
  },
  {
    "id": 58,
    "domain": "Developmental Psychology",
    "topic": "Erikson",
    "difficulty": "Easy",
    "stem": "The major psychosocial task of adolescence in Erikson\u2019s theory is:",
    "choices": [
      "Identity vs role confusion",
      "Intimacy vs isolation",
      "Industry vs inferiority",
      "Generativity vs stagnation"
    ],
    "answer": "Identity vs role confusion",
    "rationale": "Adolescence centers on forming a coherent identity."
  },
  {
    "id": 59,
    "domain": "Developmental Psychology",
    "topic": "Erikson",
    "difficulty": "Easy",
    "stem": "Middle adulthood in Erikson\u2019s theory centers on:",
    "choices": [
      "Generativity vs stagnation",
      "Integrity vs despair",
      "Autonomy vs shame",
      "Initiative vs guilt"
    ],
    "answer": "Generativity vs stagnation",
    "rationale": "Middle adulthood focuses on contributing to the next generation and society."
  },
  {
    "id": 60,
    "domain": "Developmental Psychology",
    "topic": "Erikson",
    "difficulty": "Easy",
    "stem": "Late adulthood in Erikson\u2019s theory centers on:",
    "choices": [
      "Ego integrity vs despair",
      "Identity vs role confusion",
      "Trust vs mistrust",
      "Industry vs inferiority"
    ],
    "answer": "Ego integrity vs despair",
    "rationale": "Late adulthood involves life review and acceptance versus regret."
  },
  {
    "id": 61,
    "domain": "Developmental Psychology",
    "topic": "Attachment",
    "difficulty": "Easy",
    "stem": "A secure attachment is most likely when caregivers are:",
    "choices": [
      "Responsive and consistent",
      "Rejecting and punitive",
      "Frightening and disorganized",
      "Unavailable at all times"
    ],
    "answer": "Responsive and consistent",
    "rationale": "Secure attachment develops from sensitive, responsive caregiving."
  },
  {
    "id": 62,
    "domain": "Developmental Psychology",
    "topic": "Attachment",
    "difficulty": "Moderate",
    "stem": "An avoidant attachment pattern is commonly associated with caregivers who are:",
    "choices": [
      "Rejecting or emotionally unavailable",
      "Always responsive",
      "Inconsistently intrusive",
      "Frightening and chaotic"
    ],
    "answer": "Rejecting or emotionally unavailable",
    "rationale": "Avoidant attachment often follows repeated rejection or emotional unavailability."
  },
  {
    "id": 63,
    "domain": "Developmental Psychology",
    "topic": "Attachment",
    "difficulty": "Moderate",
    "stem": "An ambivalent/resistant attachment pattern is associated with:",
    "choices": [
      "Inconsistent caregiving",
      "Consistently sensitive caregiving",
      "No caregiver interaction",
      "Only genetic factors"
    ],
    "answer": "Inconsistent caregiving",
    "rationale": "Ambivalent attachment is linked to unpredictable caregiver responsiveness."
  },
  {
    "id": 64,
    "domain": "Developmental Psychology",
    "topic": "Attachment",
    "difficulty": "Difficult",
    "stem": "Disorganized attachment is most associated with caregiving that is:",
    "choices": [
      "Frightening, frightened, or chaotic",
      "Consistently warm",
      "Mildly strict",
      "Highly structured only"
    ],
    "answer": "Frightening, frightened, or chaotic",
    "rationale": "Disorganized attachment reflects lack of coherent strategy under frightening caregiving conditions."
  },
  {
    "id": 65,
    "domain": "Developmental Psychology",
    "topic": "Language Development",
    "difficulty": "Easy",
    "stem": "Babbling typically appears before:",
    "choices": [
      "First words",
      "Cooing",
      "Crying",
      "Reflexive sounds"
    ],
    "answer": "First words",
    "rationale": "Babbling precedes the production of meaningful first words."
  },
  {
    "id": 66,
    "domain": "Developmental Psychology",
    "topic": "Language Development",
    "difficulty": "Moderate",
    "stem": "Overextension occurs when a child:",
    "choices": [
      "Uses one word too broadly",
      "Uses one word too narrowly",
      "Stops using language",
      "Speaks only in syntax"
    ],
    "answer": "Uses one word too broadly",
    "rationale": "Overextension applies a word to more objects than adults would."
  },
  {
    "id": 67,
    "domain": "Developmental Psychology",
    "topic": "Language Development",
    "difficulty": "Easy",
    "stem": "Telegraphic speech refers to:",
    "choices": [
      "Short two-word utterances omitting function words",
      "Silent internal speech",
      "Babbling only",
      "Reading comprehension"
    ],
    "answer": "Short two-word utterances omitting function words",
    "rationale": "Telegraphic speech uses essential content words, such as \u201cwant milk.\u201d"
  },
  {
    "id": 68,
    "domain": "Developmental Psychology",
    "topic": "Language Development",
    "difficulty": "Moderate",
    "stem": "The language acquisition device is associated with:",
    "choices": [
      "Chomsky",
      "Skinner",
      "Bandura",
      "Kohlberg"
    ],
    "answer": "Chomsky",
    "rationale": "Chomsky proposed an innate language acquisition mechanism."
  },
  {
    "id": 69,
    "domain": "Developmental Psychology",
    "topic": "Moral Development",
    "difficulty": "Easy",
    "stem": "Kohlberg\u2019s preconventional morality is based mainly on:",
    "choices": [
      "Punishment and reward",
      "Social contract",
      "Universal ethics",
      "Mutual adult intimacy"
    ],
    "answer": "Punishment and reward",
    "rationale": "Preconventional reasoning emphasizes consequences for the self."
  },
  {
    "id": 70,
    "domain": "Developmental Psychology",
    "topic": "Moral Development",
    "difficulty": "Easy",
    "stem": "Kohlberg\u2019s conventional morality emphasizes:",
    "choices": [
      "Social approval and law-and-order",
      "Reflexes",
      "Object permanence",
      "Universal ethical principles only"
    ],
    "answer": "Social approval and law-and-order",
    "rationale": "Conventional morality centers on conformity, approval, and maintaining social order."
  },
  {
    "id": 71,
    "domain": "Developmental Psychology",
    "topic": "Moral Development",
    "difficulty": "Moderate",
    "stem": "Kohlberg\u2019s postconventional morality involves:",
    "choices": [
      "Abstract principles and social contract",
      "Fear of punishment only",
      "Concrete conservation",
      "Attachment protest"
    ],
    "answer": "Abstract principles and social contract",
    "rationale": "Postconventional reasoning uses rights, justice, and ethical principles."
  },
  {
    "id": 72,
    "domain": "Developmental Psychology",
    "topic": "Moral Development",
    "difficulty": "Difficult",
    "stem": "Gilligan criticized Kohlberg for underemphasizing:",
    "choices": [
      "Care and relational ethics",
      "Classical conditioning",
      "Attachment security",
      "Motor reflexes"
    ],
    "answer": "Care and relational ethics",
    "rationale": "Gilligan argued moral reasoning also involves care, relationships, and responsibility."
  },
  {
    "id": 73,
    "domain": "Developmental Psychology",
    "topic": "Adolescence",
    "difficulty": "Easy",
    "stem": "Puberty is initiated by changes in the:",
    "choices": [
      "Endocrine system",
      "Digestive system only",
      "Skeletal system only",
      "Immune system only"
    ],
    "answer": "Endocrine system",
    "rationale": "Puberty reflects hormonal changes through the endocrine system."
  },
  {
    "id": 74,
    "domain": "Developmental Psychology",
    "topic": "Adolescence",
    "difficulty": "Moderate",
    "stem": "Adolescent imaginary audience refers to:",
    "choices": [
      "Belief that others are intensely watching and evaluating them",
      "Inability to remember objects",
      "Moral reasoning based on contracts",
      "Secure-base behavior"
    ],
    "answer": "Belief that others are intensely watching and evaluating them",
    "rationale": "The imaginary audience reflects adolescent self-consciousness."
  },
  {
    "id": 75,
    "domain": "Developmental Psychology",
    "topic": "Adolescence",
    "difficulty": "Moderate",
    "stem": "Personal fable refers to adolescents\u2019 belief that they are:",
    "choices": [
      "Unique and invulnerable",
      "Always morally conventional",
      "Unable to think abstractly",
      "Attached only to peers"
    ],
    "answer": "Unique and invulnerable",
    "rationale": "Personal fable involves perceived uniqueness and invulnerability."
  },
  {
    "id": 76,
    "domain": "Developmental Psychology",
    "topic": "Adolescence",
    "difficulty": "Moderate",
    "stem": "Marcia\u2019s identity achievement status involves:",
    "choices": [
      "Exploration and commitment",
      "Commitment without exploration",
      "No exploration and no commitment",
      "Exploration without commitment"
    ],
    "answer": "Exploration and commitment",
    "rationale": "Identity achievement follows exploration and commitment."
  },
  {
    "id": 77,
    "domain": "Developmental Psychology",
    "topic": "Adolescence",
    "difficulty": "Moderate",
    "stem": "Marcia\u2019s foreclosure status involves:",
    "choices": [
      "Commitment without exploration",
      "Exploration without commitment",
      "No exploration or commitment",
      "Both exploration and commitment"
    ],
    "answer": "Commitment without exploration",
    "rationale": "Foreclosure involves adopting commitments without meaningful exploration."
  },
  {
    "id": 78,
    "domain": "Developmental Psychology",
    "topic": "Adulthood and Aging",
    "difficulty": "Moderate",
    "stem": "Emerging adulthood is associated with:",
    "choices": [
      "Identity exploration and instability",
      "Reflex development only",
      "Ego integrity",
      "No cognitive change"
    ],
    "answer": "Identity exploration and instability",
    "rationale": "Emerging adulthood often involves exploration in work, love, and worldview."
  },
  {
    "id": 79,
    "domain": "Developmental Psychology",
    "topic": "Adulthood and Aging",
    "difficulty": "Easy",
    "stem": "Crystallized intelligence generally refers to:",
    "choices": [
      "Accumulated knowledge and skills",
      "Speeded novel problem solving",
      "Infant reflexes",
      "Attachment behavior"
    ],
    "answer": "Accumulated knowledge and skills",
    "rationale": "Crystallized intelligence reflects acquired knowledge and experience."
  },
  {
    "id": 80,
    "domain": "Developmental Psychology",
    "topic": "Adulthood and Aging",
    "difficulty": "Easy",
    "stem": "Fluid intelligence generally refers to:",
    "choices": [
      "Novel reasoning and processing efficiency",
      "Vocabulary knowledge only",
      "Cultural learning only",
      "Life satisfaction"
    ],
    "answer": "Novel reasoning and processing efficiency",
    "rationale": "Fluid intelligence involves flexible reasoning and often declines earlier than crystallized skills."
  },
  {
    "id": 81,
    "domain": "Developmental Psychology",
    "topic": "Adulthood and Aging",
    "difficulty": "Moderate",
    "stem": "Presbyopia is age-related decline in:",
    "choices": [
      "Near vision",
      "Hearing high frequencies",
      "Balance only",
      "Taste only"
    ],
    "answer": "Near vision",
    "rationale": "Presbyopia is difficulty focusing on near objects with age."
  },
  {
    "id": 82,
    "domain": "Developmental Psychology",
    "topic": "Adulthood and Aging",
    "difficulty": "Difficult",
    "stem": "Socioemotional selectivity theory proposes that older adults prioritize:",
    "choices": [
      "Emotionally meaningful goals",
      "Risk-taking goals",
      "Only new friendships",
      "Achievement tests"
    ],
    "answer": "Emotionally meaningful goals",
    "rationale": "As time perspective narrows, emotionally meaningful relationships and goals become prioritized."
  },
  {
    "id": 83,
    "domain": "Developmental Psychology",
    "topic": "Prenatal and Infancy",
    "difficulty": "Easy",
    "stem": "Teratogens are:",
    "choices": [
      "Environmental agents that can harm prenatal development",
      "Infant reflexes",
      "Attachment behaviors",
      "Moral rules"
    ],
    "answer": "Environmental agents that can harm prenatal development",
    "rationale": "Teratogens are external agents that may disrupt prenatal development."
  },
  {
    "id": 84,
    "domain": "Developmental Psychology",
    "topic": "Prenatal and Infancy",
    "difficulty": "Moderate",
    "stem": "The proximodistal pattern means development proceeds from:",
    "choices": [
      "Center of body outward",
      "Feet to head",
      "Simple to complex morality",
      "Peers to parents"
    ],
    "answer": "Center of body outward",
    "rationale": "Proximodistal development moves from the body\u2019s center toward extremities."
  },
  {
    "id": 85,
    "domain": "Developmental Psychology",
    "topic": "Prenatal and Infancy",
    "difficulty": "Moderate",
    "stem": "The cephalocaudal pattern means development proceeds from:",
    "choices": [
      "Head to tail/feet",
      "Hands to torso",
      "Peers to family",
      "Abstract to concrete"
    ],
    "answer": "Head to tail/feet",
    "rationale": "Cephalocaudal development proceeds from head downward."
  },
  {
    "id": 86,
    "domain": "Developmental Psychology",
    "topic": "Prenatal and Infancy",
    "difficulty": "Easy",
    "stem": "The rooting reflex helps infants:",
    "choices": [
      "Locate the nipple for feeding",
      "Walk independently",
      "Understand conservation",
      "Form identity"
    ],
    "answer": "Locate the nipple for feeding",
    "rationale": "Rooting supports feeding by turning toward cheek stimulation."
  },
  {
    "id": 87,
    "domain": "Developmental Psychology",
    "topic": "Learning and Social Development",
    "difficulty": "Easy",
    "stem": "Bandura\u2019s theory emphasizes learning through:",
    "choices": [
      "Observation and modeling",
      "Psychosexual conflict only",
      "Genetic maturation only",
      "Moral contracts only"
    ],
    "answer": "Observation and modeling",
    "rationale": "Social learning theory stresses modeling, imitation, and vicarious reinforcement."
  },
  {
    "id": 88,
    "domain": "Developmental Psychology",
    "topic": "Learning and Social Development",
    "difficulty": "Moderate",
    "stem": "Vicarious reinforcement occurs when:",
    "choices": [
      "A person\u2019s behavior is influenced by seeing another rewarded",
      "A child is directly punished",
      "A reflex disappears",
      "Memory declines"
    ],
    "answer": "A person\u2019s behavior is influenced by seeing another rewarded",
    "rationale": "Observed consequences influence whether behavior is imitated."
  },
  {
    "id": 89,
    "domain": "Developmental Psychology",
    "topic": "Learning and Social Development",
    "difficulty": "Easy",
    "stem": "Authoritative parenting is characterized by:",
    "choices": [
      "High warmth and high control",
      "Low warmth and high control",
      "High warmth and low control",
      "Low warmth and low control"
    ],
    "answer": "High warmth and high control",
    "rationale": "Authoritative parents combine responsiveness with firm expectations."
  },
  {
    "id": 90,
    "domain": "Developmental Psychology",
    "topic": "Learning and Social Development",
    "difficulty": "Easy",
    "stem": "Authoritarian parenting is characterized by:",
    "choices": [
      "Low warmth and high control",
      "High warmth and high control",
      "High warmth and low control",
      "Low warmth and low control"
    ],
    "answer": "Low warmth and high control",
    "rationale": "Authoritarian parenting is strict and controlling with low responsiveness."
  },
  {
    "id": 91,
    "domain": "Developmental Psychology",
    "topic": "Research Methods",
    "difficulty": "Easy",
    "stem": "A cross-sectional study compares:",
    "choices": [
      "Different age groups at one point in time",
      "The same people repeatedly over time",
      "Only twins",
      "Only case studies"
    ],
    "answer": "Different age groups at one point in time",
    "rationale": "Cross-sectional designs compare age groups at a single time point."
  },
  {
    "id": 92,
    "domain": "Developmental Psychology",
    "topic": "Research Methods",
    "difficulty": "Easy",
    "stem": "A longitudinal study follows:",
    "choices": [
      "The same individuals over time",
      "Different groups once",
      "Only experimental animals",
      "Only archival records"
    ],
    "answer": "The same individuals over time",
    "rationale": "Longitudinal designs track the same participants across time."
  },
  {
    "id": 93,
    "domain": "Developmental Psychology",
    "topic": "Research Methods",
    "difficulty": "Moderate",
    "stem": "A cohort effect is a difference due to:",
    "choices": [
      "Shared historical experiences of an age group",
      "Random assignment",
      "Attachment security",
      "Motor maturation"
    ],
    "answer": "Shared historical experiences of an age group",
    "rationale": "Cohort effects reflect historical and cultural conditions experienced by a group."
  },
  {
    "id": 94,
    "domain": "Developmental Psychology",
    "topic": "Research Methods",
    "difficulty": "Difficult",
    "stem": "Sequential designs combine features of:",
    "choices": [
      "Cross-sectional and longitudinal designs",
      "Case study and ethnography only",
      "Experiment and therapy only",
      "Survey and interview only"
    ],
    "answer": "Cross-sectional and longitudinal designs",
    "rationale": "Sequential designs help separate age, cohort, and time-of-measurement effects."
  },
  {
    "id": 95,
    "domain": "Developmental Psychology",
    "topic": "Attachment",
    "difficulty": "Moderate",
    "stem": "Harlow\u2019s monkey studies supported the importance of:",
    "choices": [
      "Contact comfort",
      "Punishment",
      "Formal operations",
      "Postconventional morality"
    ],
    "answer": "Contact comfort",
    "rationale": "Harlow showed that comfort and contact mattered beyond feeding."
  },
  {
    "id": 96,
    "domain": "Developmental Psychology",
    "topic": "Language Development",
    "difficulty": "Easy",
    "stem": "A child who says all adults are \u201cmommy\u201d is showing:",
    "choices": [
      "Overextension",
      "Underextension",
      "Conservation",
      "Scaffolding"
    ],
    "answer": "Overextension",
    "rationale": "The child applies one word too broadly across a category."
  },
  {
    "id": 97,
    "domain": "Developmental Psychology",
    "topic": "Learning and Social Development",
    "difficulty": "Moderate",
    "stem": "Vygotsky\u2019s zone of proximal development refers to tasks a child can do:",
    "choices": [
      "With guidance but not yet alone",
      "Only alone",
      "Only after puberty",
      "Only through punishment"
    ],
    "answer": "With guidance but not yet alone",
    "rationale": "ZPD is the range between independent ability and performance with support."
  },
  {
    "id": 98,
    "domain": "Developmental Psychology",
    "topic": "Learning and Social Development",
    "difficulty": "Moderate",
    "stem": "Scaffolding refers to:",
    "choices": [
      "Temporary support adjusted to learner ability",
      "Ignoring the child",
      "Punishing incorrect answers",
      "Maturation without help"
    ],
    "answer": "Temporary support adjusted to learner ability",
    "rationale": "Scaffolding provides support that is gradually reduced as competence increases."
  },
  {
    "id": 99,
    "domain": "Developmental Psychology",
    "topic": "Attachment",
    "difficulty": "Easy",
    "stem": "The strange situation procedure was developed to assess:",
    "choices": [
      "Attachment patterns",
      "Moral reasoning",
      "Language syntax",
      "Formal operations"
    ],
    "answer": "Attachment patterns",
    "rationale": "Ainsworth\u2019s Strange Situation assesses infant-caregiver attachment."
  },
  {
    "id": 100,
    "domain": "Developmental Psychology",
    "topic": "Research Methods",
    "difficulty": "Easy",
    "stem": "Habituation in infant research refers to:",
    "choices": [
      "Decreased response to repeated stimulus",
      "Fear of strangers",
      "Moral judgment",
      "Identity crisis"
    ],
    "answer": "Decreased response to repeated stimulus",
    "rationale": "Habituation indicates reduced attention after repeated exposure."
  }
];
const ADPL_SCENARIOS = [
  {
    "case": "A 19-year-old reports intrusive contamination thoughts and spends three hours washing daily. The behavior reduces anxiety but disrupts school.",
    "question": "What is the most likely board concept?",
    "choices": [
      "OCD with compulsions",
      "Specific phobia",
      "Delusional disorder",
      "Conduct disorder"
    ],
    "answer": "OCD with compulsions",
    "rationale": "Intrusive obsessions plus repetitive rituals aimed at reducing anxiety are consistent with OCD."
  },
  {
    "case": "A child fails a conservation task and believes a taller glass has more water even after seeing equal amounts poured.",
    "question": "Which developmental stage is most likely?",
    "choices": [
      "Preoperational",
      "Concrete operational",
      "Formal operational",
      "Postconventional"
    ],
    "answer": "Preoperational",
    "rationale": "Failure of conservation is typical of preoperational thought."
  },
  {
    "case": "An older adult focuses more on close family relationships and emotionally meaningful activities than expanding social networks.",
    "question": "Which theory best explains this?",
    "choices": [
      "Socioemotional selectivity theory",
      "Piagetian formal operations",
      "Kohlberg conventional morality",
      "Classical conditioning"
    ],
    "answer": "Socioemotional selectivity theory",
    "rationale": "Older adults tend to prioritize emotionally meaningful goals as perceived time becomes limited."
  },
  {
    "case": "A client has hallucinations, disorganized speech, negative symptoms, and continuous disturbance for seven months.",
    "question": "Which diagnosis is most likely?",
    "choices": [
      "Schizophrenia",
      "Brief psychotic disorder",
      "Panic disorder",
      "Adjustment disorder"
    ],
    "answer": "Schizophrenia",
    "rationale": "The duration and symptom pattern fit schizophrenia more than brief psychosis."
  },
  {
    "case": "A teenager has explored career and values and has committed to a chosen path after reflection.",
    "question": "Which identity status is described?",
    "choices": [
      "Identity achievement",
      "Foreclosure",
      "Diffusion",
      "Moratorium"
    ],
    "answer": "Identity achievement",
    "rationale": "Identity achievement involves exploration followed by commitment."
  }
];
