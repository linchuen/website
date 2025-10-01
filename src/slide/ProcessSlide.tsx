import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const steps = [
  {
    title: "規劃",
    desc: "先確認網站要達成的目標、主要功能和使用者需求，並安排好專案的時間與資源。",
  },
  {
    title: "設計",
    desc: "把網站的版面、色彩、文字和操作流程規劃好，讓使用者看起來清楚、操作順暢。",
  },
  {
    title: "開發",
    desc: "由工程師把設計變成真正可以使用的網站，包括前端畫面和後端運作。",
  },
  {
    title: "測試",
    desc: "確認網站的功能正常、速度快、在不同裝置和瀏覽器上都能順利使用，並收集使用者回饋做調整。",
  },
  {
    title: "部屬",
    desc: "把網站正式上線，讓大家可以訪問，同時設定維護和安全措施，確保網站穩定運作。",
  },
];

const ProcessSlide: React.FC = () => {
  return (
    <Box
      id="process"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 4,
        py: { xs: 6, md: 4 },
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        網站架設流程
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          mt: 6,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
            >
              <Box
                sx={{
                  width: { xs: 75, md: 150 },
                  height: { xs: 75, md: 150 },
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  border: "4px solid #fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                  position: "relative",
                  cursor: "pointer",
                  "&:hover .tooltip": {
                    opacity: 1,
                    visibility: "visible",
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {step.title}
                </Typography>

                {/* Tooltip */}
                <Box
                  className="tooltip"
                  sx={{
                    position: "absolute",
                    bottom: "110%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(0)",
                    bgcolor: "rgba(156, 39, 176, 0.85)", // 半透明紫色
                    color: "#fff",
                    p: 2,
                    borderRadius: 2,
                    width: { xs: 150, md: 250 },
                    textAlign: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    opacity: 0,
                    visibility: "hidden",
                    transition: "all 0.3s ease",
                    zIndex: 10,
                  }}
                >
                  {step.desc}
                </Box>
              </Box>
            </motion.div>

            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.4 + 0.2 }}
              >
                <ArrowForwardIcon sx={{ fontSize: 50 }} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default ProcessSlide;
