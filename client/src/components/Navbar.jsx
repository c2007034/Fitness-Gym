import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/context";

const Navbar = () => {
    const { user, logout } = useContext(Context);

    return (
        <nav className="navbar">
            <Link to="/" className="logo">FitnessZone</Link>
            <div className="nav-links">
                {user ? (
                    <>
                        <Link to="/profile" className="profile-link">
                            <img src={user.profilePicture || "/default-avatar.png"} alt="Profile" className="profile-pic" />
                            <span className="username">{user.name}</span>
                        </Link>
                        <button onClick={logout} className="logout-btn">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="auth-link">Login</Link>
                        <Link to="/signup" className="auth-link">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
