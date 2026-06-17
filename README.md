# PsycheSim: AI Interview Simulator for Psychology Students

PsycheSim is a browser-based interview simulator for psychology students. It lets students practice clinical-style intake interviewing with simulated clients, then generates feedback based on key interviewing competencies.

## Features

- Simulated psychology client interviews
- Five built-in cases
- Beginner, intermediate, and advanced difficulty levels
- Demo mode with no API key required
- Optional AI mode using the OpenAI API
- Rule-based feedback rubric
- Transcript export
- Works as a static site for GitHub Pages

## Built-In Cases

1. Academic Anxiety
2. Depressive Symptoms After Academic Failure
3. Adjustment Difficulty in College
4. Sleep Problems and Overthinking
5. Internship Stress and Self-Doubt

## How to Run Locally

No build tools are required.

1. Download or clone this repository.
2. Open `index.html` in a browser.
3. Select a case, difficulty, and mode.
4. Start the interview.

## How to Upload to GitHub

1. Create a new GitHub repository.
2. Upload these files:
   - `index.html`
   - `styles.css`
   - `cases.js`
   - `app.js`
   - `README.md`
   - `.gitignore`
   - `LICENSE`
3. Commit the files.

## Deploy with GitHub Pages

1. Go to the repository settings.
2. Open **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and root folder.
5. Save.
6. GitHub will provide a public site link.

## AI Mode Warning

AI mode asks for an OpenAI API key in the browser. This is acceptable for private local testing only. Do not hard-code an API key in the source files. For production use, connect this frontend to a backend proxy so the API key is stored server-side.

## Recommended Classroom Use

### Pre-task
Students review basic intake interviewing principles and prepare at least 10 opening and follow-up questions.

### Simulation
Students conduct a simulated interview using one assigned case.

### Post-task
Students export the transcript and submit:

- Brief client summary
- Presenting concern
- Key symptoms
- Possible triggers
- Functional impact
- Initial clinical impression
- Recommended next steps
- Reflection on interviewing skills

## Feedback Domains

The app evaluates:

- Rapport building
- Question quality
- Symptom exploration
- Functional impairment assessment
- Risk assessment
- Summary and closure

## Educational Limitation

This app is for training and classroom simulation only. It does not provide diagnosis, treatment, crisis response, or professional psychological services.
