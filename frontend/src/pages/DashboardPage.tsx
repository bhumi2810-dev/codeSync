import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaPlus,
  FaSignInAlt,
  FaUsers,
  FaComments,
  FaFileCode,
  FaHome,
  FaArrowRight,
  FaBell,
} from "react-icons/fa";

import CreateRoomModal from "../components/dashboard/CreateRoomModal";
import JoinRoomModal from "../components/dashboard/JoinRoomModal";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [isCreateRoomOpen, setIsCreateRoomOpen] = useState(false);
  const [isJoinRoomOpen, setIsJoinRoomOpen] = useState(false);

  const rooms = [
    {
      name: "DSA Practice",
      members: 2,
      language: "Java",
      time: "2 hours ago",
    },
    {
      name: "College Project",
      members: 4,
      language: "JavaScript",
      time: "Yesterday",
    },
    {
      name: "Web Development",
      members: 3,
      language: "JavaScript",
      time: "5 minutes ago",
    },
  ];

  // Create room
  const handleCreateRoom = () => {
    setIsCreateRoomOpen(false);

    // Temporary frontend navigation
    navigate("/editor");
  };

  // Join room
  const handleJoinRoom = () => {
    setIsJoinRoomOpen(false);

    // Temporary frontend navigation
    navigate("/editor");
  };

  // Open recent room
  const handleOpenRoom = (roomName: string) => {
    console.log("Opening room:", roomName);

    // Temporary frontend navigation
    navigate("/editor");
  };

  // Open profile
  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">

      {/* ================= HEADER ================= */}
      <header className="flex h-16 w-full items-center justify-between border-b border-slate-800 bg-slate-950 px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
            <FaCode />
          </div>

          <div>
            <h1 className="text-lg font-bold">
              Code<span className="text-blue-500">Sync</span>
            </h1>

            <p className="text-xs text-slate-500">
              Collaborative Coding
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="hidden w-80 md:block">

          <input
            type="text"
            placeholder="Search rooms..."
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
          />

        </div>

        {/* Profile */}
        <div className="flex items-center gap-5">

          <button
            className="text-slate-400 transition hover:text-white"
            title="Notifications"
          >
            <FaBell />
          </button>

          <button
            onClick={handleProfileClick}
            className="flex items-center gap-3 rounded-lg px-2 py-1 transition hover:bg-slate-900"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold">
              B
            </div>

            <div className="hidden text-left sm:block">

              <p className="text-sm font-medium">
                Bhumika
              </p>

              <p className="text-xs text-slate-500">
                Developer
              </p>

            </div>

          </button>

        </div>

      </header>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="flex min-h-[calc(100vh-4rem)] w-full">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden w-60 shrink-0 border-r border-slate-800 bg-slate-950 p-5 md:block">

          <div className="mb-8">

            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Workspace
            </p>

            <nav className="space-y-1">

              {/* Dashboard */}
              <button
                className="flex w-full items-center gap-3 rounded-lg bg-blue-600/10 px-3 py-2.5 text-sm font-medium text-blue-400"
              >
                <FaHome />
                Dashboard
              </button>

              {/* My Rooms */}
              <button
                onClick={() => navigate("/dashboard")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <FaCode />
                My Rooms
              </button>

              {/* Team */}
              <button
                onClick={() => navigate("/editor")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <FaUsers />
                Team
              </button>

              {/* Code Reviews */}
              <button
                onClick={() => navigate("/editor")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <FaFileCode />
                Code Reviews
              </button>

              {/* Messages */}
              <button
                onClick={() => navigate("/editor")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <FaComments />
                Messages
              </button>

            </nav>

          </div>

          {/* Languages */}
          <div className="border-t border-slate-800 pt-6">

            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Languages
            </p>

            <div className="space-y-2">

              <div className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Java
              </div>

              <div className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                JavaScript
              </div>

            </div>

          </div>

        </aside>

        {/* ================= CONTENT ================= */}
        <main className="min-w-0 flex-1 overflow-y-auto">

          <div className="w-full p-6 lg:p-8">

            {/* ================= WELCOME ================= */}
            <section className="relative mb-8 overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 p-8">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative">

                <p className="mb-2 text-sm font-medium text-blue-400">
                  DEVELOPER WORKSPACE
                </p>

                <h2 className="text-3xl font-bold lg:text-4xl">
                  Welcome back, Bhumika 👋
                </h2>

                <p className="mt-3 max-w-2xl text-slate-400">
                  Continue building with your team. Create a room,
                  join your teammates, or continue from a recent
                  coding session.
                </p>

              </div>

            </section>

            {/* ================= CREATE / JOIN ================= */}
            <section className="mb-10 grid grid-cols-1 gap-5 lg:grid-cols-2">

              {/* CREATE ROOM */}
              <button
                onClick={() => setIsCreateRoomOpen(true)}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-950/30"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg">
                  <FaPlus />
                </div>

                <h3 className="text-xl font-semibold">
                  Create a Room
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                  Start a new collaborative coding session and
                  invite your teammates.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-400">
                  Create workspace
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </div>

              </button>

              {/* JOIN ROOM */}
              <button
                onClick={() => setIsJoinRoomOpen(true)}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-950/30"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-lg">
                  <FaSignInAlt />
                </div>

                <h3 className="text-xl font-semibold">
                  Join a Room
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                  Enter a room code shared by your teammate and
                  start collaborating.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-purple-400">
                  Join workspace
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </div>

              </button>

            </section>

            {/* ================= RECENT ROOMS ================= */}
            <section className="mb-10">

              <div className="mb-5 flex items-end justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Continue working
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    Recent Rooms
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Quickly access your recent collaborative sessions.
                  </p>

                </div>

                <button className="hidden items-center gap-2 text-sm text-blue-400 transition hover:text-blue-300 sm:flex">
                  View all
                  <FaArrowRight />
                </button>

              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

                {rooms.map((room) => (

                  <div
                    key={room.name}
                    className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80"
                  >

                    <div className="flex items-start justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <FaCode />
                      </div>

                      <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs text-green-400">
                        Active
                      </span>

                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {room.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {room.language}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-xs text-slate-500">

                      <span className="flex items-center gap-2">
                        <FaUsers />
                        {room.members} members
                      </span>

                      <span>
                        {room.time}
                      </span>

                    </div>

                    <button
                      onClick={() => handleOpenRoom(room.name)}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-800 py-2.5 text-sm font-medium transition hover:bg-blue-600"
                    >
                      Open Room
                      <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                    </button>

                  </div>

                ))}

              </div>

            </section>

            {/* ================= QUICK START ================= */}
            <section>

              <div className="mb-5">

                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Get started
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Quick Start
                </h2>

              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {/* Java */}
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-orange-500/40">

                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                    <FaCode />
                  </div>

                  <h3 className="font-semibold">
                    Java
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Build Java programs with your teammates.
                  </p>

                </div>

                {/* JavaScript */}
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-yellow-500/40">

                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                    <FaCode />
                  </div>

                  <h3 className="font-semibold">
                    JavaScript
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Create and test JavaScript projects together.
                  </p>

                </div>

                {/* Pair Programming */}
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-green-500/40">

                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                    <FaUsers />
                  </div>

                  <h3 className="font-semibold">
                    Pair Programming
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Code together in the same workspace.
                  </p>

                </div>

                {/* Code Review */}
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-purple-500/40">

                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                    <FaFileCode />
                  </div>

                  <h3 className="font-semibold">
                    Code Review
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Discuss and improve code with your team.
                  </p>

                </div>

              </div>

            </section>

          </div>

        </main>

      </div>

      {/* ================= CREATE ROOM MODAL ================= */}
      <CreateRoomModal
        isOpen={isCreateRoomOpen}
        onClose={() => setIsCreateRoomOpen(false)}
        onCreateRoom={handleCreateRoom}
      />

      {/* ================= JOIN ROOM MODAL ================= */}
      <JoinRoomModal
        isOpen={isJoinRoomOpen}
        onClose={() => setIsJoinRoomOpen(false)}
        onJoinRoom={handleJoinRoom}
      />

    </div>
  );
};

export default DashboardPage;