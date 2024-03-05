"use client";
import HomeIcon from "@/components/ui/icon/HomeIcon";
import NavigationTopIcon from "@/components/ui/icon/NavigationTopIcon";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const Root = styled.div`
  position: fixed;
  z-index: 99;
  bottom: 1rem;
  right: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Divider = styled.div`
  background: ${(p) => p.theme.palette.primary.foreground};
  height: 3rem;
  width: 3rem;
  transform: scaleY(0.7) translateX(1.15rem);
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 172 344' overflow='hidden'%3E%3Cg transform='translate(-145 -346)'%3E%3Cpath d='M317 346.001 317 690 315.818 690 315.25 683.005C307.218 634.263 272.489 597.596 230.865 597.596 189.24 597.596 154.511 634.263 146.479 683.005L145.911 690 145 690 145 349.337 146.479 367.558C154.511 416.301 189.24 452.967 230.865 452.967 278.436 452.967 317 405.077 317 346.001ZM317 346 317 346 317 346.001Z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: 100%;
  drop-shadow: 0 0 2px 0 black;
`;
const Button = styled.button`
  background: ${(p) => p.theme.palette.primary.foreground};
  color: ${(p) => p.theme.palette.primary.background};
  font-size: calc(3rem / 2.4);
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  z-index: 1;
`;

export default function FloatingActions() {
  const router = useRouter();
  const goHome = router.back;
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <Root>
      <Button
        aria-label="처음으로 이동"
        style={{ transform: "translateX(2.3rem)" }}
        onClick={goHome}
      >
        <HomeIcon />
      </Button>
      <Divider />
      <Button aria-label="맨 위로 가기" onClick={scrollToTop}>
        <NavigationTopIcon />
      </Button>
    </Root>
  );
}
