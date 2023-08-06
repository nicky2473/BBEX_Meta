"use client";

import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 64,
  alignItems: "center",
  justifyContent: "center",
  margin: 80,
});

const IntroTopBox = () => {
  return (
    <Container id="intro">
      <Flex flexDirection="column" gap="40px">
        <Text
          fontSize="52px"
          fontWeight="600"
          lineHeight="64px"
          letterSpacing="-2.6px"
          textAlign="center"
        >
          전세사기 피해 2030 청년층 비율{" "}
          <span style={{ color: "#FFD966" }}>61.3%</span>
          <br />
          내일은 ‘나의 일’이 될 수 있다는 불안함.
        </Text>
        <Text
          fontSize="18px"
          fontWeight="500"
          lineHeight="28px"
          letterSpacing="-0.36px"
          textAlign="center"
        >
          [출처] 대한민국 정책브리핑(www.korea.kr)
          <br />
          2023년 전세 실거래가 2억 768만 원 X 8,929채 = 1조 8,544억 원
        </Text>
        <iframe
          width="1208"
          height="680"
          src="https://www.youtube.com/embed/oCpeHqXVI8Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Flex>
    </Container>
  );
};

export default IntroTopBox;
