"use client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createCustomTheme } from "./Theme/theme";

const Page = () => {
  const theme = createCustomTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
};

export default Page;
