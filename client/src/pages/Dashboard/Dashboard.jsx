import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
      <div className="cards-container">
        <div className="card" onClick={() => navigate("/progress-tracking")}>
          <h2 className="card-title">Progress Tracking</h2>
          <p className="card-description">Track your weight changes over time.</p>
        </div>

        <div className="card" onClick={() => navigate("/workouts")}>
          <h2 className="card-title">Workout Categories</h2>
          <p className="card-description">Explore different workout plans based on your goals.</p>
        </div>

        <div className="card" onClick={() => navigate("/workout-recommendations")}>
          <h2 className="card-title">Workout Recommendations</h2>
          <p className="card-description">Get personalized workout plans.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
