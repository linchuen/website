import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";

// 打字機文字效果 + 進場偵測
const TypingText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // IntersectionObserver 監測進場/離場
  useEffect(() => {
    if (!ref.current) return;

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

    const current = ref.current;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  // 打字機效果
  useEffect(() => {
    if (!inView) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) clearInterval(interval);
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
      py: { xs: 6, md: 4 },
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

    <TypingText text="用自然語言與 AI 協作，像寫程式一樣把想法變成代碼" speed={50} />

    <Box
      sx={{
        backgroundColor: "#f4e1d2",
        color: "#3c2f2f",
        fontFamily: "monospace",
        fontSize: { xs: "0.6rem", md: "1rem" },
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
      {`// 產生 1~20 的隨機數字
let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

console.log("猜數字遊戲開始！範圍是 1~20。");
console.log("在 Console 輸入 guess(數字) 來猜。");

// 定義 guess 函式
function guess(number) {
  attempts++;

  if (number < 1 || number > 20) {
    console.log("請輸入 1 到 20 的數字！");
    return;
  }

  if (number < secretNumber) {
    console.log("太小了，再試一次！");
  } else if (number > secretNumber) {
    console.log("太大了，再試一次！");
  } else {
    console.log(\`恭喜你！答對了，數字就是 \${secretNumber}。\`);
    console.log(\`你總共猜了 \${attempts} 次。\`);
  }
}`}
    </Box>
  </Box>
);

export default VibeSlide;
