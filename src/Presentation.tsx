import React from "react";
import { AppBar, Toolbar, Link, CssBaseline, Fab, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HomeSlide from "./slide/HomeSlide";
import IntroSlide from "./slide/IntroSlide";
import MythSlide from "./slide/MythSlide";
import ProcessSlide from "./slide/ProcessSlide";
import TypesSlide from "./slide/TypesSlide";
import VibeSlide from "./slide/VibeSlide";
import GithubSlide from "./slide/GithubSlide";
import QAQSlide from "./slide/QAQSlide";

const Presentation: React.FC = () => {
    const sections = [
        { id: "home", title: "首頁" },
        { id: "intro", title: "自我介紹" },
        { id: "types", title: "工程師分類" },
        { id: "process", title: "網站架設流程" },
        { id: "myth", title: "人月神話" },
        { id: "vibe", title: "Vibe Coding" },
        { id: "github", title: "GitHub Page" },
        { id: "qa", title: "Q&A" },
    ];

    // 滾動到指定 section
    function scrollToSection(id: string) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    // 取得目前所在的 section index
    function getCurrentSectionIndex() {
        const offsets = sections.map((s) => {
            const el = document.getElementById(s.id);
            return el ? Math.abs(el.getBoundingClientRect().top) : Infinity;
        });
        return offsets.indexOf(Math.min(...offsets));
    }

    function handlePrev() {
        const idx = getCurrentSectionIndex();
        if (idx > 0) scrollToSection(sections[idx - 1].id);
    }

    function handleNext() {
        const idx = getCurrentSectionIndex();
        if (idx < sections.length - 1) scrollToSection(sections[idx + 1].id);
    }

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
                sx={{
                    backgroundColor: "#ffffffcc",
                    opacity: 0,                          // 預設隱藏
                    transition: "opacity 0.3s ease",     // 平滑過渡
                    "&:hover": {
                        opacity: 1,                        // 滑鼠移入顯示
                    },
                }}
            >
                <Toolbar sx={{ justifyContent: "center", gap: 3 }}>
                    {sections.map((s) => (
                        <Link
                            key={s.id}
                            href={`#${s.id}`}
                            underline="none"
                            color="inherit"
                            sx={{ fontWeight: "bold", "&:hover": { color: "#1976d2" } }}
                        >
                            {s.title}
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>

            {/* 投影片依序渲染，請確保每個 Slide 最外層都有對應 id */}
            <HomeSlide />
            <IntroSlide />
            <TypesSlide />
            <ProcessSlide />
            <MythSlide />
            <VibeSlide />
            <GithubSlide />
            <QAQSlide />

            {/* 右下角上下浮動按鈕 */}
            <Box
                sx={{
                    position: "fixed",
                    bottom: 24,
                    right: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    zIndex: 1300,
                }}
            >
                <Fab color="primary" size="small" onClick={handlePrev}>
                    <ArrowUpwardIcon />
                </Fab>
                <Fab color="primary" size="small" onClick={handleNext}>
                    <ArrowDownwardIcon />
                </Fab>
            </Box>
        </>
    );
};

export default Presentation;
