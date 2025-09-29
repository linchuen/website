import React from "react";
import { Box, Typography } from "@mui/material";

const HomeSlide: React.FC = () => (
  <Box
    id="home"
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1976d2 30%, #42a5f5 90%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 4,
    }}
  >
    <Typography variant="h1" fontWeight="bold" gutterBottom>
      網站架設簡報
    </Typography>
    <Typography variant="h5" sx={{ maxWidth: 700, textAlign: "center" }}>
      使用 React + MUI 製作的單頁簡報網站。
      內容涵蓋自我介紹、工程師分類、網站架設流程、人月神話、Vibe Coding、GitHub Page。
    </Typography>
  </Box>
);

export default HomeSlide;
