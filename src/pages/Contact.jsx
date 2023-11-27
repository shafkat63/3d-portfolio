import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Shafkat",
					from_email: form.email,
					to_email: "msm.shafkat@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				setIsLoading(false);
				setForm({ name: "", email: "", message: "" });
				//Todo show success message
				//Todo :Hide an alert
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
			});
	};
	const handleFocus = () => {};
	const handleBlur = () => {};

	return (
		<section className="realtive flex lg:flex-row flex-col max-container ">
			<div className="flex-1 min-w-[50%] flex flex-col">
				<h1 className="head-text">Get in Touch</h1>
				<form
					action=""
					onSubmit={handleSubmit}
					className="w-full flex flex-col gap-7 mt-14"
				>
					<label className="text-black-500 font-semibold">
						Name
						<input
							type="text"
							name="name"
							id=""
							className="input"
							required
							value={form.name}
							onChange={handleChange}
							placeholder="Shafkat"
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Email
						<input
							type="email"
							name="email"
							id=""
							className="input"
							required
							value={form.email}
							onChange={handleChange}
							placeholder="shafkat@gmail.com"
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Your Message
						<textarea
							type="text"
							name="message"
							id=""
							className="textarea"
							rows={4}
							required
							value={form.message}
							onChange={handleChange}
							placeholder="Let me know how I can help you!"
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<button
						type="submit"
						className="btn"
						disabled={isLoading}
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						{isLoading ? "Sending..." : "Send Message"}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
