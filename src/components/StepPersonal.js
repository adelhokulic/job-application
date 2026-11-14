import {
	cityValidator,
	emailValidator,
	fullNameValidator,
	linkedinValidator,
	phoneValidator,
} from "../validators/formValidator";

function StepPersonal({ register, errors }) {
	return (
		<fieldset className="step">
			<legend className="step-title">Personal Information</legend>

			<div className="form-grid">
				<div className="field field-full">
					<label htmlFor="fullName">Full Name</label>
					<input
						className={errors.fullName ? "input-error" : ""}
						id="fullName"
						type="text"
						placeholder="e.g. John Smith"
						{...register("fullName", fullNameValidator)}
					/>
					{errors.fullName && (
						<p className="field-error">{errors.fullName.message}</p>
					)}
				</div>

				<div className="field">
					<label htmlFor="email">Email</label>
					<input
						className={errors.email ? "input-error" : ""}
						id="email"
						type="email"
						placeholder="name@example.com"
						{...register("email", emailValidator)}
					/>
					{errors.email && (
						<p className="field-error">{errors.email.message}</p>
					)}
				</div>

				<div className="field">
					<label htmlFor="phone">Phone</label>
					<input
						className={errors.phone ? "input-error" : ""}
						id="phone"
						type="tel"
						placeholder="+387 61 234 567"
						{...register("phone", phoneValidator)}
					/>
					{errors.phone && (
						<p className="field-error">{errors.phone.message}</p>
					)}
				</div>

				<div className="field">
					<label htmlFor="city">City</label>
					<input
						className={errors.city ? "input-error" : ""}
						id="city"
						type="text"
						placeholder="e.g. Sarajevo"
						{...register("city", cityValidator)}
					/>
					{errors.city && <p className="field-error">{errors.city.message}</p>}
				</div>

				<div className="field">
					<label htmlFor="linkedin">
						LinkedIn <span className="optional">(optional)</span>
					</label>
					<input
						className={errors.linkedin ? "input-error" : ""}
						id="linkedin"
						type="url"
						placeholder="https://www.linkedin.com/in/..."
						{...register("linkedin", linkedinValidator)}
					/>
					{errors.linkedin && (
						<p className="field-error">{errors.linkedin.message}</p>
					)}
				</div>
			</div>
		</fieldset>
	);
}

export default StepPersonal;
