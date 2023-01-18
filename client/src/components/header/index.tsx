import { css } from "@emotion/css";
import * as Styled from "./index.styles";
import theme from "styles/theme";
import Button from "_common/components/button";
import Flex from "_common/components/flex";
import Box from "_common/components/box";

const Header = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="white"
      className={css`
        padding: 8px calc((100% - 1080px) / 2);
        border-bottom: 1px solid ${theme.colors.zinc_200};
      `}
    >
      <img
        src="https://user-images.githubusercontent.com/41149744/205478176-acde0f95-baa1-4742-9c92-dace85e93e82.png"
        alt="세일즈클루 로고"
        width={98}
        height={23}
      />
      <Flex as="div">
        <Button
          variant="zinc_200"
          paddingY={9}
          paddingX={16}
          fontSize="md"
          lineHeight="md"
          color="zinc_400"
        >
          홈
        </Button>
        <Button
          variant="zinc_200"
          paddingY={9}
          paddingX={16}
          fontSize="md"
          lineHeight="md"
          color="zinc_400"
        >
          나의 글 목록
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;