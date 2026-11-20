import { ProgressBar as BsProgressBar } from "react-bootstrap";

const steps = ["Personal", "Experience", "Skills", "Review"];

function ProgressBar({ step }) {
	return (
		<nav className="stepper" aria-label="Application progress">
			<div className="stepper-track">
				<BsProgressBar
					now={((step - 1) / 3) * 100}
					className="stepper-bar"
					aria-label={`Step ${step} of 4`}
				/>
			</div>

			<ol className="stepper-steps">
				{steps.map((label, index) => {
					return (
						<li
							key={label}
							className={
								step > index + 1
									? "stepper-step done"
									: step === index + 1
										? "stepper-step active"
										: "stepper-step"
							}
						>
							<span className="stepper-dot">
								{step > index + 1 ? "✓" : index + 1}
							</span>
							<span className="stepper-label">{label}</span>
						</li>
					);
				})}
			</ol>
		</nav>
	);
}

export default ProgressBar;
