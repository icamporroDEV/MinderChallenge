import React, { useState, useEffect } from "react";
import { Button, Container, Tooltip, Fab, Box } from "@mui/material";
import { ListTitle, TaskStatusTitle } from "../Styles/TaskList.styled";
import TaskCard from "../Components/TaskCard";
import { useTasks } from "../CustomHooks/useTasks";
import useUpdateTaskStatus from "../CustomHooks/useUpdateTaskStatus";
import { useCategories } from "../CustomHooks/useCategories";
import { Add } from "@mui/icons-material";
import AddTaskModal from "../Components/AddTaskModal"; // Importar el modal

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const { tasks: initialTasks, loading, error } = useTasks();
  const { handleCompleteChange } = useUpdateTaskStatus(tasks, setTasks);
  const { categories } = useCategories();

  useEffect(() => {
    if (initialTasks) {
      setTasks(initialTasks);
    }
  }, [initialTasks]);

  const tasksWithCategories = tasks.map((task) => {
    const category = categories.find((cat) => cat.id === task.category_id);
    return {
      ...task,
      categoryName: category ? category.name : "Sin categoría",
      categoryColor: category ? category.color : null,
    };
  });

  const renderTaskCards = (taskList) => {
    return taskList.map((task) => (
      <TaskCard
        key={task.id}
        title={task.title}
        category={task.categoryName}
        color={task.categoryColor}
        description={task.description}
        completed={task.completed}
        onCompleteChange={(isCompleted) =>
          handleCompleteChange(task.id, isCompleted)
        }
      />
    ));
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar las tareas: {error.message}</div>;

  const pendingTasks = tasksWithCategories.filter((task) => !task.completed);
  const completedTasks = tasksWithCategories.filter((task) => task.completed);

  return (
    <Container
      sx={{ position: "relative", paddingBottom: "80px", height: "100%" }}
    >
      <ListTitle>Lista de tareas</ListTitle>
      {pendingTasks.length > 0 && (
        <>
          <TaskStatusTitle>Pendientes</TaskStatusTitle>
          {renderTaskCards(pendingTasks)}
        </>
      )}
      {completedTasks.length > 0 && (
        <>
          <TaskStatusTitle>Terminadas</TaskStatusTitle>
          {renderTaskCards(completedTasks)}
        </>
      )}
      <Box sx={{ position: "absolute", bottom: 16, right: 16 }}>
        <Tooltip title="Crear una nueva tarea" placement="left" arrow>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => setIsModalOpen(true)}
          >
            <Add sx={{ color: "white" }} />
          </Fab>
        </Tooltip>
      </Box>
      {/* Renderizar el modal */}
      <AddTaskModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  );
};

export default TaskList;
