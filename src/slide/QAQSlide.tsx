import React from "react";
import { Box, Typography } from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { QRCodeCanvas } from "qrcode.react";

const QAQSlide: React.FC = () => (
  <Box
    id="qa"
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ff99cc 0%, #ffb6d9 100%)",
      color: "#222222",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 4,
      py: { xs: 6, md: 4 },
      textAlign: "center",
    }}
  >
    <HelpOutline sx={{ fontSize: 80, mb: 2, color: "#d81b60" }} />

    <Typography variant="h2" fontWeight="bold" gutterBottom>
      Q&A
    </Typography>

    <Typography variant="h5" sx={{ mt: 2, mb: 4, maxWidth: 600 }}>
      有任何問題想詢問？
    </Typography>

    {/* QRCode 外框美化 */}
    <Box
      sx={{
        p: 2,
        borderRadius: 4,
        background: "white",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        display: "inline-block",
      }}
    >
      <QRCodeCanvas
        value="https://www.surveycake.com/s/AGmLO"
        size={200}
        bgColor="#ffffff"
        fgColor="#d81b60" // QRCode 顏色與圖示顏色呼應
        level="H"
      />
    </Box>

    <Typography variant="h6" sx={{ mt: 6, color: "#555555" }}>
      謝謝參與！
    </Typography>
  </Box>
);

export default QAQSlide;
