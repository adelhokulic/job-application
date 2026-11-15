import {
	coverLetterValidator,
	cvFileValidator,
	numberValidator,
	skillsValidator,
} from "../validators/formValidator";

const skills = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Git",
	"Tailwind",
	"Node.js",
	"Figma",
];

function StepSkills({ register, errors, watch }) {
	const watchCoverletter = (watch("coverLetter") || "").trim();
	const numOfWords =
		watchCoverletter === "" ? 0 : watchCoverletter.split(/\s+/).length;

	const watchCvFile = watch("cvFile");
	const cvFileName = watchCvFile?.[0]?.name || undefined;
	return (
		<fieldset className="step">
			<legend className="step-title">Skills & Expectations</legend>

			<div className="field">
				<span className="field-label">
					Skills <span className="optional">(choose at least 3)</span>
				</span>
				<div className="skills-grid">
					{skills.map((skill) => {
						return (
							<label key={skill} className="skill-option">
								<input
									className={errors.skills ? "input-error" : ""}
									type="checkbox"
									value={skill}
									{...register("skills", skillsValidator)}
								/>
								<span>{skill}</span>
							</label>
						);
					})}
				</div>
				{errors.skills && (
					<p className="field-error">{errors.skills.message}</p>
				)}
			</div>

			<div className="form-grid step-section">
				<div className="field">
					<label htmlFor="yearsOfExperience">Years of experience</label>
					<input
						id="yearsOfExperience"
						type="number"
						min="0"
						placeholder="e.g. 2"
						className={errors.yearsOfExperience ? "input-error" : ""}
						{...register("yearsOfExperience", {
							...numberValidator,
							required: "Years of experience are required",
						})}
					/>
					{errors.yearsOfExperience && (
						<p className="field-error">{errors.yearsOfExperience.message}</p>
					)}
				</div>

				<div className="field">
					<label htmlFor="expectedSalary">Expected salary</label>
					<div className="input-suffix">
						<input
							id="expectedSalary"
							type="number"
							min="0"
							placeholder="e.g. 1500"
							className={errors.expectedSalary ? "input-error" : ""}
							{...register("expectedSalary", {
								...numberValidator,
								required: "Expected salary is required",
							})}
						/>
						<span className="suffix">EUR / month</span>
					</div>
					{errors.expectedSalary && (
						<p className="field-error">{errors.expectedSalary.message}</p>
					)}
				</div>

				<div className="field field-full">
					<label htmlFor="coverLetter">Cover letter</label>
					<textarea
						id="coverLetter"
						rows="6"
						placeholder="Tell us why you are a good fit for this role..."
						{...register("coverLetter", coverLetterValidator)}
						className={errors.coverLetter ? "input-error" : ""}
					/>
					<p className="field-hint word-count">{numOfWords} / 50 words</p>
					{errors.coverLetter && (
						<p className="field-error">{errors.coverLetter.message}</p>
					)}
				</div>

				<div className="field field-full">
					<span className="field-label">
						CV <span className="optional">(PDF, max 2 MB)</span>
					</span>
					<input
						id="cv"
						type="file"
						accept="application/pdf"
						className="file-input"
						{...register("cvFile", cvFileValidator)}
					/>
					<label
						htmlFor="cv"
						className={errors.cvFile ? "has-error file-drop" : "file-drop"}
					>
						<span className="file-drop-icon" aria-hidden="true">
							📄
						</span>
						<span className="file-drop-title">
							{cvFileName || "Click to upload your CV"}
						</span>
						<span className="file-drop-hint">PDF only, up to 2 MB</span>
					</label>
					{errors.cvFile && (
						<p className="field-error">{errors.cvFile.message}</p>
					)}
				</div>
			</div>
		</fieldset>
	);
}

export default StepSkills;
