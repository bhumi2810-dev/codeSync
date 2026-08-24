interface LoaderProps {
	size?: "small" | "medium" | "large"
	text?: string
}

const Loader = ({ size = "medium", text = "Loading..." }: LoaderProps) => {
	const spinnerSize = {
		small: "w-5 h-5",
		medium: "w-8 h-8",
		large: "w-12 h-12",
	}

	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<div
				className={`
          ${spinnerSize[size]}
          rounded-full
          border-4
          border-slate-600
          border-t-blue-500
          animate-spin
        `}
			></div>

			<p className="text-sm text-slate-400">{text}</p>
		</div>
	)
}

export default Loader
