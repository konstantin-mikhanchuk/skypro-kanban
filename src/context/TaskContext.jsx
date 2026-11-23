import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import {
  getTasks,
  postTask,
  putTask,
  deleteTask,
} from "../services/tasks";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const { userData } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

useEffect(() => {
    if (!userData?.token) {
        setTasks([]);
        return
    }

    let isMounted = true;

    const loadTasks = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await getTasks({ token: userData.token });
        if (isMounted) {
          setTasks(data.tasks);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadTasks();

    return () => {
      isMounted = false;
    };
  }, [userData]);

  const addTask = async (newTask) => {
    const data = await postTask({
        token: userData.token,
        task: newTask,
    });
    setTasks(data.tasks);
  };

  const editTask = async (id, updatedTask) => {
    const data = await putTask({
        token: userData.token,
        id,
        task: updatedTask,
    });
    setTasks(data.tasks);
  }

  const removeTask = async (id) => {
    const data = await deleteTask({
      token: userData.token,
      id,
    });
    setTasks(data.tasks);
  };

   return (
    <TaskContext.Provider
      value={{
        tasks,
        isLoading,
        error,
        addTask,
        editTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );

}














