import "./App.css";
import { useFieldArray, useForm } from "react-hook-form";
import StepPersonal from "./components/StepPersonal";
import StepExperience from "./components/StepExperience";
import StepSkills from "./components/StepSkills";

function App() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

	const { fields, append, remove } = useFieldArray({ control, name: "jobs" });
	return (
		<main className="page">
			<div className="card">
				<header className="card-header">
					<h1>Job Application</h1>
					<p className="subtitle">Junior Frontend Developer</p>
				</header>

				<form onSubmit={handleSubmit} className="form" noValidate>
					<StepPersonal register={register} errors={errors} />
					{/* TODO: privremeno su oba koraka prikazana jedan ispod drugog. Kasnije prikazuješ samo trenutni korak */}
					<StepExperience
						register={register}
						errors={errors}
						fields={fields}
						append={append}
						remove={remove}
					/>
					{/* TODO: proslijedi props */}
					<StepSkills register={register} errors={errors}/>

					<div className="form-actions">
						<button type="button" className="btn btn-primary">
							Next
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}

export default App;
