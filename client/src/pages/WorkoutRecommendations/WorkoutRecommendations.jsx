import React from "react";
import { Link } from "react-router-dom";

const recommendations = [
  {
    range: "Under 60 kg",
    goal: "Gain weight",
    workout: {
      title: "Weight Gain Training",
      path: "/workouts/weight-gain",
    },
    diet: [
      "Eat calorie-dense meals with healthy fats (avocados, nuts, olive oil)",
      "Include high-protein foods: eggs, lean meats, legumes",
      "Snack often (smoothies, trail mix, cheese)",
      "Drink whole milk and fruit shakes",
    ],
  },
  {
    range: "60 kg - 80 kg",
    goal: "Build muscle",
    workout: {
      title: "Muscle Building Training",
      path: "/workouts/muscle-building",
    },
    diet: [
      "Balance carbs, proteins, and fats",
      "Eat lean protein with every meal (chicken, fish, tofu)",
      "Complex carbs (brown rice, oats, quinoa)",
      "Stay hydrated and eat post-workout meals (banana + peanut butter, protein shakes)",
    ],
  },
  {
    range: "Above 80 kg",
    goal: "Lose weight",
    workout: {
      title: "Weight Loss Training",
      path: "/workouts/weight-loss",
    },
    diet: [
      "Reduce sugar and refined carbs",
      "Increase fiber (vegetables, legumes, fruits)",
      "Prioritize lean protein",
      "Drink water before meals, avoid sugary drinks",
      "Control portion size and avoid late-night snacking",
    ],
  },
];

const WorkoutRecommendations = () => {
  return (
    <div className="workout-page">
      <h1 style={{margin:'1rem'}}>Workout/Diet Recommendations</h1>
      <h3 style={{margin:'1rem'}}>Get personalized workout plans based on your weight and fitness goals.</h3>


      <div className="exercise-list">
      {recommendations.map((item, index) => (
        <div key={index} className="exercise-card" style={{margin:'1rem'}}>
          <div className="exercise-info">
            <h3>Weight Range: {item.range}</h3>
            <p><strong>Goal:</strong> {item.goal}</p>
            <p>
              <strong>Recommended Workout:</strong>{" "}
              <Link to={item.workout.path} className="link-highlight">
                {item.workout.title}
              </Link>
            </p>
            <h4>Diet Suggestions:</h4>
            <ul>
              {item.diet.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default WorkoutRecommendations;
