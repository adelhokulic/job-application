# Job Application Form

A multi-step job application form built with **React**, **React Hook Form** and **React-Bootstrap**. The form checks every field, keeps unfinished applications in the browser, and ends with a review page before submitting.

The visual style (colors, spacing, rounded corners) matches my [CV portfolio](https://github.com/adelhokulic/cv-portfolio), where this project is featured.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7-EC5990?logo=reacthookform&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![React-Bootstrap](https://img.shields.io/badge/React--Bootstrap-2-7952B3?logo=bootstrap&logoColor=white)
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
- **Step indicator:** numbered steps joined by a progress bar. Completed steps get a check mark, and the current step is highlighted.
- **Total experience:** calculated on the review page from the job dates. A job without an end date counts up to today.
- **Word meter:** a small bar under the cover letter fills up and turns green at 50 words.
- **CV upload area:** a custom drop zone that shows the selected file name and turns red on error.
- **Smooth transitions:** each step fades in, and buttons and inputs react to hover and focus. Animations are turned off when the user prefers reduced motion.
- **Responsive layout:** built mobile first with the Bootstrap grid. Skills show in 2, 3 or 5 columns depending on screen width.

---

## Tech Stack

- **React 19**: function components and hooks (`useState`, `useEffect`)
- **React Hook Form**: `useForm`, `useFieldArray`, `trigger`, `watch`, `reset`
- **React-Bootstrap / Bootstrap 5.3**: `Card`, `Form`, `InputGroup`, `Row`/`Col`, `ProgressBar`, `Badge`, `Button`
- **CSS**: Bootstrap CSS variables set to the portfolio color palette, plus custom styles for the step indicator, skills, upload area and animations
- **Create React App**: project setup and build

---

## Project Structure

```
src/
├── index.js                # Entry point, imports Bootstrap CSS
├── App.js                  # Form setup, step navigation, submit, localStorage
├── App.css                 # Theme colors and custom styles
├── components/
│   ├── ProgressBar.js      # Step indicator with Bootstrap ProgressBar
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

React Hook Form and React-Bootstrap work together through `register`: its result is spread onto `Form.Control`, and the `isInvalid` prop shows the error state.

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
- Connecting React Hook Form with React-Bootstrap components
- Theming Bootstrap with CSS variables so the project matches the rest of my portfolio

---

## Author

**Adel Hokulić**
GitHub: [@adelhokulic](https://github.com/adelhokulic)
