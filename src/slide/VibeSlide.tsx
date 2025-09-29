import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

const VibeSlide: React.FC = () => (
  <Box
    id="vibe"
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ff8a65 0%, #ff7043 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center", // 全部置中
      px: 4,
      textAlign: "center", // 文字置中
    }}
  >
    <Typography
      variant="h2"
      fontWeight="bold"
      gutterBottom
      sx={{
        textShadow: "2px 2px 6px rgba(0,0,0,0.3)", // 增加標題立體感
      }}
    >
      Vibe Coding
    </Typography>

    <Typography
      variant="h5"
      gutterBottom
      sx={{ maxWidth: 800, mb: 4 }}
    >
      享受程式的節奏與氛圍，進入專注的心流狀態
    </Typography>

    <List sx={{ maxWidth: 800 }}>
      <ListItem>
        <Typography variant="h5">
          🎧 專注的音樂與舒適環境能顯著提升開發效率
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">
          🎨 程式如同藝術創作，需要沉浸與靈感
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">
          ⚡ 保持心流 (Flow) 讓產出更順暢且品質更高
        </Typography>
      </ListItem>
    </List>
  </Box>
);

export default VibeSlide;
