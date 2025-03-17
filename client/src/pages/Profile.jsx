import { useContext } from "react";
import { Context } from "../context/context";

const Profile = () => {
  const { user } = useContext(Context);

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-card">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="profile-img"
          />
          <h2 className="profile-name">{user.name}</h2>
          <div className="profile-details">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Weight:</strong> {user.weight} kg</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>
      ) : (
        <p className="loading-text">Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
