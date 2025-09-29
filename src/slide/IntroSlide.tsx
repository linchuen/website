import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

const IntroSlide: React.FC = () => (
  <Box
    id="intro"
    sx={{
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 4,
    }}
  >
    <Typography variant="h2" fontWeight="bold" gutterBottom>
      自我介紹
    </Typography>
    <List>
      <ListItem><Typography variant="h5">軟體工程師，熟悉 React / Spring Boot / Kafka</Typography></ListItem>
      <ListItem><Typography variant="h5">熱愛新技術與開源</Typography></ListItem>
      <ListItem><Typography variant="h5">持續學習分散式系統與 PWA 開發</Typography></ListItem>
    </List>
  </Box>
);

export default IntroSlide;
