import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import EditorPage from "./pages/EditorPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Signup */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Editor */}
        <Route path="/editor" element={<EditorPage />} />

        {/* Profile */}
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;