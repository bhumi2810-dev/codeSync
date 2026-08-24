import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCode,
  FaSave,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("Bhumika Rana");
  const [email, setEmail] = useState("bhumika@example.com");
  const [role, setRole] = useState("Developer");
  const [language, setLanguage] = useState("Java");

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">

      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-6">

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

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white"
        >
          <FaArrowLeft />
          Dashboard
        </button>

      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-5xl px-6 py-10">

        {/* Page Title */}
        <div className="mb-8">

          <p className="text-sm font-medium text-blue-400">
            ACCOUNT
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            Profile
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Manage your CodeSync account and coding preferences.
          </p>

        </div>

        {/* Profile Card */}
        <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

          {/* Profile Header */}
          <div className="border-b border-slate-800 bg-gradient-to-r from-slate-900 to-blue-950/30 p-8">

            <div className="flex flex-col items-center gap-5 sm:flex-row">

              {/* Avatar */}
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold shadow-lg shadow-blue-900/30">
                B
              </div>

              {/* User Info */}
              <div className="text-center sm:text-left">

                <h3 className="text-2xl font-bold">
                  {name}
                </h3>

                <p className="mt-1 text-slate-400">
                  {role}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  CodeSync Developer
                </p>

              </div>

            </div>

          </div>

          {/* Personal Information */}
          <div className="p-8">

            <div className="mb-6">

              <h3 className="text-lg font-semibold">
                Personal Information
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Update your basic account information.
              </p>

            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {/* Name */}
              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>

                <div className="relative">

                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />

                  <input
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 py-3 pl-10 pr-4 text-sm text-white outline-none transition focus:border-blue-500"
                  />

                </div>

              </div>

              {/* Email */}
              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 py-3 pl-10 pr-4 text-sm text-white outline-none transition focus:border-blue-500"
                  />

                </div>

              </div>

              {/* Role */}
              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Role
                </label>

                <input
                  type="text"
                  value={role}
                  onChange={(event) =>
                    setRole(event.target.value)
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
                />

              </div>

              {/* Language */}
              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Default Language
                </label>

                <select
                  value={language}
                  onChange={(event) =>
                    setLanguage(event.target.value)
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
                >
                  <option value="Java">Java</option>
                  <option value="JavaScript">
                    JavaScript
                  </option>
                </select>

              </div>

            </div>

            {/* Save Button */}
            <div className="mt-8 flex justify-end">

              <button
                onClick={handleSave}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                <FaSave />
                Save Changes
              </button>

            </div>

          </div>

        </section>

        {/* Account Information */}
        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

            <p className="text-xs uppercase tracking-wide text-slate-500">
              Rooms
            </p>

            <p className="mt-2 text-2xl font-bold">
              3
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Recent coding rooms
            </p>

          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

            <p className="text-xs uppercase tracking-wide text-slate-500">
              Reviews
            </p>

            <p className="mt-2 text-2xl font-bold">
              8
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Code reviews completed
            </p>

          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

            <p className="text-xs uppercase tracking-wide text-slate-500">
              Language
            </p>

            <p className="mt-2 text-2xl font-bold">
              {language}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Default coding language
            </p>

          </div>

        </section>

      </main>

    </div>
  );
};

export default ProfilePage;