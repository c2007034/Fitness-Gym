import { useNavigate } from "react-router-dom";

const WorkoutCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Weight Loss",
      description: "Burn fat and shed extra pounds with these workouts.",
      image: "src/assets/loss.png",
      path: "/workouts/weight-loss",
    },
    {
      title: "Weight Gain",
      description: "Build strength and bulk up effectively.",
      image: "src/assets/gain.png",
      path: "/workouts/weight-gain",
    },
    {
      title: "Muscle Building",
      description: "Gain muscle mass with targeted exercises.",
      image: "src/assets/muscle.png",
      path: "/workouts/muscle-building",
    },
  ];

  return (
    <div className="workout-cat-page page-container">
      <h2>Workout Categories</h2>
      <p>Explore different workout plans based on your goals.</p>
      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.title} onClick={() => navigate(cat.path)}>
            <img src={cat.image} alt={cat.title} />
            <h2>{cat.title}</h2>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCategories;
