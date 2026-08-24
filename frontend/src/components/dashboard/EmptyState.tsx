import { FaCode, FaPlus } from "react-icons/fa"

interface EmptyStateProps {
	onCreateRoom: () => void
}

const EmptyState = ({ onCreateRoom }: EmptyStateProps) => {
	return (
		<div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 px-6 py-16 text-center">
			{/* Icon */}
			<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-3xl text-blue-400">
				<FaCode />
			</div>

			{/* Heading */}
			<h2 className="mt-6 text-2xl font-bold text-white">No Rooms Yet</h2>

			{/* Description */}
			<p className="mt-3 max-w-md text-slate-400">
				You haven't joined or created any coding rooms yet. Create your first
				room and start collaborating with your teammates.
			</p>

			{/* Create Room Button */}
			<button
				onClick={onCreateRoom}
				className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
			>
				<FaPlus />
				Create Room
			</button>
		</div>
	)
}

export default EmptyState
