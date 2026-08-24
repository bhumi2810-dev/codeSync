import { useState } from "react"
import { Link } from "react-router-dom"

import AuthLayout from "../components/layout/AuthLayout"
import Input from "../components/common/Input"
import Button from "../components/common/Button"

const LoginPage = () => {
	// Form State
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	// Error State
	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")

	// Loading State
	const [loading, setLoading] = useState(false)

	// Validate Form
	const validateForm = () => {
		let isValid = true

		setEmailError("")
		setPasswordError("")

		// Email Validation
		if (!email.trim()) {
			setEmailError("Email is required.")
			isValid = false
		} else {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

			if (!emailRegex.test(email)) {
				setEmailError("Please enter a valid email address.")
				isValid = false
			}
		}

		// Password Validation
		if (!password.trim()) {
			setPasswordError("Password is required.")
			isValid = false
		} else if (password.length < 8) {
			setPasswordError("Password must be at least 8 characters.")
			isValid = false
		}

		return isValid
	}

	// Handle Login
	const handleLogin = async () => {
		if (!validateForm()) return

		setLoading(true)

		// Simulate API Call
		await new Promise((resolve) => setTimeout(resolve, 2000))

		console.log("Login Successful")
		console.log({
			email,
			password,
		})

		setLoading(false)
	}

	return (
		<AuthLayout>
			<div className="space-y-6">
				{/* Heading */}
				<div className="text-center">
					<h2 className="text-3xl font-bold text-white">Welcome Back</h2>

					<p className="mt-2 text-slate-400">Sign in to continue to CodeSync</p>
				</div>

				{/* Email */}
				<Input
					label="Email"
					type="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					error={emailError}
				/>

				{/* Password */}
				<Input
					label="Password"
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					error={passwordError}
				/>

				{/* Forgot Password */}
				<div className="text-right">
					<Link
						to="/forgot-password"
						className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
					>
						Forgot Password?
					</Link>
				</div>

				{/* Login Button */}
				<Button onClick={handleLogin} loading={loading} className="w-full">
					Login
				</Button>

				{/* Signup */}
				<p className="text-center text-sm text-slate-400">
					Don't have an account?{" "}
					<Link
						to="/signup"
						className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
					>
						Sign Up
					</Link>
				</p>
			</div>
		</AuthLayout>
	)
}

export default LoginPage
