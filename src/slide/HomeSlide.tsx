import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";

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
      py: { xs: 6, md: 4 },
      textAlign: "center",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     <Typography variant="h2" gutterBottom>
        我獨自闖關的網站架設
      </Typography>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <Typography
        variant="h6"
        sx={{
          maxWidth: 700,
          mb: 6,
          textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
        }}
      >
        內容涵蓋軟體工程師分類、網站架設流程、如何在 GitHub 設置個人網頁。
      </Typography>
    </motion.div>

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          borderRadius: "24px",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <QRCodeCanvas value="https://linchuen.github.io/website/" size={350} />
        <Typography
          variant="body1"
          sx={{ mt: 2, color: "#333", wordBreak: "break-word" }}
        >
          https://linchuen.github.io/website/
        </Typography>
      </Paper>
    </motion.div>
  </Box>
);

export default HomeSlide;

