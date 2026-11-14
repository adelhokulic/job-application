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
