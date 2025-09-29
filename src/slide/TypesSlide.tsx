import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

const TypesSlide: React.FC = () => (
  <Box
    id="types"
    sx={{
      minHeight: "100vh",
      backgroundColor: "#1e1e1e",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 4,
    }}
  >
    <Typography variant="h2" fontWeight="bold" gutterBottom>
      軟體工程師分類
    </Typography>
    <List>
      <ListItem><Typography variant="h5">前端：負責 UI/UX、React、Vue</Typography></ListItem>
      <ListItem><Typography variant="h5">後端：API設計、資料庫、分散式系統</Typography></ListItem>
      <ListItem><Typography variant="h5">DevOps/全端：整合 CI/CD 與雲端部署</Typography></ListItem>
    </List>
  </Box>
);

export default TypesSlide;
