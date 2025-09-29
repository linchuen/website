import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

const MythSlide: React.FC = () => (
  <Box
    id="myth"
    sx={{
      minHeight: "100vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1526403221644-0e3f4d92c30c?auto=format&fit=crop&w=1650&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 4,
      position: "relative",
    }}
  >
    {/* 半透明遮罩 */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    />

    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        color: "#fff",
        textAlign: "center",
        maxWidth: 900,
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        人月神話
      </Typography>
      <List>
        <ListItem>
          <Typography variant="h5">人力增加 ≠ 工期減少：溝通成本大幅增加</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h5">系統複雜度隨規模成倍增加</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h5">提早規劃架構、保持小團隊敏捷更有效率</Typography>
        </ListItem>
      </List>
    </Box>
  </Box>
);

export default MythSlide;
