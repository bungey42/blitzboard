
import React, { useState } from "react";

const PASSWORD = "mustard123";

export default function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Wrong password");
    }
  };

  if (!authenticated) {
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Admin Panel Login</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="border p-2 rounded mr-2"
        />
        <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Admin Panel</h3>
      <p>Add your form to update points here...</p>
    </div>
  );
}
