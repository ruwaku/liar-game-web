import Button from "@/components/ui/button";
import { styled } from "styled-components";

const StyledPlayButton = styled(Button)`
  padding: 0.8rem 0.6rem 0.85rem;
`;
const ButtonTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  padding-left: 0.4rem;
`;
const ButtonDesc = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  font-size: 0.75rem;
  margin-top: 0.3rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${(p) => p.theme.sizes.borderRadius}px;
`;

export default function GameSelectButton({
  children,
  desc,
  ...props
}: { desc: string } & React.PropsWithChildren<React.ComponentProps<typeof StyledPlayButton>>) {
  return (
    <StyledPlayButton {...props}>
      <ButtonTitle>{children}</ButtonTitle>
      <ButtonDesc>{desc}</ButtonDesc>
    </StyledPlayButton>
  );
}
