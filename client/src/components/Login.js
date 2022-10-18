import React, { useState } from "react";


function Login({ setUser }) {
    const initialState = { username: "", password: "" };
	const [formData, setFormData] = useState(initialState);




	const handleChange = (e) => {
		const { name, value } = e.target;
        
		setFormData({...formData, [name]: value});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		// setErrors([]);
		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => {
				setFormData(initialState);
				if (res.ok) {
					res.json().then((data) => {
						localStorage.setItem("jwt", data.token);
						setUser(data.user);
					});
				} else {
					res.json().then((data) => {
						console.log(data);
						// setErrors...
					});
				}
			})
	}


	return (
		<div id="login">
			<form id="login-form" onSubmit={handleSubmit}>
				<input
					type="text"
					required
					name="username"
					placeholder="username"
					value={formData.username}
					onChange={handleChange}
				/>
				<input
					type="password"
					required
					name="password"
					placeholder="password"
					value={formData.password}
					onChange={handleChange}
				/>
				<button>Sign In</button>
			</form>
			<button>Create Account</button>
		</div>
	);
}

export default Login;