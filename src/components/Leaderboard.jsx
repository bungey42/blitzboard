
import React, { useEffect, useState } from "react";
import usersData from "../data/users.json";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData.sort((a, b) => b.points - a.points));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Individual Leaderboard</h2>
      <ul className="space-y-2">
        {users.map((user, i) => (
          <li key={user.name} className="flex items-center bg-white shadow p-4 rounded-lg">
            <img src={user.photo} alt={user.name} className="h-10 w-10 rounded-full mr-4" />
            <div>
              <div className="font-semibold">{i + 1}. {user.name} ({user.team})</div>
              <div className="text-sm text-gray-600">{user.points} pts - {user.lastAction}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
