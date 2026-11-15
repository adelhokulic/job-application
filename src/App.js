import "./App.css";
import { useFieldArray, useForm } from "react-hook-form";
import StepPersonal from "./components/StepPersonal";
import StepExperience from "./components/StepExperience";
import StepSkills from "./components/StepSkills";
import ProgressBar from "./components/ProgressBar";
import StepReview from "./components/StepReview";
import SuccessMessage from "./components/SuccessMessage";
import { useEffect, useState } from "react";

const stepFields = {
	1: ["fullName", "email", "phone", "city", "linkedin"],
	2: ["jobs"],
	3: ["skills", "yearsOfExperience", "expectedSalary", "coverLetter", "cvFile"],
};

function App() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		trigger,
		getValues,
		reset,
		watch,
	} = useForm({
		mode: "onBlur",
		defaultValues: JSON.parse(localStorage.getItem("jobApplication")) || {},
	});

	const [step, setStep] = useState(1);
	const { fields, append, remove } = useFieldArray({ control, name: "jobs" });
	const [submitedName, setSubmitedName] = useState("");

	const nextStep = async () => {
		const isValid = await trigger(stepFields[step]);
		if (isValid) return setStep(step + 1);
	};
	const updateStep = (newStep) => {
		setStep(newStep);
	};
	const onSubmit = (data) => {
		setSubmitedName(data.fullName);
		reset({});
		localStorage.removeItem("jobApplication");
		setStep(1);
	};
	useEffect(() => {
		const saveDataToLocalStorage = watch((values) => {
			const { cvFile, ...rest } = values;
			localStorage.setItem("jobApplication", JSON.stringify(rest));
		});

		return () => saveDataToLocalStorage.unsubscribe();
	}, [watch]);

	return (
		<main className="page">
			<div className="card">
				<header className="card-header">
					<h1>Job Application</h1>
					<p className="subtitle">Junior Frontend Developer</p>
				</header>

				{submitedName !== "" ? (
					<SuccessMessage
						fullName={submitedName}
						setSubmitedName={setSubmitedName}
					/>
				) : (
					<>
						<ProgressBar step={step} />

						<form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
							{step === 1 && (
								<StepPersonal register={register} errors={errors} />
							)}
							{step === 2 && (
								<StepExperience
									register={register}
									errors={errors}
									fields={fields}
									append={append}
									remove={remove}
								/>
							)}
							{step === 3 && (
								<StepSkills register={register} errors={errors} watch={watch} />
							)}
							{step === 4 && (
								<StepReview data={getValues()} updateStep={updateStep} />
							)}

							<div className="form-actions">
								{step !== 1 && (
									<button
										type="button"
										className="btn btn-secondary"
										onClick={() => setStep(step - 1)}
									>
										Back
									</button>
								)}
								{step !== 4 && (
									<button
										type="button"
										className="btn btn-primary"
										onClick={nextStep}
									>
										Next
									</button>
								)}

								{step === 4 && (
									<button type="submit" className="btn btn-primary">
										Submit application
									</button>
								)}
							</div>
						</form>
					</>
				)}
			</div>
		</main>
	);
}

export default App;
