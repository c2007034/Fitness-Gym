const muscleBuildingExercises = [
    {
        name: "Push-Ups",
        description:
            "Push-ups are a bodyweight exercise that builds chest, shoulders, and triceps. Keep your back straight and lower yourself until your chest almost touches the floor, then push back up.",
        image: "/src/assets/pushups.png",
    },
    {
        name: "Pull-Ups",
        description:
            "Pull-ups are one of the best upper body workouts. Grip the bar, pull yourself up until your chin is over the bar, and lower back down with control.",
        image: "/src/assets/pullup.png",
    },
    {
        name: "Dips",
        description:
            "Dips target the triceps and chest. Use parallel bars or a sturdy chair, lower your body until your arms are at a 90-degree angle, then push back up.",
        image: "/src/assets/chair.png",
    },
    {
        name: "Plank to Push-Up",
        description:
            "Start in a plank position. One arm at a time, push yourself into a push-up position, then return to plank. This engages the core and upper body.",
        image: "/src/assets/plankpushup.png",
    },
    {
        name: "Bodyweight Rows",
        description:
            "Using a sturdy horizontal bar, lie beneath it and pull your chest up to the bar. It strengthens your back and arms.",
        image: "/src/assets/rows.png",
    },
    {
        name: "Superman Hold",
        description:
            "Lie on your stomach, lift your arms and legs off the floor and hold. This strengthens the lower back and glutes.",
        image: "/src/assets/superman.png",
    },
];

const MuscleBuildingTraining = () => {
    return (
        <div className="page-container workout-page">
            <h2>Muscle Building Training</h2>
            <img
                src="/src/assets/muscle2.png"
                alt="Weight Gain Exercises"
                className="main-workout-image"
            />
            <div className="exercise-list">
                {muscleBuildingExercises.map((exercise, index) => (
                    <div key={index} className="exercise-card with-image">
                        <div className="exercise-image">
                            <img src={exercise.image} alt={exercise.name} />
                        </div>
                        <div className="exercise-info">
                            <h3>{exercise.name}</h3>
                            <p>{exercise.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MuscleBuildingTraining;
