import { jwtDecode } from "jwt-decode";

export const getUserEmail = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const decoded = jwtDecode(token); // Decode the JWT
        return decoded.email; //jwt contains email
    } catch (error) {
        console.error("Invalid token", error);
        return null;
    }
};