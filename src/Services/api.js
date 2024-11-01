import axios from "axios";

export const getTasks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/tasks");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
export const updateTask = async (task) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/tasks/${task.id}`,
      task
    );
    return response.data;
  } catch (error) {
    console.error("Error actualizando la tarea:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching Categories:", error);
    throw error;
  }
};
