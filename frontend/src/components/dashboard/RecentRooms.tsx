import { FaUsers, FaClock, FaArrowRight } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    name: "DSA Practice",
    members: 2,
    lastOpened: "2 hours ago",
  },
  {
    id: 2,
    name: "College Project",
    members: 4,
    lastOpened: "Yesterday",
  },
  {
    id: 3,
    name: "Web Development",
    members: 3,
    lastOpened: "5 minutes ago",
  },
];

const RecentRooms = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

      {rooms.map((room) => (
        <div
          key={room.id}
          className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-950/20"
        >

          {/* Room Icon */}
          <div className="mb-5 flex items-center justify-between">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <span className="text-lg">{"</>"}</span>
            </div>

            <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
              Active
            </span>

          </div>

          {/* Room Name */}
          <h3 className="text-lg font-semibold">
            {room.name}
          </h3>

          {/* Room Details */}
          <div className="mt-4 space-y-2">

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <FaUsers className="text-xs" />
              {room.members} members
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <FaClock className="text-xs" />
              {room.lastOpened}
            </div>

          </div>

          {/* Open Button */}
          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500">
            Open Room
            <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
          </button>

        </div>
      ))}

    </div>
  );
};

export default RecentRooms;