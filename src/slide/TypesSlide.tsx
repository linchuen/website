import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Slide } from "@mui/material";

const TypesSlide: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [firstChecked, setFirstChecked] = useState(false);
    const [secondChecked, setSecondChecked] = useState(false);
    const [thirdChecked, setThirdChecked] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    // 依序延遲進場
                    const t1 = setTimeout(() => setFirstChecked(true), 0);
                    const t2 = setTimeout(() => setSecondChecked(true), 600);
                    const t3 = setTimeout(() => setThirdChecked(true), 1200);

                    return () => {
                        clearTimeout(t1);
                        clearTimeout(t2);
                        clearTimeout(t3);
                    };
                } else {
                    // 區塊離開視口，全部設回 false
                    setFirstChecked(false);
                    setSecondChecked(false);
                    setThirdChecked(false);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <Box
            id="types"
            ref={containerRef}
            sx={{
                minHeight: "100vh",
                backgroundColor: "#1e1e1e",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: 4,
            }}
        >
            <Typography variant="h2" fontWeight="bold" gutterBottom>
                軟體工程師分類
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {/* 第一張卡片 */}
                <Grid item xs={12} md={4}>
                    <Slide direction="left" in={firstChecked} timeout={800} mountOnEnter unmountOnExit>
                        <Card sx={{ backgroundColor: "#2e2e2e", color: "#fff", borderRadius: 4, boxShadow: 6, p: 3 }}>
                            <CardContent>
                                <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                                    前端工程師
                                </Typography>
                                <Typography variant="h6" align="center">
                                    負責 UI/UX、React、Vue 等前端框架與互動體驗。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>

                {/* 第二張卡片 */}
                <Grid item xs={12} md={4}>
                    <Slide direction="left" in={secondChecked} timeout={800} mountOnEnter unmountOnExit>
                        <Card sx={{ backgroundColor: "#2e2e2e", color: "#fff", borderRadius: 4, boxShadow: 6, p: 3 }}>
                            <CardContent>
                                <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                                    後端工程師
                                </Typography>
                                <Typography variant="h6" align="center">
                                    專注 API 設計、資料庫、分散式系統與效能優化。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>

                {/* 第三張卡片 */}
                <Grid item xs={12} md={4}>
                    <Slide direction="left" in={thirdChecked} timeout={800} mountOnEnter unmountOnExit>
                        <Card sx={{ backgroundColor: "#2e2e2e", color: "#fff", borderRadius: 4, boxShadow: 6, p: 3 }}>
                            <CardContent>
                                <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                                    DevOps / 全端
                                </Typography>
                                <Typography variant="h6" align="center">
                                    整合 CI/CD 與雲端部署，橫跨前後端的多面手。
                                </Typography>
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TypesSlide;
