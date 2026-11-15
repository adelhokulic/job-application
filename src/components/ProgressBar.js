const steps = ["Personal", "Experience", "Skills", "Review"];

function ProgressBar({ step }) {
	return (
		<div className="progress">
			<div className="progress-track">
				<div
					className="progress-fill"
					style={{ width: `${((step - 1) / 3) * 100}%` }}
				/>
			</div>

			<ol className="progress-steps">
				{steps.map((label, index) => {
					return (
						<li
							key={label}
							className={
								step > index + 1
									? "progress-step done"
									: step === index + 1
										? "progress-step active"
										: "progress-step"
							}
						>
							<span className="progress-dot">{index + 1}</span>
							<span className="progress-label">{label}</span>
						</li>
					);
				})}
			</ol>
		</div>
	);
}

export default ProgressBar;
