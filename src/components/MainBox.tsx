"use client";

import { Button, Flex, Link, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  height: 1080,
  alignItems: "flex-start",
  justifyContent: "center",
  paddingLeft: 196,
  position: "relative",
});

const Video = styled.div({
  position: "absolute",
  width: "-webkit-fill-available",
  height: 1080,
  top: 0,
  left: 0,
  backgroundImage: "url('backgroundVideo.gif')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  opacity: 0.6,
});

const MainBox = () => {
  return (
    <div id="main">
      <Video />
      <Container>
        <Text
          fontSize="54px"
          fontWeight="600"
          lineHeight="normal"
          letterSpacing="-1.92px"
        >
          전세사기 <span style={{ color: "#FFD966" }}>1조 8천억</span> 시대.
        </Text>
        <Text
          fontSize="82px"
          fontWeight="600"
          lineHeight="normal"
          letterSpacing="-3.28px"
        >
          삐약이 탐험대에
          <br />
          합류하세요
        </Text>
        <Text
          fontSize="18px"
          fontWeight="500"
          lineHeight="28px"
          letterSpacing="-0.36px"
        >
          ZEP 메타버스 시스템을 활용해 현실과 가장 가까운
          <br />
          부동산 시뮬레이션 교육 서비스를 제공합니다.
        </Text>
        <Flex gap="20px">
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
          <Button
            fontSize="16px"
            color="white"
            bg="transparent"
            _hover={{ bg: "transparent" }}
          >
            더 알아보기
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default MainBox;
