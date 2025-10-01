import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, List, ListItem, Grid, Slide, Link } from "@mui/material";

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
                py: { xs: 6, md: 4 },
            }}
        >
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                {/* 左邊圖片 */}
                <Grid item xs={12} md={5}>
                    {checked && (<Slide direction="up" in={checked} timeout={1200}>
                        <Box sx={{ position: "relative", width: "100%", maxWidth: 400, mx: "auto" }}>
                            <Box
                                component="img"
                                src={process.env.PUBLIC_URL + "/me.png"}
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
                                    src={process.env.PUBLIC_URL + "/icon-192.png"}
                                    alt="Profile 2"
                                    sx={{
                                        width: "70%",
                                        // borderRadius: 4,
                                        // boxShadow: 6,
                                        position: "absolute",
                                        bottom: -90,
                                        right: -90,
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
                                        軟體工程師，資管系畢業
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h5">
                                        曾在台北市政府擔任公務員
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h5">
                                        走訪各個讀書會，打造讀書會網站
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h5">
                                        <Link
                                            href="https://cooba2025.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            underline="hover"
                                        >
                                            https://cooba2025.com/
                                        </Link>
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
