import {
	companyValidator,
	dateFromValidator,
	positionValidator,
	toAfterFrom,
} from "../validators/formValidator";

function StepExperience({ register, errors, fields, append, remove }) {
	return (
		<fieldset className="step">
			<legend className="step-title">Work Experience</legend>
			{fields.length === 0 && <p className="empty-state">No jobs added yet.</p>}

			{fields.map((field, index) => {
				return (
					<div key={field.id} className="job-card">
						<div className="job-card-header">
							<h3 className="job-card-title">Job #{index + 1}</h3>
							<button
								onClick={() => remove(index)}
								type="button"
								className="btn-remove"
							>
								Remove
							</button>
						</div>

						<div className="form-grid">
							<div className="field">
								<label htmlFor={`company-${index}`}>Company</label>
								<input
									className={errors.jobs?.[index]?.company ? "input-error" : ""}
									{...register(`jobs.${index}.company`, companyValidator)}
									id={`company-${index}`}
									type="text"
									placeholder="e.g. Acme Inc."
								/>
								{errors.jobs?.[index]?.company && (
									<p className="field-error">
										{errors.jobs[index].company?.message}
									</p>
								)}
							</div>

							<div className="field">
								<label htmlFor={`position-${index}`}>Position</label>
								<input
									className={
										errors.jobs?.[index]?.position ? "input-error" : ""
									}
									{...register(`jobs.${index}.position`, positionValidator)}
									id={`position-${index}`}
									type="text"
									placeholder="e.g. Frontend Intern"
								/>
								{errors.jobs?.[index]?.position && (
									<p className="field-error">
										{errors.jobs[index].position?.message}
									</p>
								)}
							</div>

							<div className="field">
								<label htmlFor={`dateFrom-${index}`}>From</label>
								<input
									className={
										errors.jobs?.[index]?.dateFrom ? "input-error" : ""
									}
									id={`dateFrom-${index}`}
									type="date"
									{...register(`jobs.${index}.dateFrom`, dateFromValidator)}
								/>
								{errors.jobs?.[index]?.dateFrom && (
									<p className="field-error">
										{errors.jobs[index].dateFrom?.message}
									</p>
								)}
							</div>

							<div className="field">
								<label htmlFor={`dateTo-${index}`}>
									To <span className="optional">(optional)</span>
								</label>
								<input
									className={errors.jobs?.[index]?.dateTo ? "input-error" : ""}
									id={`dateTo-${index}`}
									type="date"
									{...register(`jobs.${index}.dateTo`, {
										validate: (value, formValues) =>
											toAfterFrom(value, formValues.jobs[index].dateFrom),
									})}
								/>
								<p className="field-hint">
									Leave empty if this is your current job.
								</p>
								{errors.jobs?.[index]?.dateTo && (
									<p className="field-error">
										{errors.jobs[index].dateTo?.message}
									</p>
								)}
							</div>
						</div>
					</div>
				);
			})}

			<button
				type="button"
				className="btn btn-add"
				onClick={() =>
					append({ company: "", position: "", dateFrom: "", dateTo: "" })
				}
			>
				+ Add job
			</button>
		</fieldset>
	);
}

export default StepExperience;
