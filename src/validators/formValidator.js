import {
	countWords,
	numberValidator,
	textValidator,
	toAfterFrom,
	valueTrim,
} from "./helpers";

export const fullNameValidator = {
	setValueAs: valueTrim,
	required: "Full name is required",
	validate: textValidator,
};

export const emailValidator = {
	setValueAs: valueTrim,
	required: "E-mail is required",
	pattern: {
		value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		message: "Please enter a valid email address",
	},
};

const validPhoneInputs = ["+387", "+381", "+385"];

export const phoneValidator = {
	setValueAs: valueTrim,
	required: "Phone number is required",
	pattern: {
		value: /^\+?[\d\s]+$/,
		message: "Phone can contain only numbers",
	},
	validate: (value) =>
		validPhoneInputs.some((validNum) => value.startsWith(validNum)) ||
		"Phone must start with +381, +387 or +385",
};

export const cityValidator = {
	setValueAs: valueTrim,
	required: "City is required",
	validate: textValidator,
};

export const linkedinValidator = {
	setValueAs: valueTrim,
	validate: (value) =>
		value === "" ||
		value.startsWith("https://www.linkedin.com/") ||
		"LinkedIn link must start with https://www.linkedin.com/",
};

export const companyValidator = {
	setValueAs: valueTrim,
	required: "Company is required",
};

export const positionValidator = {
	setValueAs: valueTrim,
	required: "Position is required",
};

export const dateFromValidator = {
	required: "Date from is required",
};

export const dateToValidator = (index) => ({
	validate: (value, formValues) =>
		toAfterFrom(value, formValues.jobs[index].dateFrom),
});

export const skillsValidator = {
	validate: (skills) =>
		skills.length >= 3 ? true : "Choose at least 3 skills",
};

export const yearsOfExperienceValidator = {
	...numberValidator,
	required: "Years of experience are required",
};

export const expectedSalaryValidator = {
	...numberValidator,
	required: "Expected salary is required",
};

export const coverLetterValidator = {
	setValueAs: valueTrim,
	required: "Cover letter is required",
	validate: (value) =>
		countWords(value) >= 50 || "Cover letter must have at least 50 words",
};

export const cvFileValidator = {
	validate: {
		hasFile: (value) => !!value?.[0] || "Please upload your CV",
		isPdf: (value) =>
			value?.[0]?.type === "application/pdf" || "Please upload a PDF file",
		maxSize: (value) =>
			value?.[0]?.size <= 2 * 1024 * 1024 || "File cannot be over 2 MB",
	},
};
