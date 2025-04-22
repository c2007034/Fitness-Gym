import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProgressTracking from "./pages/ProgressTracking/ProgressTracking";
import WorkoutCategories from "./pages/WorkoutCategories/WorkoutCategories";
import WorkoutRecommendations from "./pages/WorkoutRecommendations/WorkoutRecommendations";
import ProtectedRoute from "./components/ProtectedRoute";

import { Context } from "./context/context";

import "./App.css"

function App() {
  const { user, loading } = useContext(Context);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/progress-tracking" element={<ProtectedRoute><ProgressTracking /></ProtectedRoute>} />
        <Route path="/workout-categories" element={<ProtectedRoute><WorkoutCategories /></ProtectedRoute>} />
        <Route path="/workout-recommendations" element={<ProtectedRoute><WorkoutRecommendations /></ProtectedRoute>} />
        <Route path="/progress-tracking" element={<ProtectedRoute><ProgressTracking /></ProtectedRoute>} />

        {/* 404 Page */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
