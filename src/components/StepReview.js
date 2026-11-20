import { Badge, Button } from "react-bootstrap";

const workingYears = (job) => {
	const dateTo = job.dateTo ? new Date(job.dateTo) : Date.now();
	const dateFrom = new Date(job.dateFrom);
	const workYears = dateTo - dateFrom;
	return workYears / (1000 * 60 * 60 * 24 * 365);
};

function StepReview({ data, updateStep }) {
	const totalWorkingYears =
		data.jobs?.reduce((sum, job) => sum + workingYears(job), 0).toFixed(1) ||
		"0.0";

	return (
		<div className="step">
			<h2 className="step-title">Review your application</h2>
			<p className="step-desc">Check your details before you submit.</p>

			<section className="review-section">
				<div className="review-header">
					<h3>Personal Information</h3>
					<Button
						type="button"
						variant="link"
						size="sm"
						className="btn-edit"
						onClick={() => updateStep(1)}
					>
						Edit
					</Button>
				</div>

				<dl className="review-list">
					<dt>Full name</dt>
					<dd>{data.fullName}</dd>
					<dt>Email</dt>
					<dd>{data.email}</dd>
					<dt>Phone</dt>
					<dd>{data.phone}</dd>
					<dt>City</dt>
					<dd>{data.city}</dd>
					<dt>LinkedIn</dt>
					<dd>{data.linkedin || "Not provided"}</dd>
				</dl>
			</section>

			<section className="review-section">
				<div className="review-header">
					<h3>Work Experience</h3>
					<Button
						type="button"
						variant="link"
						size="sm"
						className="btn-edit"
						onClick={() => updateStep(2)}
					>
						Edit
					</Button>
				</div>

				{(data.jobs?.length === 0 || data.jobs === undefined) && (
					<p className="empty-state">No previous jobs.</p>
				)}

				<ul className="review-jobs">
					{data.jobs?.map((job, index) => {
						return (
							<li key={index} className="review-job">
								<span>
									<strong>{job.position}</strong> at {job.company}
								</span>
								<span className="review-dates">
									{job.dateFrom} – {job.dateTo || "Present"}
								</span>
							</li>
						);
					})}
				</ul>

				<div className="review-total">
					<span>Total experience</span>
					<strong>{totalWorkingYears} years</strong>
				</div>
			</section>

			<section className="review-section">
				<div className="review-header">
					<h3>Skills & Expectations</h3>
					<Button
						type="button"
						variant="link"
						size="sm"
						className="btn-edit"
						onClick={() => updateStep(3)}
					>
						Edit
					</Button>
				</div>

				<div className="tags">
					{data.skills.map((skill) => {
						return (
							<Badge key={skill} pill bg="" className="tag">
								{skill}
							</Badge>
						);
					})}
				</div>

				<dl className="review-list">
					<dt>Years of experience</dt>
					<dd>{data.yearsOfExperience}</dd>
					<dt>Expected salary</dt>
					<dd>{data.expectedSalary} EUR / month</dd>
					<dt>CV</dt>
					<dd>{data.cvFile?.[0]?.name}</dd>
				</dl>

				<p className="review-label">Cover letter</p>
				<p className="review-letter">{data.coverLetter}</p>
			</section>
		</div>
	);
}

export default StepReview;
