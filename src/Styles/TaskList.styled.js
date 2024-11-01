import styled from "@emotion/styled";
import {
  Typography as NSTypography,
  CardContent as NSCardContent,
  Container as NSContainer,
  Card as NSCard,
  Box as NSBox,
} from "@mui/material";

export const ListContainer = styled(NSContainer)(() => ({
  marginRight: "auto",
  marginLeft: "auto",
}));

export const ListTitle = styled(NSTypography)(() => ({
  fontSize: "48px",
}));

export const TaskStatusTitle = styled(NSTypography)(() => ({
  fontSize: "20px",
  fontWeight: 500,
  marginBottom: "15px",
}));

export const TaskCardTitle = styled(NSTypography)(() => ({
  fontSize: "16px",
}));

export const TaskCardDescription = styled(NSTypography)(() => ({
  fontSize: "14px",
}));

export const CardContentCustom = styled(NSCardContent)(() => ({
  display: "flex",
}));

export const CardCustom = styled(NSCard)(({ color }) => ({
  marginBottom: "15px",
  backgroundColor: color,
}));

export const AddBox = styled(NSBox)(() => ({
  borderRadius: "100px",
  width: "56px",
  height: "56px",
  backgroundColor: "rgba(33, 150, 243, 1)",
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    transition: "background-color 0.3s ease",
    color: "rgba(33, 150, 243, 1)",
  },
  cursor: "pointer",
}));
