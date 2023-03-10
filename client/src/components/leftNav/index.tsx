import React from "react";
import * as Styled from "./index.styles";

import { Link } from "react-router-dom";

import Button from "_common/components/button";
import Section from "components/section";
import { css } from "@emotion/css";

type SideMenu = {
  name: string;
  key: string;
  route: string;
};

const sideNavMenu: SideMenu[] = [
  { name: "To-do", key: "todo", route: "/todo" },
  { name: "자기소개서", key: "my-documents", route: "/my-documents" },
  { name: "대쉬보드", key: "my-dashboard", route: "/my-dashboard" },
  { name: "면접 연습하기", key: "my-interview", route: "/my-interview" },
];

const LeftNav = () => {
  const leftMenu = sideNavMenu.map(({ name, key, route }: SideMenu) => (
    <Link to={route} key={key}>
      <Button
        variant="default"
        paddingY={9}
        paddingX={16}
        fontSize="md"
        lineHeight="md"
        color="zinc_400"
        width="200px"
        marginTop={3}
        marginRight={3}
        marginLeft={3}
        marginBottom={3}
      >
        {name}
      </Button>
    </Link>
  ));
  return <Styled.Wrapper>{leftMenu}</Styled.Wrapper>;
};

export default LeftNav;
