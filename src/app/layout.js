//client-side
import { Inter } from "next/font/google";
import "./globals.css";
import theme from "./Theme/theme";
import { ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hustlers",
  description: "Hustlers E-commerce Site",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
