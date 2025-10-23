import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import './App.css';
import Presentation from './Presentation';

let theme = createTheme(); // 先建立基礎主題
theme = createTheme(theme, {
  typography: {
    h2: {
      fontWeight: "bold",
      fontSize: "2.25rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "4rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "5.5rem",
      },
    },
    h4: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "3.5rem",
      },
    },
    h5: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "3rem",
      },
    },
    h6: {
      [theme.breakpoints.up("xl")]: {
        fontSize: "2rem",
      },
    },
    body1: {
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.5rem",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Presentation />
    </ThemeProvider>

  );
}

export default App;
