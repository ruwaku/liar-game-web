"use client";
import { styled } from "styled-components";

const Divider = styled.div`
  display: block;
  background: currentColor;
  opacity: 0.24;
  --divider-radius: 2px;
  width: calc(var(--divider-radius) * 2);
  height: calc(var(--divider-radius) * 2);
  border-radius: var(--divider-radius);
`;

export default Divider;
