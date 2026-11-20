import { Button } from "react-bootstrap";

function SuccessMessage({ fullName, setSubmitedName }) {
	return (
		<div className="success" role="status">
			<div className="success-icon" aria-hidden="true">
				✓
			</div>
			<h2 className="success-title">Application submitted!</h2>
			<p className="success-text">
				Thank you, {fullName}. We received your application and will get back to
				you soon.
			</p>
			<Button
				type="button"
				variant="primary"
				onClick={() => setSubmitedName("")}
			>
				Submit another application
			</Button>
		</div>
	);
}

export default SuccessMessage;
