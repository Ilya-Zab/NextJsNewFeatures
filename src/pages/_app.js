import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from "@/components/Header";
import { useState } from "react";


const basePallette = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  ...basePallette
});

const lightTheme = createTheme({ ...basePallette });

export default function App({ Component, pageProps }) {
  const [currentTheme, setTheme] = useState(darkTheme);

  const onThemeChange = (isDarkSet) => {
    setTheme(isDarkSet ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Header onThemeChange={onThemeChange} isDarkSet />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
