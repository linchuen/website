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

    // 控制點擊展開
    const [showFirstDetail, setShowFirstDetail] = useState(false);
    const [showSecondDetail, setShowSecondDetail] = useState(false);
    const [showThirdDetail, setShowThirdDetail] = useState(false);

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
                                height: 600,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            onClick={() => setShowFirstDetail((prev) => !prev)}
                        >
                            <CardContent sx={{ width: "100%" }}>
                                {showFirstDetail && (
                                    <>
                                        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                                            前端工程師
                                        </Typography>
                                        <Typography variant="h6" align="center" paragraph>
                                            專注於設計和打造使用者看到的介面，讓操作更直覺、外觀更美觀。
                                        </Typography>
                                        <List dense>
                                            <ListItem>🎨 設計網站或應用程式的外觀</ListItem>
                                            <ListItem>📱 讓操作流程更簡單好懂</ListItem>
                                            <ListItem>🖼️ 負責排版與視覺呈現</ListItem>
                                            <ListItem>⚡ 提升使用上的流暢度</ListItem>
                                            <ListItem>🤝 與設計師、後端人員合作</ListItem>
                                        </List>
                                    </>
                                )}
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
                                height: 600,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            onClick={() => setShowSecondDetail((prev) => !prev)}
                        >
                            <CardContent sx={{ width: "100%" }}>
                                {showSecondDetail && (
                                    <>
                                        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                                            後端工程師
                                        </Typography>
                                        <Typography variant="h6" align="center" paragraph>
                                            負責處理幕後邏輯，確保資料正確、安全，並讓系統能穩定運作。
                                        </Typography>
                                        <List dense>
                                            <ListItem>🛠️ 設計與規劃系統架構</ListItem>
                                            <ListItem>📂 管理與儲存使用者資料</ListItem>
                                            <ListItem>🔌 提供前端能使用的資料服務</ListItem>
                                            <ListItem>⚡ 提升系統速度與效能</ListItem>
                                            <ListItem>🔐 保護資料安全與隱私</ListItem>
                                        </List>
                                    </>
                                )}
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
                                height: 600,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            onClick={() => setShowThirdDetail((prev) => !prev)}
                        >
                            <CardContent sx={{ width: "100%" }}>
                                {showThirdDetail && (
                                    <>
                                        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                                            DevOps / 全端
                                        </Typography>
                                        <Typography variant="h6" align="center" paragraph>
                                            橫跨前端與後端，同時關注系統維護、更新，確保服務穩定且能快速推出新功能。
                                        </Typography>
                                        <List dense>
                                            <ListItem>☁️ 管理伺服器與環境設定</ListItem>
                                            <ListItem>🔄 自動化更新與版本發布</ListItem>
                                            <ListItem>📊 監控系統狀態並排除問題</ListItem>
                                            <ListItem>💻 處理日常系統維護與更新</ListItem>
                                            <ListItem>⚡ 確保系統穩定與快速反應</ListItem>
                                        </List>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TypesSlide;
