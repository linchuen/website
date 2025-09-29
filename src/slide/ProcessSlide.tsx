import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const steps = ["規劃", "設計", "開發", "測試", "部屬"];

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
          <React.Fragment key={step}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} // 當 20% 元素進入畫面時觸發
              transition={{ duration: 0.8, delay: index * 0.4 }}
            >
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  border: "4px solid #fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {step}
                </Typography>
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
