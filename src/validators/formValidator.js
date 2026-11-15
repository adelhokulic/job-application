const textValidator = {
	noDigit: (value) => !/\d/.test(value) || "Input cannot contain numbers",
};
const valueTrim = (value) => value.trim();

const validPhoneInputs = ["+387", "+381", "+385"];

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
export const cityValidator = {
	setValueAs: valueTrim,
	required: "City is required",
	validate: textValidator,
};
export const phoneValidator = {
	setValueAs: valueTrim,
	required: "Phone is required",
	pattern: {
		value: /^\+?[\d\s]+$/,
		message: "Phone can contain only numbers",
	},
	validate: (value) =>
		validPhoneInputs.some((validNum) => value.startsWith(validNum)) ||
		"Phone must start with +381, +387 or +385",
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
export const toAfterFrom = (to, from) =>
	to === "" || to > from || "End date must be after start date";

export const skillsValidator = {
	validate: (skills) =>
		skills.length >= 3 ? true : "Choose at least 3 skills",
};
export const numberValidator = {
	valueAsNumber: true,
	min: { value: 0, message: "Value cannot be negative" },
};
export const coverLetterValidator = {
	required: "Cover letter is required",
	setValueAs: valueTrim,
	validate: (value) => {
		const numOfWords = value.split(/\s+/);
		return numOfWords.length >= 50
			? true
			: "Cover letter must have at least 50 words";
	},
};
export const cvFileValidator = {
	required: "Please upload your CV",
	validate: {
		isPdf: (value) =>
			value?.[0]?.type === "application/pdf" || "Please upload a PDF file",
		maxSize: (value) =>
			value?.[0]?.size <= 2 * 1024 * 1024 || "File cannot be over 2 MB",
	},
};
