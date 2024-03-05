"use client";
import { styled } from "styled-components";
import TitleTypo from "./TitleTypo";

const Root = styled.div`
  margin-bottom: 1.5rem;
`;
const SubTitleTypo = styled(TitleTypo)`
  font-size: 1.1rem;
`;

export default function Logo(props: React.ComponentPropsWithoutRef<typeof Root>) {
  return (
    <Root {...props}>
      <TitleTypo>거짓말쟁이 게임</TitleTypo>
      <SubTitleTypo as="p">Liar Game</SubTitleTypo>
    </Root>
  );
}
