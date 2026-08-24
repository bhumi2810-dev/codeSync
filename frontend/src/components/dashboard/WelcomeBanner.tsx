import { FaPlus, FaSignInAlt } from "react-icons/fa"
import ActionCard from "./ActionCard"

interface WelcomeBannerProps {
	onCreateRoom: () => void
	onJoinRoom: () => void
}

const WelcomeBanner = ({ onCreateRoom, onJoinRoom }: WelcomeBannerProps) => {
	return (
		<section className="space-y-8">
			{/* Welcome Banner */}
			<div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
				<h1 className="text-3xl font-bold text-white">
					Welcome Back, Bhumika 👋
				</h1>

				<p className="mt-3 max-w-2xl text-slate-400">
					Continue collaborating with your team. Create a new room or join an
					existing coding session to start pair programming.
				</p>
			</div>

			{/* Action Cards */}
			<div className="grid gap-6 md:grid-cols-2">
				<ActionCard
					icon={<FaPlus />}
					title="Create Room"
					description="Start a new collaborative coding workspace and invite your teammates."
					onClick={onCreateRoom}
				/>

				<ActionCard
					icon={<FaSignInAlt />}
					title="Join Room"
					description="Join an existing workspace using a room code shared by your teammate."
					onClick={onJoinRoom}
				/>
			</div>
		</section>
	)
}

export default WelcomeBanner
