import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";

// 打字機文字效果 + 進場偵測
const TypingText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // IntersectionObserver 監測進場/離場
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
            setDisplayedText(""); // 離場時清空文字
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // 打字機效果
  useEffect(() => {
    if (!inView) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [inView, text, speed]);

  return (
    <Box ref={ref}>
      <Typography variant="h5" gutterBottom sx={{ maxWidth: 800, mb: 4 }}>
        {displayedText}
      </Typography>
    </Box>
  );
};

const VibeSlide: React.FC = () => (
  <Box
    id="vibe"
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ff8a65 0%, #ff7043 100%)",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 4,
      textAlign: "center",
    }}
  >
    <Typography
      variant="h2"
      fontWeight="bold"
      gutterBottom
      sx={{ textShadow: "1px 1px 3px rgba(0,0,0,0.2)" }}
    >
      Vibe Coding
    </Typography>

    {/* 打字機文字效果 */}
    <TypingText text="用自然語言與 AI 協作，像寫程式一樣把想法變成代碼" speed={50} />

    {/* Markdown 風格程式碼區塊 */}
    <Box
      sx={{
        backgroundColor: "#f4e1d2",
        color: "#3c2f2f",
        fontFamily: "monospace",
        fontSize: "1rem",
        borderRadius: 4,
        p: 3,
        maxWidth: 800,
        width: "100%",
        textAlign: "left",
        whiteSpace: "pre-wrap",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        borderLeft: "4px solid #d4a373",
      }}
    >
      {`// Vibe Coding 精髓示範
let idea = "建立一個聊天機器人";
ai.generateCode(idea);`}
    </Box>
  </Box>
);

export default VibeSlide;
