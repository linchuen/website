import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

const ProcessSlide: React.FC = () => (
  <Box
    id="process"
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 4,
    }}
  >
    <Typography variant="h2" fontWeight="bold" gutterBottom>
      網站架設流程
    </Typography>
    <List>
      <ListItem>
        <Typography variant="h5">需求分析與設計：確立網站目標與功能規格</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">前後端開發與測試：使用 React、Spring Boot 開發與測試</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">部署與維運：透過 GitHub Pages 或雲端平台自動部署</Typography>
      </ListItem>
    </List>
  </Box>
);

export default ProcessSlide;
