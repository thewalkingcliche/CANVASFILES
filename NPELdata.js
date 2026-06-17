const BRAIN_AREAS = [
 {name:'Prefrontal Cortex', function:'Executive control, planning, inhibition, decision-making, and goal-directed behavior.', behavior:'Impulse control, flexible thinking, social judgment, attention regulation.', impairment:'Poor planning, disinhibition, difficulty shifting strategies, weak judgment.'},
 {name:'Amygdala', function:'Threat detection, fear learning, emotional salience, and affective tagging of experience.', behavior:'Anxiety responses, emotional learning, vigilance, fear conditioning.', impairment:'Reduced fear recognition or exaggerated threat responses depending on pattern of dysfunction.'},
 {name:'Hippocampus', function:'Formation of new declarative memories and contextual learning.', behavior:'Learning, memory consolidation, spatial/contextual memory.', impairment:'Difficulty forming new memories, disorientation, impaired contextual recall.'},
 {name:'Hypothalamus', function:'Homeostasis, endocrine regulation, hunger, thirst, temperature, and autonomic control.', behavior:'Motivation, stress response, sleep-wake regulation, biological drives.', impairment:'Appetite, sleep, temperature, endocrine, or stress-regulation disruptions.'},
 {name:'Thalamus', function:'Major relay station for sensory and motor signals except olfaction.', behavior:'Attention, sensory filtering, consciousness, sleep-related gating.', impairment:'Sensory processing problems, attention disruption, altered arousal.'},
 {name:'Basal Ganglia', function:'Movement initiation, habit learning, reward-linked action selection.', behavior:'Procedural learning, motor control, reinforcement learning.', impairment:'Movement disturbance, slowed initiation, habit and reward-learning issues.'},
 {name:'Cerebellum', function:'Coordination, motor timing, balance, and error correction.', behavior:'Motor learning, coordination, timing, some cognitive sequencing.', impairment:'Poor balance, tremor, coordination difficulty, timing problems.'},
 {name:'Broca’s Area', function:'Speech production and expressive language planning.', behavior:'Fluent expression, grammatical speech production, verbal output.', impairment:'Effortful, nonfluent speech with relatively preserved comprehension.'},
 {name:'Wernicke’s Area', function:'Language comprehension and meaningful speech processing.', behavior:'Understanding spoken/written language, semantic processing.', impairment:'Poor comprehension, fluent but often meaningless speech.'},
 {name:'Brainstem', function:'Basic life functions, arousal, respiration, heart rate, and wakefulness.', behavior:'Alertness, autonomic regulation, sleep-wake activation.', impairment:'Arousal, breathing, swallowing, or consciousness problems.'}
];

const NEUROTRANSMITTERS = [
 {name:'Dopamine', core:'Reward prediction, motivation, movement, reinforcement learning.', relevance:'Addiction models, motivation, Parkinsonian movement symptoms, psychosis-related pathways.', myth:'Not simply the pleasure chemical; it is strongly tied to wanting, prediction, learning, and action.'},
 {name:'Serotonin', core:'Mood regulation, sleep, appetite, impulse control, and flexibility.', relevance:'Mood and anxiety regulation, sleep patterns, behavioral inhibition.', myth:'Low serotonin alone does not fully explain depression.'},
 {name:'GABA', core:'Primary inhibitory neurotransmitter in the brain.', relevance:'Calming neural activity, anxiety modulation, seizure control, sleep regulation.', myth:'Inhibition is not weakness; it is essential for controlled neural signaling.'},
 {name:'Glutamate', core:'Primary excitatory neurotransmitter; central to learning and plasticity.', relevance:'Memory formation, synaptic strengthening, neural communication.', myth:'More excitation is not always better; excessive activity can be harmful.'},
 {name:'Acetylcholine', core:'Attention, learning, memory, and neuromuscular signaling.', relevance:'Memory systems, Alzheimer-related degeneration, focused attention.', myth:'It is not only a muscle neurotransmitter; it is also important in cognition.'},
 {name:'Norepinephrine', core:'Arousal, alertness, vigilance, and stress response.', relevance:'Attention under stress, sympathetic activation, threat readiness.', myth:'Arousal can improve performance only up to a point.'},
 {name:'Endorphins', core:'Pain modulation and endogenous opioid activity.', relevance:'Stress buffering, pain tolerance, exercise-related relief.', myth:'They do not erase pain; they modulate pain perception and coping.'},
 {name:'Oxytocin', core:'Social bonding, affiliation, trust, and reproductive functions.', relevance:'Attachment, caregiving, social salience.', myth:'It is not a universal love hormone; context and group boundaries matter.'}
];

const CASES = [
 {text:'A person can remember childhood events but has difficulty forming new memories after a medial temporal injury.', answer:'Hippocampus', explain:'This pattern suggests impaired new declarative memory formation, commonly linked to hippocampal/medial temporal systems.'},
 {text:'A client speaks slowly and effortfully, but comprehension is relatively preserved.', answer:'Broca’s Area', explain:'Effortful speech production with relatively better comprehension points to expressive language systems.'},
 {text:'A worker becomes hypervigilant and physiologically reactive after repeated exposure to threat cues.', answer:'Amygdala', explain:'Threat detection and fear learning strongly involve amygdala-centered circuits.'},
 {text:'A student has difficulty planning, inhibiting impulses, and shifting strategies after frontal injury.', answer:'Prefrontal Cortex', explain:'Executive control and behavioral inhibition are strongly linked to prefrontal systems.'},
 {text:'A patient shows poor coordination, unsteady gait, and difficulty timing movements.', answer:'Cerebellum', explain:'Coordination, timing, balance, and motor correction are core cerebellar functions.'},
 {text:'A person shows disrupted appetite, sleep-wake rhythm, and stress hormone regulation.', answer:'Hypothalamus', explain:'Homeostasis and endocrine/autonomic regulation are major hypothalamic functions.'}
];
