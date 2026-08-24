import React from "react"

interface CardProps {
	children: React.ReactNode
	className?: string
}

const Card = ({ children, className = "" }: CardProps) => {
	return (
		<div
			className={`
        w-full
        rounded-2xl
        bg-slate-900
        border
        border-slate-700
        shadow-xl
        p-6
        ${className}
      `}
		>
			{children}
		</div>
	)
}

export default Card
