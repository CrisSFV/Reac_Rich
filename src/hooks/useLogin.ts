import { LOGIN_CREDENTIALS } from "@/constants/auth";
import { useState } from "react";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login =  async (
        username: string,
        password: string
    ) => {
        setLoading(true);
        setError("");
        await new Promise(resolve => setTimeout(resolve, 1000));

        const isValid =
            username === LOGIN_CREDENTIALS.username &&
            password === LOGIN_CREDENTIALS.password;

        if (isValid) {
            setLoading(false);
            return true;
        }

        setError("Usuario o contraseña incorrectos");
        setLoading(false);
        return false;
    };
    
    return {
        login,
        loading,
        error
    };
};