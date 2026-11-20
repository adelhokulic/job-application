import "./App.css";
import { useFieldArray, useForm } from "react-hook-form";
import StepPersonal from "./components/StepPersonal";
import StepExperience from "./components/StepExperience";
import StepSkills from "./components/StepSkills";
import ProgressBar from "./components/ProgressBar";
import StepReview from "./components/StepReview";
import SuccessMessage from "./components/SuccessMessage";
import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

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
			<Container className="app-container">
				<header className="app-header">
					<h1 className="app-title">Job Application</h1>
					<p className="app-subtitle">
						Tell us about yourself in four short steps.
					</p>
				</header>

				{submitedName !== "" ? (
					<Card className="form-card">
						<Card.Body className="form-card-body">
							<SuccessMessage
								fullName={submitedName}
								setSubmitedName={setSubmitedName}
							/>
						</Card.Body>
					</Card>
				) : (
					<>
						<ProgressBar step={step} />

						<Card className="form-card">
							<Card.Body className="form-card-body">
								<Form onSubmit={handleSubmit(onSubmit)} noValidate>
									<div key={step} className="step-fade">
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
											<StepSkills
												register={register}
												errors={errors}
												watch={watch}
											/>
										)}
										{step === 4 && (
											<StepReview data={getValues()} updateStep={updateStep} />
										)}
									</div>

									<div className="form-actions">
										{step !== 1 && (
											<Button
												type="button"
												variant="outline-secondary"
												onClick={() => setStep(step - 1)}
											>
												Back
											</Button>
										)}
										<span className="form-actions-count">Step {step} of 4</span>
										{step !== 4 && (
											<Button
												type="button"
												variant="primary"
												onClick={nextStep}
											>
												Next
											</Button>
										)}
										{step === 4 && (
											<Button type="submit" variant="primary">
												Submit application
											</Button>
										)}
									</div>
								</Form>
							</Card.Body>
						</Card>
					</>
				)}
			</Container>
		</main>
	);
}

export default App;
