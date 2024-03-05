import StyledComponentsRegistry from "@/components/lib/styled-components/registry";
import type { Metadata } from "next";
import GlobalStyle from "@/components/lib/styled-components/globalStyle";
import ThemeProvider from "@/components/lib/styled-components/themeProvider";

export const metadata: Metadata = {
  title: "거짓말쟁이 게임",
  description: "거짓말쟁이 게임(라이어 게임)을 온라인에서 즐기세요",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
