const exercises = [
    {
        title: "1. Push-Ups",
        description:
            "A classic upper body exercise that targets the chest, shoulders, and triceps. Keep your body straight from head to heels and lower yourself until your chest nearly touches the floor.",
        image: "/src/assets/pushups.png",
    },
    {
        title: "2. Dips (using a chair or low table)",
        description:
            "Dips focus on the triceps and chest. Use a sturdy chair, lower your body by bending elbows, and push back up to starting position.",
        image: "/src/assets/chair.png",
    },
    {
        title: "3. Bulgarian Split Squats",
        description:
            "Great for legs and glutes. Place one foot behind you on a chair, lower your hips down, then return to the start. Repeat for both legs.",
        image: "/src/assets/bulgarian.png",
    },
    {
        title: "4. Pike Push-Ups",
        description:
            "Targets your shoulders. Begin in a pike position (hips raised), lower your head towards the floor, and push back up.",
        image: "/src/assets/pikepushups.png",
    },
    {
        title: "5. Glute Bridges",
        description:
            "Strengthens your glutes and hamstrings. Lie on your back, knees bent, feet flat on the floor, then lift your hips and squeeze your glutes.",
        image: "/src/assets/glute.png",
    },
    {
        title: "6. Plank to Push-Up",
        description:
            "A dynamic core and upper-body exercise. Start in a plank, push up into a push-up position, then lower back to plank.",
        image: "/src/assets/plankpushup.png",
    },
];

const WeightGainWorkouts = () => {
    return (
        <div className="page-container workout-page">
            <h2>Weight Gain Workout Plan</h2>
            <img
                src="/src/assets/gain.png"
                alt="Weight Gain Exercises"
                className="main-workout-image"
            />
            <div className="exercise-list">
                {exercises.map((exercise, index) => (
                    <div key={index} className="exercise-card with-image">
                        <div className="exercise-info">
                            <h3>{exercise.title}</h3>
                            <p>{exercise.description}</p>
                            <img src={exercise.image} alt={exercise.title} className="exercise-image" style={{marginTop:'1rem'}}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeightGainWorkouts;
