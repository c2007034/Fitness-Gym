import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL, HOST_URL } from "../utils/constants";
import { getUserEmail } from "../utils/helpers";

export const Context = createContext();

export const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserProfile();
    }, []);

    const signup = async (formData) => {
        try {
            await axios.post(`${API_URL}/auth/signup`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return true;
        } catch (err) {
            console.error("Error in signup:", err);
            return false;
        }
    };

    const login = async (email, password) => {
        try {
            const res = await axios.post(`${API_URL}/auth/login`, {
                email,
                password,
            });
            localStorage.setItem("token", res.data.token);
            await getUserProfile();
            return true;
        } catch (err) {
            console.error("Error in login:", err);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    const getUserProfile = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }

        const email = getUserEmail();
        if (!email) {
            setLoading(false);
            return;
        }

        try {
            const res = await axios.get(`${API_URL}/user/profile`, {
                headers: { Authorization: `${token}` },
                params: { email },
            });
            const profilePicture = res.data.profilePicture ? `${HOST_URL}${res.data.profilePicture}` : 'src/assets/default-avatar.jpg'
            setUser({ ...res.data, profilePicture });
        } catch (err) {
            console.error("Error in getUserProfile:", err);
            setUser(null);
            localStorage.removeItem("token");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Context.Provider value={{ user, setUser, signup, login, logout, loading }}>
            {children}
        </Context.Provider>
    );
};
