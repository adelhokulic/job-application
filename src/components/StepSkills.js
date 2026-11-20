import {
	ProgressBar as BsProgressBar,
	Col,
	Form,
	InputGroup,
	Row,
} from "react-bootstrap";
import {
	coverLetterValidator,
	cvFileValidator,
	expectedSalaryValidator,
	skillsValidator,
	yearsOfExperienceValidator,
} from "../validators/formValidator";
import { countWords } from "../validators/helpers";

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
	const numOfWords = countWords(watch("coverLetter") || "");

	const watchCvFile = watch("cvFile");
	const cvFileName = watchCvFile?.[0]?.name || undefined;
	return (
		<fieldset className="step">
			<legend className="step-title">Skills & Expectations</legend>
			<p className="step-desc">Tell us what you work with and what you expect.</p>

			<div className="mb-4">
				<span className="form-label d-block">
					Skills <span className="optional">(choose at least 3)</span>
				</span>
				<div className="skills-grid">
					{skills.map((skill) => {
						return (
							<label key={skill} className="skill-option">
								<Form.Check.Input
									type="checkbox"
									value={skill}
									isInvalid={!!errors.skills}
									{...register("skills", skillsValidator)}
								/>
								<span>{skill}</span>
							</label>
						);
					})}
				</div>
				{errors.skills && (
					<div className="invalid-feedback d-block">{errors.skills.message}</div>
				)}
			</div>

			<Row className="g-3">
				<Col md={6}>
					<Form.Group controlId="yearsOfExperience">
						<Form.Label>Years of experience</Form.Label>
						<Form.Control
							type="number"
							min="0"
							placeholder="e.g. 2"
							isInvalid={!!errors.yearsOfExperience}
							{...register("yearsOfExperience", yearsOfExperienceValidator)}
						/>
						{errors.yearsOfExperience && (
							<Form.Control.Feedback type="invalid">
								{errors.yearsOfExperience.message}
							</Form.Control.Feedback>
						)}
					</Form.Group>
				</Col>

				<Col md={6}>
					<Form.Group controlId="expectedSalary">
						<Form.Label>Expected salary</Form.Label>
						<InputGroup hasValidation>
							<Form.Control
								type="number"
								min="0"
								placeholder="e.g. 1500"
								isInvalid={!!errors.expectedSalary}
								{...register("expectedSalary", expectedSalaryValidator)}
							/>
							<InputGroup.Text>EUR / month</InputGroup.Text>
							{errors.expectedSalary && (
								<Form.Control.Feedback type="invalid">
									{errors.expectedSalary.message}
								</Form.Control.Feedback>
							)}
						</InputGroup>
					</Form.Group>
				</Col>

				<Col xs={12}>
					<Form.Group controlId="coverLetter">
						<Form.Label>Cover letter</Form.Label>
						<Form.Control
							as="textarea"
							rows={6}
							placeholder="Tell us why you are a good fit for this role..."
							isInvalid={!!errors.coverLetter}
							{...register("coverLetter", coverLetterValidator)}
						/>
						<div className="word-meter">
							<BsProgressBar
								now={Math.min((numOfWords / 50) * 100, 100)}
								variant={numOfWords >= 50 ? "success" : "primary"}
								className="word-meter-bar"
								aria-label="Cover letter word count"
							/>
							<span
								className={
									numOfWords >= 50 ? "word-count complete" : "word-count"
								}
							>
								{numOfWords} / 50 words
							</span>
						</div>
						{errors.coverLetter && (
							<div className="invalid-feedback d-block">
								{errors.coverLetter.message}
							</div>
						)}
					</Form.Group>
				</Col>

				<Col xs={12}>
					<span className="form-label d-block">
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
						className={
							errors.cvFile
								? "file-drop has-error"
								: cvFileName
									? "file-drop has-file"
									: "file-drop"
						}
					>
						<span className="file-drop-icon" aria-hidden="true">
							{cvFileName ? "✓" : "↑"}
						</span>
						<span className="file-drop-title">
							{cvFileName || "Click to upload your CV"}
						</span>
						<span className="file-drop-hint">PDF only, up to 2 MB</span>
					</label>
					{errors.cvFile && (
						<div className="invalid-feedback d-block">{errors.cvFile.message}</div>
					)}
				</Col>
			</Row>
		</fieldset>
	);
}

export default StepSkills;
