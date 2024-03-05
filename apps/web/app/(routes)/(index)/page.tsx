"use client";
import Link from "@/components/ui/link";
import NextLink from "next/link";
import { styled } from "styled-components";
import Divider from "./components/Divider";
import GameSelectButton from "./components/GameSelectButton";
import { LocalPlayIcon, MultiPlayIcon } from "@/components/ui/icon";
import Logo from "./components/logo";
import IconWrapper from "@/components/ui/icon/SvgWithIconWrapper";

const Root = styled.div`
  height: calc(100dvh - 2.5rem);
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  flex: 1 auto;
  display: flex;
  width: 100%;
  justify-items: center;
  align-items: center;
`;
const InteractiveSection = styled.div`
  flex: 0 auto;
  padding-bottom: 2.5rem;
`;
const GameSelectBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.4rem;
  & > * {
    flex: 1 1 300px;
  }
  & ${IconWrapper} {
    vertical-align: -4px;
    margin-right: 7px;
  }
`;
const Footer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 1rem;
  overflow: hidden;
`;

export default function IndexPage() {
  const playOnline = () => {};
  const playOffline = () => {};
  return (
    <Root>
      <Header>
        <Logo style={{ width: "100%" }} />
      </Header>
      <InteractiveSection>
        <GameSelectBox>
          <GameSelectButton desc="각자의 기기로 온라인에서 만나기" onClick={playOnline}>
            <MultiPlayIcon />
            온라인 플레이
          </GameSelectButton>
          <GameSelectButton desc="하나의 기기로 주변 사람들과 플레이" onClick={playOffline}>
            <LocalPlayIcon />
            로컬 플레이
          </GameSelectButton>
        </GameSelectBox>
        <Footer>
          <Link as={NextLink} href="/how-to-play">
            플레이 방법
          </Link>
          <Divider />
          <Link>Github</Link>
          <Divider />
          <Link>홈 화면에 추가</Link>
        </Footer>
      </InteractiveSection>
    </Root>
  );
}
