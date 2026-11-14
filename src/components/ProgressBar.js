const steps = ["Personal", "Experience", "Skills", "Review"];

// TODO: primi trenutni korak kroz props
function ProgressBar() {
	return (
		<div className="progress">
			<div className="progress-track">
				{/* TODO: width zavisi od trenutnog koraka (npr. korak 1 = 0%, korak 4 = 100%) */}
				<div className="progress-fill" style={{ width: "0%" }} />
			</div>

			<ol className="progress-steps">
				{steps.map((label, index) => {
					return (
						<li
							key={label}
							// TODO: className "progress-step done" za završene korake,
							// "progress-step active" za trenutni, a samo "progress-step" za ostale
							className={index === 0 ? "progress-step active" : "progress-step"}
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
