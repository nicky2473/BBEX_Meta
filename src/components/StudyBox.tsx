"use client";

import { Flex, Image, Text } from "@chakra-ui/react";
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

const cardData = [
  {
    title: "계약 전 유의사항",
    description: "자산 확인부터 좋은 집을 알아보는 방법까지 확인해 보세요.",
  },
  {
    title: "계약 시 유의사항",
    description: "어려운 계약 용어, 특히 주의해야할 내용들을 확인해 보세요.",
  },
  {
    title: "계약 후 유의사항",
    description: "이사 후, 내 보증금을 어떻게 보호할 수 있는지 확인해 보세요.",
  },
];

const StudyBox = () => {
  return (
    <Container id="study">
      <Flex flexDirection="column" gap="40px">
        <Text
          fontSize="52px"
          fontWeight="600"
          lineHeight="64px"
          letterSpacing="-2.6px"
          textAlign="center"
        >
          탐험대원을 위한 특별 보충 학습!
        </Text>
        <Flex gap="64px">
          {new Array(3).fill(undefined).map((_card, index) => {
            const { title, description } = cardData[index];
            return (
              <Flex flexDir="column" key={index} gap="16px">
                <Image
                  src={`ex${index}.png`}
                  alt={`study-card-${index}`}
                  style={{ marginBottom: "16px" }}
                />
                <Text
                  fontSize="20px"
                  fontWeight="600"
                  lineHeight="28px"
                  letterSpacing="-0.4px"
                  textAlign="center"
                >
                  {title}
                </Text>
                <Text
                  color="#757575"
                  fontSize="14px"
                  fontWeight="700"
                  lineHeight="16px"
                  textAlign="center"
                >
                  {description}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};

export default StudyBox;
