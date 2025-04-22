import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const defaulState = {
  weight: "",
  bodyFat: "",
  workoutDays: "",
  waterIntake: "",
  caloriesBurned: "",
  chest: "",
  biceps: "",
  waist: "",
  legs: "",
}

const ProgressTracking = () => {
  const [progress, setProgress] = useState([]);
  const [newEntry, setNewEntry] = useState(defaulState);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/progress/history`, {
        headers: { Authorization: `${token}` },
      });
      setProgress(data);
    } catch (error) {
      console.error("Error fetching progress", error);
    }
  };

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const entryToSend = {
      weight: newEntry.weight,
      bodyFat: newEntry.bodyFat,
      workoutDays: newEntry.workoutDays,
      waterIntake: newEntry.waterIntake,
      caloriesBurned: newEntry.caloriesBurned,
      measurements: {
        chest: newEntry.chest,
        biceps: newEntry.biceps,
        waist: newEntry.waist,
        legs: newEntry.legs,
      },
    };

    try {
      await axios.post(`${API_URL}/progress/add`, entryToSend, {
        headers: { Authorization: `${token}` },
      });
      fetchProgress(); // refresh after submit
      toast.success("Entry added successfully")

    } catch (error) {
      console.error("Error adding progress", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this progress entry?")) return;
    try {
      await axios.delete(`${API_URL}/progress/${id}`, {
        headers: { Authorization: `${token}` },
      });
      fetchProgress();
      toast.success("Entry deleted successfully")
    } catch (error) {
      console.error("Error deleting progress", error);
    }
  };


  return (
    <div className="progress-container page-container">
      <h1>Progress Tracking</h1>
      <div className="progress-content">
        <form onSubmit={handleSubmit} className="progress-form">
          <h2>Add Progress</h2>
          <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} required />
          <input type="number" name="bodyFat" placeholder="Body Fat (%)" onChange={handleChange} />
          <input type="number" name="workoutDays" placeholder="Workout Days (Weekly)" onChange={handleChange} />
          <input type="number" name="waterIntake" placeholder="Water Intake (Liters)" onChange={handleChange} />
          <input type="number" name="caloriesBurned" placeholder="Calories Burned" onChange={handleChange} />
          <h3>Muscle Measurements (cm)</h3>
          <input type="number" name="chest" placeholder="Chest" onChange={handleChange} />
          <input type="number" name="biceps" placeholder="Biceps" onChange={handleChange} />
          <input type="number" name="waist" placeholder="Waist" onChange={handleChange} />
          <input type="number" name="legs" placeholder="Legs" onChange={handleChange} />
          <button type="submit" className="logout-btn">Save Progress</button>
        </form>

        <div className="progress-history">
          <h2>Progress History</h2>

          {progress.length === 0 ? (
            <p>Nothing to show here yet.</p>
          ) : (
            progress.map((entry) => (
              <div className="progress-card" key={entry._id}>
                <strong>{new Date(entry.date).toLocaleDateString()}</strong>
                <p>Weight: {entry.weight} kg</p>
                <p>Body Fat: {entry.bodyFat}%</p>
                <p>Workout Days: {entry.workoutDays}</p>
                <p>Water Intake: {entry.waterIntake} L</p>
                <p>Calories Burned: {entry.caloriesBurned}</p>

                <h4>Measurements (cm)</h4>
                <p>Chest: {entry.measurements?.chest ?? '-'}</p>
                <p>Biceps: {entry.measurements?.biceps ?? '-'}</p>
                <p>Waist: {entry.measurements?.waist ?? '-'}</p>
                <p>Legs: {entry.measurements?.legs ?? '-'}</p>

                <button className="auth-btn" onClick={() => handleDelete(entry._id)}>
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default ProgressTracking;
