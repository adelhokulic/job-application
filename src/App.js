import "./App.css";
import { useForm } from "react-hook-form";
import StepPersonal from "./components/StepPersonal";

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onBlur" });
	return (
		<main className="page">
			<div className="card">
				<header className="card-header">
					<h1>Job Application</h1>
					<p className="subtitle">Junior Frontend Developer</p>
				</header>

				<form onSubmit={handleSubmit} className="form" noValidate>
					<StepPersonal register={register} errors={errors} />

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
