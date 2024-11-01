import { useState } from "react";
import { updateTask } from "../Services/api";

const useUpdateTaskStatus = (tasks, setTasks) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateTaskStatus = async (task) => {
    setLoading(true);
    setError(null);

    try {
      const updatedTask = await updateTask(task);
      return updatedTask;
    } catch (error) {
      setError(error.message);
      console.error("Error al actualizar la tarea:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteChange = async (taskId, isCompleted) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    try {
      const updatedTask = await updateTaskStatus({
        ...taskToUpdate,
        completed: isCompleted,
      });
      updateTaskWithApiResponse(updatedTask);
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };
  // Actualiza la tarea local con la información de la API
  const updateTaskWithApiResponse = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return { handleCompleteChange, loading, error };
};

export default useUpdateTaskStatus;
