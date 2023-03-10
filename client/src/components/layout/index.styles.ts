import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { LayoutProps } from "./index.types";
import { theme } from "styles";

export const Layout = styled.main<Required<LayoutProps>>`
  margin: auto;
  /* display: flex;
  flex-direction: column; */
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  background: ${({ backgroundImage }) => backgroundImage};
  /* background-repeat: repeat-y; */
  /* background-size: cover; */
  position: relative;
  z-index: 1;
  ${({ variant, backgroundColor }) => {
    switch (variant) {
      case "default": {
        return css`
          width: 100%;
          /* height: 100%; */
          background-color: ${theme.colors.white};
        `;
      }
      case "xs": {
        return css`
          max-width: 320px;
          background-color: ${theme.colors.indigo_50};
        `;
      }
      case "sm": {
        return css`
          max-width: 670px;
          background-color: ${theme.colors.indigo_50};
        `;
      }
      case "md": {
        return css`
          max-width: 960px;
          background-color: ${theme.colors.indigo_300};
        `;
      }
      case "lg": {
        return css`
          max-width: 1280px;
          height: 100%;
          max-height: max-content;
          background-color: ${theme.colors.gray_50};
        `;
      }
      case "xl": {
        return css`
          max-width: 1600px;
        `;
      }
      case "custom": {
        return css`
          margin: 0;
          background-color: ${backgroundColor};
        `;
      }
      case "write": {
        return css`
          width: 100%;
          background-color: rgba(255, 255, 255, 0.5);

          ::before {
            width: 100%;
            height: 100%;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            background-color: rgba(0, 0, 0, 0.4);
          }
        `;
      }
    }
  }}
`;
export const Aside = styled.aside<Required<any>>`
  width: 20%;
`;
