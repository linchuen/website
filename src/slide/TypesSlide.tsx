import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Slide,
    List,
    ListItem
} from "@mui/material";

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
                    const t1 = setTimeout(() => setFirstChecked(true), 0);
                    const t2 = setTimeout(() => setSecondChecked(true), 600);
                    const t3 = setTimeout(() => setThirdChecked(true), 1200);

                    return () => {
                        clearTimeout(t1);
                        clearTimeout(t2);
                        clearTimeout(t3);
                    };
                } else {
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
                py: { xs: 6, md: 4 },
            }}
        >
            <Typography variant="h2" fontWeight="bold" gutterBottom>
                軟體工程師分類
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {/* 前端工程師 */}
                <Grid item xs={12} md={4}>
                    <Slide direction="left" in={firstChecked} timeout={800} mountOnEnter unmountOnExit>
                        <Card
                            sx={{
                                backgroundColor: "#2e2e2e",
                                color: "#fff",
                                borderRadius: 4,
                                boxShadow: 6,
                                p: 3,
                                cursor: "pointer",
                                height: 700,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}

                        >
                            <CardContent sx={{ width: "100%" }}>
                                <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                                    前端工程師
                                </Typography>
                                <Typography variant="h6" align="center" paragraph>
                                    專注於設計和打造使用者看到的介面，讓操作更直覺、外觀更美觀。
                                </Typography>
                                <Box
                                    component="img"
                                    src={process.env.PUBLIC_URL + "/frontend.png" }
                                    alt="前端工程師示意圖"
                                    sx={{
                                        display: "block",
                                        mx: "auto",
                                        width: "80%", // 可調整大小
                                        maxWidth: 400,
                                        borderRadius: 3,
                                        boxShadow: 3,
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>

                {/* 後端工程師 */}
                <Grid item xs={12} md={4}>
                    <Slide direction="left" in={secondChecked} timeout={800} mountOnEnter unmountOnExit>
                        <Card
                            sx={{
                                backgroundColor: "#2e2e2e",
                                color: "#fff",
                                borderRadius: 4,
                                boxShadow: 6,
                                p: 3,
                                cursor: "pointer",
                                height: 700,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}

                        >
                            <CardContent sx={{ width: "100%" }}>

                                <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                                    後端工程師
                                </Typography>
                                <Typography variant="h6" align="center" paragraph>
                                    負責處理幕後邏輯，確保資料正確、安全，並讓系統能穩定運作。
                                </Typography>
                                <Box
                                    component="img"
                                    src={process.env.PUBLIC_URL + "/backend.png" }
                                    alt="前端工程師示意圖"
                                    sx={{
                                        display: "block",
                                        mx: "auto",
                                        width: "80%", // 可調整大小
                                        maxWidth: 400,
                                        borderRadius: 3,
                                        boxShadow: 3,
                                    }}
                                />

                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>

                {/* DevOps / 全端 */}
                <Grid item xs={12} md={4}>
                    <Slide direction="left" in={thirdChecked} timeout={800} mountOnEnter unmountOnExit>
                        <Card
                            sx={{
                                backgroundColor: "#2e2e2e",
                                color: "#fff",
                                borderRadius: 4,
                                boxShadow: 6,
                                p: 3,
                                cursor: "pointer",
                                height: 700,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <CardContent sx={{ width: "100%" }}>
                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                    gutterBottom
                                    align="center"
                                >
                                    DevOps
                                </Typography>
                                <Typography variant="h6" align="center" paragraph>
                                    專注於系統維護、自動化與穩定部署，確保服務穩定且能快速推出新功能。
                                </Typography>
                                <Box
                                    component="img"
                                    src={process.env.PUBLIC_URL + "/devops.png" }
                                    alt="前端工程師示意圖"
                                    sx={{
                                        display: "block",
                                        mx: "auto",
                                        width: "80%", // 可調整大小
                                        maxWidth: 400,
                                        borderRadius: 3,
                                        boxShadow: 3,
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TypesSlide;
