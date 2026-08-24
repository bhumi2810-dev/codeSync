import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: "primary" | "secondary" | "danger"
	size?: "sm" | "md" | "lg"
	loading?: boolean
}

const Button = ({
	children,
	variant = "primary",
	size = "md",
	loading = false,
	disabled,
	className = "",
	...props
}: ButtonProps) => {
	// Variant Styles
	const variantStyles = {
		primary: "bg-blue-600 hover:bg-blue-700 text-white",

		secondary: "bg-slate-700 hover:bg-slate-600 text-white",

		danger: "bg-red-600 hover:bg-red-700 text-white",
	}

	// Size Styles
	const sizeStyles = {
		sm: "px-4 py-2 text-sm",
		md: "px-5 py-3 text-base",
		lg: "px-6 py-4 text-lg",
	}

	return (
		<button
			disabled={disabled || loading}
			className={`
        rounded-xl
        font-medium
        transition-all
        duration-300
        shadow-md
        hover:shadow-lg
        disabled:opacity-50
        disabled:cursor-not-allowed
        flex
        items-center
        justify-center
        gap-2
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
			{...props}
		>
			{loading ? "Loading..." : children}
		</button>
	)
}

export default Button
