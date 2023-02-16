import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FormProps } from "./index.types";

export const Form = styled.form<Required<FormProps>>`
  /* display: flex;
  flex-direction: column; */
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: ${({ position }) => position};
  display: ${({ display }) => display};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};

  align-items: ${({ alignItems }) => alignItems};
  grid-area: ${({ gridArea }) => gridArea};
  padding: ${({ paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`};
  margin: ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
  background-color: ${({ backgroundColor, theme }) =>
    theme.colors[backgroundColor]};

  border-style: solid;

  border-radius: ${({ radius }) => `${radius}px`};

  cursor: ${({ cursor }) => cursor};
  opacity: ${({ opacity }) => opacity};
`;