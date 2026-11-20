import { Button, Card, Col, Form, Row } from "react-bootstrap";
import {
	companyValidator,
	dateFromValidator,
	dateToValidator,
	positionValidator,
} from "../validators/formValidator";

function StepExperience({ register, errors, fields, append, remove }) {
	return (
		<fieldset className="step">
			<legend className="step-title">Work Experience</legend>
			<p className="step-desc">Add your previous jobs, starting with the latest.</p>

			{fields.length === 0 && <p className="empty-state">No jobs added yet.</p>}

			{fields.map((field, index) => {
				return (
					<Card key={field.id} className="job-card">
						<Card.Body>
							<div className="job-card-header">
								<h3 className="job-card-title">
									<span className="job-card-number">{index + 1}</span>
									Job #{index + 1}
								</h3>
								<Button
									type="button"
									variant="link"
									size="sm"
									className="btn-remove"
									onClick={() => remove(index)}
								>
									Remove
								</Button>
							</div>

							<Row className="g-3">
								<Col md={6}>
									<Form.Group controlId={`company-${index}`}>
										<Form.Label>Company</Form.Label>
										<Form.Control
											type="text"
											placeholder="e.g. Acme Inc."
											isInvalid={!!errors.jobs?.[index]?.company}
											{...register(`jobs.${index}.company`, companyValidator)}
										/>
										{errors.jobs?.[index]?.company && (
											<Form.Control.Feedback type="invalid">
												{errors.jobs[index].company?.message}
											</Form.Control.Feedback>
										)}
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId={`position-${index}`}>
										<Form.Label>Position</Form.Label>
										<Form.Control
											type="text"
											placeholder="e.g. Frontend Intern"
											isInvalid={!!errors.jobs?.[index]?.position}
											{...register(`jobs.${index}.position`, positionValidator)}
										/>
										{errors.jobs?.[index]?.position && (
											<Form.Control.Feedback type="invalid">
												{errors.jobs[index].position?.message}
											</Form.Control.Feedback>
										)}
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId={`dateFrom-${index}`}>
										<Form.Label>From</Form.Label>
										<Form.Control
											type="date"
											isInvalid={!!errors.jobs?.[index]?.dateFrom}
											{...register(`jobs.${index}.dateFrom`, dateFromValidator)}
										/>
										{errors.jobs?.[index]?.dateFrom && (
											<Form.Control.Feedback type="invalid">
												{errors.jobs[index].dateFrom?.message}
											</Form.Control.Feedback>
										)}
									</Form.Group>
								</Col>

								<Col md={6}>
									<Form.Group controlId={`dateTo-${index}`}>
										<Form.Label>
											To <span className="optional">(optional)</span>
										</Form.Label>
										<Form.Control
											type="date"
											isInvalid={!!errors.jobs?.[index]?.dateTo}
											{...register(`jobs.${index}.dateTo`, dateToValidator(index))}
										/>
										<Form.Text>Leave empty if this is your current job.</Form.Text>
										{errors.jobs?.[index]?.dateTo && (
											<Form.Control.Feedback type="invalid">
												{errors.jobs[index].dateTo?.message}
											</Form.Control.Feedback>
										)}
									</Form.Group>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				);
			})}

			<Button
				type="button"
				variant="outline-primary"
				className="btn-add w-100"
				onClick={() =>
					append({ company: "", position: "", dateFrom: "", dateTo: "" })
				}
			>
				+ Add job
			</Button>
		</fieldset>
	);
}

export default StepExperience;
