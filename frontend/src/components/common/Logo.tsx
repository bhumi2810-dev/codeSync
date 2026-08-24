interface LogoProps {
	size?: "small" | "medium" | "large"
}

const Logo = ({ size = "medium" }: LogoProps) => {
	const textSize = {
		small: "text-xl",
		medium: "text-3xl",
		large: "text-5xl",
	}

	const iconSize = {
		small: "w-8 h-8",
		medium: "w-10 h-10",
		large: "w-14 h-14",
	}

	return (
		<div className="flex items-center justify-center gap-3">
			{/* Logo Icon */}

			<div
				className={`
          ${iconSize[size]}
          rounded-xl
          bg-blue-600
          flex
          items-center
          justify-center
          shadow-lg
        `}
			>
				<span className="text-white font-bold">{"</>"}</span>
			</div>

			{/* Logo Text */}

			<div>
				<h1
					className={`
            font-bold
            text-white
            ${textSize[size]}
          `}
				>
					Code<span className="text-blue-500">Sync</span>
				</h1>

				<p className="text-xs text-slate-400">Real-Time Collaborative Coding</p>
			</div>
		</div>
	)
}

export default Logo
