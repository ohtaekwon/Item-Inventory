import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import { theme } from "styles";

export type SectionType = "default";

export interface SectionProps {
  /**
   * 엘리먼트의 타입을 설정합니다.
   *
   * @default div
   */
  as?: ElementType;
  /**
   * section의 variant을 설정합니다.
   *
   * @required
   */
  variant?: SectionType;

  /**
   * section의 width을 설정합니다.
   *
   * @default auto
   */
  width?: CSSProperties["width"];

  /**
   * section의 height을 설정합니다.
   *
   * @default auto
   */
  height?: CSSProperties["height"];

  /**
   * section의 sectionType을 설정합니다.
   *
   * @default ''
   */
  sectionType?: "grid" | "flex" | undefined;

  /**
   * section이 flex일 경우 direction을 설정합니다.
   *
   * @default 'row'
   */
  direction?: "row" | "column";

  /**
   * section이 grid일 경우 grid-template-areas를 설정합니다.
   *
   * @default ''
   */
  gridTemplateAreas?: CSSProperties["gridTemplateAreas"];

  /**
   * section이 grid일 경우 grid-template-column을 설정합니다.
   *
   * @default ''
   */
  gridTemplateColumns?: CSSProperties["gridTemplateColumns"];
  /**
   * section이 grid일 경우 grid-areas를 설정합니다.
   *
   * @default ''
   */
  gridArea?: CSSProperties["gridArea"];
  /**
   * padding 상단을 설정합니다.
   *
   * @default 16px
   */
  padding?: CSSProperties["padding"];

  /**
   * padding 상단을 설정합니다.
   *
   * @default 0
   */
  paddingTop?: number;

  /**
   * padding 우측을 설정합니다.
   *
   * @default 0
   */
  paddingRight?: number;

  /**
   * padding 하단을 설정합니다.
   *
   * @default 0
   */
  paddingBottom?: number;

  /**
   * padding 좌측을 설정합니다.
   *
   * @default 0
   */
  paddingLeft?: number;

  /**
   * margin 상단을 설정합니다.
   *
   * @default 0
   */
  marginTop?: number;

  /**
   * margin 우측을 설정합니다.
   *
   * @default 0
   */
  marginRight?: number;

  /**
   * margin 하단을 설정합니다.
   *
   * @default 0
   */
  marginBottom?: number;

  /**
   * margin 좌측을 설정합니다.
   *
   * @default 0
   */
  marginLeft?: number;
  /**
   * margin을 설정합니다.
   *
   * @default inherit
   */
  margin?: CSSProperties["margin"];
  /**
   * Section 의 배경 색상을 설정합니다.
   *
   * @default 'inherit'
   */
  backgroundColor?: keyof typeof theme.colors;
}

export interface Props extends HTMLAttributes<HTMLElement>, SectionProps {
  children?: ReactNode;
}
