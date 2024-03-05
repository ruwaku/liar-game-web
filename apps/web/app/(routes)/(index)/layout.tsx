"use client";
import { styled } from "styled-components";
import SvgForSquigglyFilter from "./components/logo/SvgForSquigglyFilter";

const Main = styled.main`
  margin: 0 auto;
  padding: 2.5rem 0.5rem 0;
  max-width: ${(p) => p.theme.breakpoints.s}px;
`;

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Main>
      {children}
      <SvgForSquigglyFilter />
    </Main>
  );
}
