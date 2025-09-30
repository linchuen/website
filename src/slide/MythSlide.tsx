import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid, Paper, Slide } from "@mui/material";

const MythSlide: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setChecked(entry.isIntersecting); // 進入就 true，離開就 false
      },
      { threshold: 0.2 } // 20% 可見就觸發
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      title: "瀝青坑 (The Tar Pit)",
      text: "軟體開發充滿隱藏複雜性，專案規模無論大小，都容易陷入困難。",
    },
    {
      title: "人月神話 (The Mythical Man-Month)",
      text: "增加人力不等於縮短工期，布魯克斯法則指出：延遲專案加人反而更慢。",
    },
    {
      title: "沒有銀彈 (No Silver Bullet)",
      text: "沒有單一方法能解決軟體開發難題，複雜性與需求變動無法被完全消除。",
    },
    {
      title: "外科手術團隊 (The Surgical Team)",
      text: "主程式設計師 + 支援團隊模式，清楚分工、責任集中，提升效率與品質。",
    },
  ];

  return (
    <Box
      id="myth"
      ref={ref}
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526403221644-0e3f4d92c30c?auto=format&fit=crop&w=1650&q=80')",
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

      {/* 內容 */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
          maxWidth: 1200,
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          人月神話
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {items.map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Slide direction="left" in={checked} timeout={1000}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    height: "100%",
                    backgroundColor: "rgba(255,255,255,0.1)", // 半透明白
                    color: "#fff", // 白字
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography>{item.text}</Typography>
                </Paper>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MythSlide;
