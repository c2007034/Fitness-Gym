import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import { Context } from "./context/context";

import "./App.css"

function App() {
  const { user, loading } = useContext(Context);
  console.log("user", user, "loading", loading);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;

