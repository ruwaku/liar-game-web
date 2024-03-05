import { ComponentPropsWithRef, ElementRef, ReactElement, forwardRef } from "react";
import { styled } from "styled-components";

const IconWrapper = styled.span`
  display: inline-block;
  & > svg {
    width: 1em;
  }
`;

export const SvgWithIconWrapper = (svgElement: ReactElement) =>
  forwardRef<ElementRef<typeof IconWrapper>, ComponentPropsWithRef<typeof IconWrapper>>(
    (props, ref) => {
      return (
        <IconWrapper {...props} ref={ref}>
          {svgElement}
        </IconWrapper>
      );
    }
  );

export default IconWrapper;
