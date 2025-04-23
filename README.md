## 🌟 Features

### ✅ User Authentication
- **Sign Up / Login / Logout**  
  Users can register, log in securely, and manage sessions.  
- **JWT-based Auth** with secure token handling  
- Profile picture upload during signup 

---

### 🧑‍💼 User Profile
- View personal information including:
  - Name, age, weight, phone, email
  - Uploaded profile image  
- Profile is visible after login via navbar

---

### 📈 Progress Tracking
- **Add New Progress** entries including:
  - Weight, body fat %, workout frequency, water intake, calories burned
  - Muscle measurements: chest, biceps, waist, legs
- **Progress History**:
  - Sorted by date
  - Displayed side-by-side with entry form
  - Option to delete entries
- Automatically updates the user’s current weight in their profile

---

### 💪 Workout Categories
Three main workout categories with dedicated detail pages:
1. **Weight Loss Training**
   - Cardio-based body workouts
   - Image banner and detailed exercise breakdown
2. **Weight Gain Training**
   - Strength-based body workouts
   - Images for each exercise
3. **Muscle Building Training**
   - Hybrid of resistance and core exercises
   - Clean layout, ready for images

Each category includes:
- Exercises with title, description, image 
- Consistent, responsive styling

---

### 🤖 Workout & Diet Recommendations
- Smart workout and meal suggestions based on user weight range:
  - **Under 60kg** → Weight Gain + High-calorie diet
  - **60–80kg** → Muscle Building + Balanced diet
  - **Over 80kg** → Weight Loss + Fat-burning diet
- Links to relevant workout categories
- Tailored meal tips and routines

---

## 🧰 Tech Stack

### Frontend:
- **React (Vite)** — Modern, fast build system
- **React Router** — SPA routing
- **Axios** — For API communication
- **CSS** — Custom styles and modular SCSS

### Backend:
- **Node.js & Express** — REST API server
- **MongoDB Atlas** — Cloud-hosted database
- **Mongoose** — Schema modeling
- **JWT** — Authentication token handling
- **Multer** — For file uploads (e.g. profile picture)

---

## 📁 Project Structure (Simplified)

```
/client
  └── /components
  └── /pages
  └── App.jsx
  └── main.jsx

/server
  └── /routes (auth, user, progress)
  └── /models (User.js, Progress.js)
  └── /middleware (authMiddleware.js)
  └── server.js
```

---

## 🚀 Getting Started

1. **Clone the repo**
2. **Install dependencies**:
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```
3. **Start the backend**:
   ```bash
   cd server && npm run dev
   ```
4. **Start the frontend**:
   ```bash
   cd client && npm run dev
   ```

Make sure to configure `.env` for backend MongoDB URI and JWT secret.

---