import Button from "../common/Button"

interface RoomCardProps {
	roomName: string
	members: number
	lastOpened: string
	onOpen: () => void
}

const RoomCard = ({ roomName, members, lastOpened, onOpen }: RoomCardProps) => {
	return (
		<div
			className="
        rounded-2xl
        border
        border-slate-700
        bg-slate-800
        p-6
        shadow-md
        transition-all
        duration-300
        hover:border-blue-500
        hover:shadow-lg
      "
		>
			{/* Room Name */}
			<h3 className="text-xl font-semibold text-white">{roomName}</h3>

			{/* Room Details */}
			<div className="mt-4 space-y-2 text-slate-400 text-sm">
				<p>👥 Members: {members}</p>
				<p>🕒 Last Opened: {lastOpened}</p>
			</div>

			{/* Open Button */}
			<div className="mt-6">
				<Button onClick={onOpen} className="w-full">
					Open Room
				</Button>
			</div>
		</div>
	)
}

export default RoomCard
