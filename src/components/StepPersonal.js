import { Col, Form, Row } from "react-bootstrap";
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
			<p className="step-desc">How can we reach you?</p>

			<Row className="g-3">
				<Col xs={12}>
					<Form.Group controlId="fullName">
						<Form.Label>Full Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="e.g. John Smith"
							isInvalid={!!errors.fullName}
							{...register("fullName", fullNameValidator)}
						/>
						{errors.fullName && (
							<Form.Control.Feedback type="invalid">
								{errors.fullName.message}
							</Form.Control.Feedback>
						)}
					</Form.Group>
				</Col>

				<Col md={6}>
					<Form.Group controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="name@example.com"
							isInvalid={!!errors.email}
							{...register("email", emailValidator)}
						/>
						{errors.email && (
							<Form.Control.Feedback type="invalid">
								{errors.email.message}
							</Form.Control.Feedback>
						)}
					</Form.Group>
				</Col>

				<Col md={6}>
					<Form.Group controlId="phone">
						<Form.Label>Phone</Form.Label>
						<Form.Control
							type="tel"
							placeholder="+387 61 234 567"
							isInvalid={!!errors.phone}
							{...register("phone", phoneValidator)}
						/>
						{errors.phone && (
							<Form.Control.Feedback type="invalid">
								{errors.phone.message}
							</Form.Control.Feedback>
						)}
					</Form.Group>
				</Col>

				<Col md={6}>
					<Form.Group controlId="city">
						<Form.Label>City</Form.Label>
						<Form.Control
							type="text"
							placeholder="e.g. Sarajevo"
							isInvalid={!!errors.city}
							{...register("city", cityValidator)}
						/>
						{errors.city && (
							<Form.Control.Feedback type="invalid">
								{errors.city.message}
							</Form.Control.Feedback>
						)}
					</Form.Group>
				</Col>

				<Col md={6}>
					<Form.Group controlId="linkedin">
						<Form.Label>
							LinkedIn <span className="optional">(optional)</span>
						</Form.Label>
						<Form.Control
							type="url"
							placeholder="https://www.linkedin.com/in/..."
							isInvalid={!!errors.linkedin}
							{...register("linkedin", linkedinValidator)}
						/>
						{errors.linkedin && (
							<Form.Control.Feedback type="invalid">
								{errors.linkedin.message}
							</Form.Control.Feedback>
						)}
					</Form.Group>
				</Col>
			</Row>
		</fieldset>
	);
}

export default StepPersonal;
