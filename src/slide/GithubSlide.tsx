import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const GithubSlide: React.FC = () => (
  <Box
    id="github"
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0d1117 0%, #161b22 100%)",
      color: "#c9d1d9",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 4,
    }}
  >
    <GitHub sx={{ fontSize: 80, mb: 2, color: "#f0f6fc" }} />

    <Typography variant="h2" fontWeight="bold" gutterBottom>
      GitHub Page
    </Typography>

    <List sx={{ maxWidth: 800 }}>
      <ListItem>
        <Typography variant="h5">
          使用 GitHub Actions 自動部署 React 專案
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">支援自訂網域與 HTTPS 安全連線</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5">免費、穩定、維護方便</Typography>
      </ListItem>
    </List>

    <Typography variant="h6" sx={{ mt: 6, color: "#8b949e" }}>
      開源精神：分享、合作、持續改進
    </Typography>
  </Box>
);

export default GithubSlide;
