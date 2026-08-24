import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

interface InputProps {
	label: string
	type?: "text" | "email" | "password"
	placeholder?: string
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	required?: boolean
	disabled?: boolean
	error?: string
}

const Input = ({
	label,
	type = "text",
	placeholder = "",
	value,
	onChange,
	required = false,
	disabled = false,
	error = "",
}: InputProps) => {
	const [showPassword, setShowPassword] = useState(false)

	const inputType =
		type === "password" ? (showPassword ? "text" : "password") : type

	return (
		<div className="flex flex-col gap-2 w-full">
			{/* Label */}

			<label className="text-sm font-medium text-slate-300">{label}</label>

			{/* Input Container */}

			<div className="relative">
				<input
					type={inputType}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					required={required}
					disabled={disabled}
					className="
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            px-4
            py-3
            pr-12
            text-white
            outline-none
            transition
            duration-300
            placeholder:text-slate-500
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/30
            disabled:opacity-50
          "
				/>

				{/* Show/Hide Password */}

				{type === "password" && (
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              hover:text-white
              transition-colors
            "
					>
						{showPassword ? <FaEyeSlash /> : <FaEye />}
					</button>
				)}
			</div>

			{/* Error */}

			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	)
}

export default Input
