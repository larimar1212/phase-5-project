import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

// FIX DESIGN 

function Login({ setUser }) {
    const initialState = { username: "", password: "" };
	const [formData, setFormData] = useState(initialState);

const navigate = useNavigate()

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({...formData, [name]: value});
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(formData)
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
						localStorage.setItem("token", data.token);
						setUser(data.user);
						console.log(data)
						navigate('/')	
					});
				} else {
					res.json().then((data) => {
						console.log(data);
						// setErrors...
					});
				}
			})
	}

// make css so that it has a gif of typing screenwriting 
// on the side  
	return (
		<div className="login-body">
		<div className="login-main">
			<div className="containy a-container">
			<form id="a-form" className="login-form" onSubmit={handleSubmit}>
				<h2 className="login_title title" >Login</h2>
				<div className="form__icons">
					<img className="form__icon"></img>
				</div>
				<input className="login__input"
					type="text"
					required
					name="username"
					placeholder="username"
					value={formData.username}
					onChange={handleChange}
				/>
				<input className="login__input"
					type="password"
					required
					name="password"
					placeholder="password"
					value={formData.password}
					onChange={handleChange}
				/>
				<Link className="signup-link" to={'/signup'}>Don't have an account?</Link>
				<button className="login__button  submit">Sign In</button>
			</form>
			{/* <div className="containy b-container is-txl is-z200" id="b-container">
				{/* <img className="login-pic" src="https://images.squarespace-cdn.com/content/v1/4f7cb1f2e4b000a129e4f333/1491367278838-1GXXKCFTR1R5WC873ZBY/image-asset.gif?format=1000w">
				</img> 

			</div> */}
			</div>
		</div>
		</div>
	);
}

export default Login;