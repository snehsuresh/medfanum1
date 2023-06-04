import React, { useState } from "react";
import './apply.css'
// import nodemailer from 'nodemailer';


function ApplyPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [, setResume] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		// const formData = new FormData(e.target);

		// const name = formData.get('name');
		// const email = formData.get('email');
		// const resume = formData.get('resume');

		// const transporter = nodemailer.createTransport({
		// 	service: 'gmail',
		// 	auth: {
		// 		user: 'avinashbhattacharya92@gmail.com',
		// 		pass: 'Precise@14',
		// 	},
		// });

		// const mailOptions = {
		// 	from: 'your.email@gmail.com',
		// 	to: 'recipient.email@gmail.com',
		// 	subject: 'New Job Application',
		// 	text: `Name: ${name}\nEmail: ${email}`,
		// 	attachments: [
		// 		{
		// 			filename: resume.name,
		// 			content: resume.data,
		// 		},
		// 	],
		// };

		// transporter.sendMail(mailOptions, function (error, info) {
		// 	if (error) {
		// 		console.error(error);
		// 	} else {
		// 		console.log('Email sent: ' + info.response);
		// 	}
		// });

		// // clear form after submission
		// e.target.reset();
	}

	return (
		<div className="apply-page">
			<h1>Apply in our Company</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="resume">Resume:</label>
					<input
						type="file"
						id="resume"
						name="resume"
						accept=".pdf"
						onChange={(e) => setResume(e.target.files[0])}
						required
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default ApplyPage;
