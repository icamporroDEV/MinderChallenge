import { Box, Card, CardContent, Checkbox } from "@mui/material";
import React, { useEffect } from "react"; // Importa useEffect
import {
  TaskCardDescription,
  TaskCardTitle,
  CardContentCustom,
  CardCustom,
} from "../Styles/TaskList.styled";

const TaskCard = ({
  title,
  category,
  description,
  completed,
  onCompleteChange,
  color,
}) => {
  const [checked, setChecked] = React.useState(completed);

  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onCompleteChange(isChecked);
  };

  return (
    <CardCustom color={color}>
      <CardContentCustom>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Box>
          <TaskCardTitle>{category + ": " + title}</TaskCardTitle>
          <TaskCardDescription>{description}</TaskCardDescription>
        </Box>
      </CardContentCustom>
    </CardCustom>
  );
};

export default TaskCard;
