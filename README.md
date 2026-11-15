# Job Application Form

A multi-step job application form built with **React** and **React Hook Form**. The form checks every field, keeps unfinished applications in the browser, and ends with a review page before submitting.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7-EC5990?logo=reacthookform&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-Mobile_first-1572B6?logo=css3&logoColor=white)

---

## Features

### Four guided steps

| Step | Content |
| --- | --- |
| **1. Personal Information** | Full name, email, phone, city, LinkedIn (optional) |
| **2. Work Experience** | List of previous jobs: add or remove as many as needed |
| **3. Skills & Expectations** | Skills, years of experience, expected salary, cover letter, CV upload |
| **4. Review** | Summary of all data with an **Edit** button for each section |

### Validation

- Errors appear when a field loses focus, not while the user is still typing.
- Text values are trimmed before validation, so `"  John  "` is saved as `"John"`.
- The user can't move to the next step until the current step is valid.
- Going back to an earlier step keeps everything that was entered.

| Field | Rule |
| --- | --- |
| Full name, City | Required, no digits |
| Email | Required, valid email format |
| Phone | Digits only, must start with `+381`, `+387` or `+385` |
| LinkedIn | Optional, must start with `https://www.linkedin.com/` |
| Job dates | "From" is required. "To" must come after "From" and can stay empty for a current job |
| Skills | At least 3 selected |
| Years of experience, Salary | Required numbers, can't be negative |
| Cover letter | At least 50 words, with a live word counter |
| CV | PDF only, max 2 MB |

### Extras

- **Saved progress:** the form is saved to `localStorage` on every change, so a page refresh doesn't lose any data.
- **Progress bar:** shows completed steps, the current step and what's left.
- **Total experience:** calculated on the review page from the job dates. A job without an end date counts up to today.
- **Responsive layout:** built mobile first with CSS Grid and Flexbox.

---

## Tech Stack

- **React 19**: function components and hooks (`useState`, `useEffect`)
- **React Hook Form**: `useForm`, `useFieldArray`, `trigger`, `watch`, `reset`
- **CSS**: custom styles with no UI library, mobile first
- **Create React App**: project setup and build

---

## Project Structure

```
src/
├── App.js                  # Form setup, step navigation, submit, localStorage
├── App.css                 # All styles
├── components/
│   ├── ProgressBar.js      # Step indicator
│   ├── StepPersonal.js     # Step 1
│   ├── StepExperience.js   # Step 2 (job list with useFieldArray)
│   ├── StepSkills.js       # Step 3 (word counter, CV upload)
│   ├── StepReview.js       # Step 4 (summary and total experience)
│   └── SuccessMessage.js   # Message shown after submit
└── validators/
    ├── formValidator.js    # One set of validation rules per field
    └── helpers.js          # Shared helpers (trim, no digits, numbers, word count, dates)
```

Validation rules live outside the components. Each field gets its own validator in `formValidator.js`, and shared logic sits in `helpers.js`, so components only handle markup.

---

## Getting Started

**Requirements:** Node.js 18 or newer and npm.

```bash
git clone https://github.com/adelhokulic/job-application.git
cd job-application
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
```

---

## What I Practiced

- Building a multi-step form where each step is validated separately
- Writing reusable validation rules instead of repeating them in every field
- Managing a dynamic list of fields with `useFieldArray`
- Validating file uploads by type and size
- Saving form data in `localStorage` and restoring it on page load
- Calculating values from form data (total experience) instead of storing them in state

---

## Author

**Adel Hokulić**
GitHub: [@adelhokulic](https://github.com/adelhokulic)
