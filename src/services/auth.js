import { apiClient } from "./api";

export async function signIn({login, password}) {
    try {
        const response = await apiClient.post("/user/login", {
            login,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.error || "Неверный логин или пароль",
            { cause: error }
        );
    }
}

export async function signUp({name, login, password}) {
    try {
        const response = await apiClient.post("/user", {
            name, 
            login,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.error || "Ошибка при регистрации",
            { cause: error }
        );
    }
}