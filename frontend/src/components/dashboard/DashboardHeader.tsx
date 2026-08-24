import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa"

const DashboardHeader = () => {
	return (
		<header
			className="
        flex
        items-center
        justify-between
        px-8
        py-4
        bg-slate-900
        border-b
        border-slate-700
      "
		>
			{/* Logo */}

			<div className="flex items-center gap-3">
				<div
					className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            bg-blue-600
            text-white
            font-bold
            text-lg
          "
				>
					{"</>"}
				</div>

				<div>
					<h1 className="text-xl font-bold text-white">CodeSync</h1>

					<p className="text-xs text-slate-400">Real-Time Collaboration</p>
				</div>
			</div>

			{/* Search Bar */}

			<div className="hidden md:flex relative w-80">
				<FaSearch
					className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
				/>

				<input
					type="text"
					placeholder="Search rooms..."
					className="
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            py-2.5
            pl-11
            pr-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition
            focus:border-blue-500
          "
				/>
			</div>

			{/* Right Section */}

			<div className="flex items-center gap-6">
				{/* Notification */}

				<button
					className="
            text-slate-300
            hover:text-white
            transition
          "
				>
					<FaBell size={20} />
				</button>

				{/* User */}

				<button
					className="
            flex
            items-center
            gap-3
            rounded-lg
            px-3
            py-2
            hover:bg-slate-800
            transition
          "
				>
					<FaUserCircle size={34} className="text-blue-400" />

					<div className="hidden sm:block text-left">
						<p className="text-sm font-semibold text-white">Bhumika</p>

						<p className="text-xs text-slate-400">Software Engineer</p>
					</div>
				</button>
			</div>
		</header>
	)
}

export default DashboardHeader
