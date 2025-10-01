import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import './App.css';
import Presentation from './Presentation';

const theme = createTheme({
  typography: {
    h2: {
      fontWeight: "bold",
      fontSize: "2.25rem", // 手機 (xs)
      "@media (min-width:600px)": {
        fontSize: "3rem", // 平板 (sm)
      },
      "@media (min-width:900px)": {
        fontSize: "4rem", // 桌面 (md)
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
