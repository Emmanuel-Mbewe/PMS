import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(""); // Tracks if user is "admin" or "user"
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = () => {
    // Mock authentication credentials
    const adminCredentials = { username: "admin", password: "admin123" };
    const userCredentials = { username: "user", password: "user123" };

    if (
      credentials.username === adminCredentials.username &&
      credentials.password === adminCredentials.password
    ) {
      setUserType("admin");
      setIsLoggedIn(true);
    } else if (
      credentials.username === userCredentials.username &&
      credentials.password === userCredentials.password
    ) {
      setUserType("user");
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType("");
    setCredentials({ username: "", password: "" }); // Reset credentials
  };

  if (isLoggedIn && userType === "admin") {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-12 pt-10 pb-12 w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Login</h2>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-3" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            placeholder="Enter your username"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-lg font-bold mb-3" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogin}
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
