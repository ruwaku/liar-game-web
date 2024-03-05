"use client";

import { ThemeProvider as _ThemeProvider } from "styled-components";

const theme = {
  breakpoints: {
    xs: 480,
    s: 768,
    m: 1280,
  },
  palette: {
    primary: {
      foreground: "#f3ede3",
      background: "#5d5353",
    },
  },
  sizes: {
    borderRadius: 12,
  },
  fonts: {
    sans: "Pretendard, sans-serif",
    handwriting: "KCC-DodamdodamR",
  },
} as const;

export type TTheme = typeof theme;

export default function ThemeProvider({
  children,
  ...props
}: Omit<React.ComponentProps<typeof _ThemeProvider>, "theme">) {
  return (
    <_ThemeProvider {...props} theme={theme}>
      {children}
    </_ThemeProvider>
  );
}
