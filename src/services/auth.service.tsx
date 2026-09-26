import { LOGIN_CREDENTIALS } from "@/constants/auth";
import { LoginRequest, LoginResponse } from "@/interfaces/auth.interface";

export const loginService = async(data: LoginRequest):Promise<LoginResponse> => {
    await new Promise( resolve => setTimeout(resolve, 1000));

    console.log(data.username);
    console.log(data.password);
    console.log("---------------------------------");
    console.log(LOGIN_CREDENTIALS.username);
    console.log(LOGIN_CREDENTIALS.password);
    const isValid =
        data.username === LOGIN_CREDENTIALS.username &&
        data.password === LOGIN_CREDENTIALS.password;

    if (!isValid) {
        return {
            success: false,
            message: "Usuario o contraseña incorrectos"
        };
    }

    return {
        success: true,
        message: "Login correcto"
    }

}