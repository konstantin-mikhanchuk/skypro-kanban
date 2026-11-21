import { apiClient } from "./api";

export async function getTasks({token}) {
    try {
        const response = await apiClient.get("/kanban", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.error || "Ошибка при загрузке задач",
            { cause: error },
        );
    }
}

export async function getTaskById({token, id}) {
    try {
        const response = await apiClient.get(`/kanban/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.error || "Задача не найдена",
            { cause: error },
        );
    }
}

export async function postTask({token, task}) {
    try {
        const response = await apiClient.post("/kanban", task, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.error || "Ошибка при создании задачи",
            { cause: error },
        );
    }
}

export async function putTask({token, id, task}) {
    try {
        const response = await apiClient.put(`/kanban/${id}`, task, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.error || "Ошибка при обновлении задачи",
            { cause: error },
        );
    }
}

export async function deleteTask({token, id}) {
    try {
        const response = await apiClient.delete(`/kanban/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.error || "Ошибка при удалении задачи",
            { cause: error },
        );
    }
}



