export const valueTrim = (value) => value.trim();

export const textValidator = {
	noDigit: (value) => !/\d/.test(value) || "Input cannot contain numbers",
};

export const numberValidator = {
	valueAsNumber: true,
	min: { value: 0, message: "Value cannot be negative" },
};

export const toAfterFrom = (to, from) =>
	to === "" || to > from || "End date must be after start date";

export const countWords = (text) => {
	const trimmed = text.trim();
	return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
};
