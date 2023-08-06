"use client";

import styled from "@emotion/styled";
import { Button, Flex, Image, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface cssPrpos {
  headerColorFill?: boolean;
}

const Container = styled.div(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "sticky",
    height: 100,
    top: 0,
    zIndex: 99,
  },
  ({ headerColorFill }: cssPrpos) => ({
    backgroundColor: headerColorFill ? "black" : "transparent",
  })
);

const HeaderLink = styled(Link)({
  margin: "20px 16px",

  "&:hover": {
    textDecoration: "none",
  },
});

const Header = () => {
  const [headerColorFill, setHeaderColorFill] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1080) {
        setHeaderColorFill(true);
      } else {
        setHeaderColorFill(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container headerColorFill={headerColorFill}>
      <Flex minWidth="1280" alignItems="center" justifyContent="space-between">
        <Image src="logo.png" alt="logo" />
        <div>
          <HeaderLink href="#main">삐약이탐험대</HeaderLink>
          <HeaderLink href="#intro">소개</HeaderLink>
          <HeaderLink href="#program">프로그램</HeaderLink>
          <HeaderLink href="#study">보충학습</HeaderLink>
          <HeaderLink href="#contact">문의</HeaderLink>
        </div>
        <Link href="https://zep.us/play/DELv54" isExternal>
          <Button
            fontSize="16px"
            color="white"
            bgGradient="linear(to-br, #00EA87, #78CBFF)"
            _hover={{ bgGradient: "linear(to-br, #5645FE, #7940EF)" }}
          >
            바로 합류하기
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Header;
