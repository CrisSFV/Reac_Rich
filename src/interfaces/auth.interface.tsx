export interface LoginRequest {
    username: string;
    password: string;
}
// data que se envia para iniciar la sesion 

export interface LoginResponse {
    success: boolean;
    message: string; 

}
//data de la respuesta esperada de inicio de sesion

export interface LoginFormProps {
    onLogin: (
        username: string,
        password: string
    ) => void;
    loading: boolean;
    error: string;
}
//dat de las propiedades del componente loginForm