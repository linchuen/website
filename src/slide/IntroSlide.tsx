import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, List, ListItem, Grid, Slide } from "@mui/material";

const IntroSlide: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setChecked(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Box
            id="intro"
            ref={ref}
            sx={{
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: 4,
            }}
        >
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                {/* 左邊圖片 */}
                <Grid item xs={12} md={5}>
                    {checked && (<Slide direction="up" in={checked} timeout={1200}>
                        <Box sx={{ position: "relative", width: "100%", maxWidth: 400, mx: "auto" }}>
                            <Box
                                component="img"
                                src="https://picsum.photos/500/500?random=1"
                                alt="Profile 1"
                                sx={{
                                    width: "100%",
                                    borderRadius: 4,
                                    boxShadow: 3,
                                    display: "block",
                                }}
                            />
                            <Slide direction="up" in={checked} timeout={1200}>
                                <Box
                                    component="img"
                                    src="https://picsum.photos/500/500?random=2"
                                    alt="Profile 2"
                                    sx={{
                                        width: "70%",
                                        borderRadius: 4,
                                        boxShadow: 6,
                                        position: "absolute",
                                        bottom: -70,
                                        right: -70,
                                    }}
                                />
                            </Slide>
                        </Box>
                    </Slide>
                    )}
                </Grid>

                {/* 右邊文字 */}
                <Grid item xs={12} md={6}>
                    <Slide direction="left" in={checked} timeout={500}>
                        <Box>
                            <Typography variant="h2" fontWeight="bold" gutterBottom>
                                自我介紹
                            </Typography>
                            <List>
                                <ListItem>
                                    <Typography variant="h5">
                                        軟體工程師，熟悉 React / Spring Boot / Kafka
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h5">熱愛新技術與開源</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h5">
                                        持續學習分散式系統與 PWA 開發
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                    </Slide>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntroSlide;
