
import React from "react";
import Leaderboard from "./components/Leaderboard";
import Timer from "./components/Timer";
import AdminPanel from "./components/AdminPanel";
import "./App.css";
import logo from "/logo.svg";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <header className="flex justify-between items-center mb-6">
        <img src={logo} alt="mustard logo" className="h-12" />
        <Timer />
      </header>
      <Leaderboard />
      <AdminPanel />
    </div>
  );
}
