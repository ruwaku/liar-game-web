"use client";
import { styled } from "styled-components";

const Button = styled.button`
  --bg-base: ${(p) => p.theme.palette.primary.foreground};
  --outline-color: color-mix(in srgb, var(--bg-base), black 14%);
  background: color-mix(in srgb, var(--bg-base), black 5%);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.4rem 0.7rem;
  color: ${(p) => p.theme.palette.primary.background};
  border-radius: ${(p) => p.theme.sizes.borderRadius}px;
  word-break: keep-all;
  text-align: left;
  position: relative;
  cursor: default;
  box-sizing: border-box;
  box-shadow: inset 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  /* border: 3px solid transparent; */
  &:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    border-color: var(--outline-color);
  }
  &:not(:disabled):active {
    filter: brightness(0.9);
  }
`;

export default Button;
