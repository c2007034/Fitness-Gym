const exercises = [
    {
        title: "1. Jumping Jacks",
        description:
            "Jumping jacks are a full-body exercise that increases aerobic fitness, strengthens the heart, and improves endurance. Start standing with arms at your sides. Jump while spreading your legs and raising your arms overhead. Return to start and repeat.",
    },
    {
        title: "2. High Knees Running in Place",
        description:
            "This cardio move boosts your heart rate while working your core, glutes, and legs. Stand tall, then jog in place, lifting your knees as high as possible while pumping your arms.",
    },
    {
        title: "3. Squats",
        description:
            "Squats help build leg and core strength. Stand with feet shoulder-width apart. Lower your body as if sitting in a chair, keeping your knees over your toes, then return to start.",
    },
    {
        title: "4. Wall Sit",
        description:
            "This isometric move strengthens your quads and glutes. Slide your back down a wall until your knees are at 90°, hold the position for as long as possible.",
    },
    {
        title: "5. Lunges",
        description:
            "Lunges target your legs and improve balance. Step one foot forward and lower your body until both knees are at 90°. Push back up and alternate legs.",
    },
    {
        title: "6. Push-Up and Rotation",
        description:
            "Begin in a push-up position. After one push-up, rotate your body to one side into a side plank. Return to center and repeat on the other side.",
    },
];

const WeightLossWorkouts = () => {
    return (
        <div className="page-container workout-page">
            <h2>Weight Loss Workout Plan</h2>
            <img
                src="/src/assets/hiit.png"
                alt="Weight Loss Exercises"
                className="main-workout-image"
            />
            <div className="exercise-list">
                {exercises.map((ex, index) => (
                    <div className="exercise-card" key={index}>
                        <h3>{ex.title}</h3>
                        <p>{ex.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeightLossWorkouts;
