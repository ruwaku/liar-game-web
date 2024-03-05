"use client";
import { styled } from "styled-components";

export default styled.a`
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.2rem;
  color: ${(p) => p.theme.palette.primary.foreground};
  word-break: keep-all;
  text-align: left;
  position: relative;
  cursor: default;
  box-sizing: border-box;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    filter: brightness(0.6);
  }
`;
