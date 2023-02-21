import React from "react";
import * as Styled from "./index.styles";
import { Props } from "./index.types";

const Box = React.forwardRef(function Box(
  {
    /**
     * HTML태그 설정
     */
    as = "div",
    role = "",
    /**
     * Box의 유형 설정
     */
    variant = "default",
    /**
     * 넓이/높이 설정
     */
    width = "inherit",
    height = "inherit",
    /**
     * 배치 설정
     */
    position = "static",
    display = "block",
    direction = "row",
    gridArea = "",
    justifyContent = "flex-start",
    alignItems = "flex-start",
    /**
     * padding 설정
     */
    padding = "auto",
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    /**
     * margin 설정
     */
    margin = "auto",
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    /**
     * 배경/테두리 스타일 설정
     */
    backgroundColor = "inherit",
    radius = 8,
    /**
     * 간격 설정
     */
    gap = 0,
    /**
     * 기타 옵션 설정
     */
    opacity = "inherit",
    cursor = "auto",
    children,
    ...rest
  }: React.PropsWithChildren<Props>,
  forwardedRef: React.Ref<HTMLElement>
) {
  return (
    <Styled.Box
      /**
       * HTML태그 설정
       */
      as={as}
      role={role}
      /**
       * Box의 유형 설정
       */
      variant={variant}
      /**
       * 넓이/높이 설정
       */
      width={width}
      height={height}
      /**
       * 배치 설정
       */
      position={position}
      display={display}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gridArea={gridArea}
      /**
       * margin 설정
       */
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      /**
       * padding 설정
       */
      padding={padding}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      /**
       * 배경/테두리 스타일 설정
       */
      backgroundColor={backgroundColor}
      radius={radius}
      /**
       * 간격 설정
       */
      gap={gap}
      /**
       * 기타 옵션 설정
       */
      cursor={cursor}
      opacity={opacity}
      /**
       * ref 설정
       */
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </Styled.Box>
  );
});
export default Box;
