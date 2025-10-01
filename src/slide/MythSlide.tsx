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
      title: "焦油坑",
      text: "軟體開發充滿隱藏複雜性，隨著專案規模增大，程式碼量、模組依賴與系統邏輯變得更加複雜。開發像是在泥濘中前進，每個小錯誤或不明確需求都可能讓專案陷得更深。越努力修正問題，越可能被新的錯誤拖住，就像掉進焦油坑，越掙扎越沉重。",
    },
    {
      title: "人月神話",
      text: "人 × 月 ≠ 專案完成時間，增加人力不會線性縮短開發時間，反而可能因溝通成本與培訓需求增加而延遲專案。軟體開發的進度不是簡單的人力加總，而是受到專案複雜性、依賴關係與關鍵路徑限制。",
    },
    {
      title: "沒有銀彈",
      text: "沒有單一方法可以徹底解決軟體開發中的所有問題。即使採用最新工具、流程或開發方法，也無法完全消除複雜性與需求變動帶來的挑戰。就像醫生沒有一顆藥能治好所有病，專案中的每個問題都需要不同策略來解決。",
    },
    {
      title: "外科手術團隊",
      text: "團隊像一個統一機制運作，核心成員負責關鍵方向，其他成員支援執行，任務分工明確但目標一致，維持專案的一體性和穩定進度。",
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
        py: { xs: 6, md: 4 },
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
