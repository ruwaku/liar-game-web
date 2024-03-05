"use client";
import { keyframes, styled } from "styled-components";

const squigglyKeyframes = keyframes`
  0%,
  100% {
    filter: url("#squiggly-0");
  }
  20% {
    filter: url("#squiggly-1");
  }
  40% {
    filter: url("#squiggly-2");
  }
  60% {
    filter: url("#squiggly-3");
  }
  80% {
    filter: url("#squiggly-4");
  }
`;

const TitleTypo = styled.h1`
  font-family: ${(p) => p.theme.fonts.handwriting};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  word-break: keep-all;
  animation: ${squigglyKeyframes} 2.5s infinite;
`;

export default TitleTypo;
