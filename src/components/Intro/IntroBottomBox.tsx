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

const peopleData = [
  {
    title: `집을 처음 구하는 사회초년생\n김지연 (24세)`,
    description: `나도 사기를 당할수 있을 것 같고,\n위험성을 알고 대비하면 좋겠다고 생각해요.`,
  },
  {
    title: `지인의 불안한 내 집 찾기를 지켜본\n이현수 (35세)`,
    description: `전세 자체의 문제로 되는게 안타까워요.\n전문적인 지식 조언을 구할 창구가 있었으면 좋겠어요.`,
  },
  {
    title: `전세금을 돌려받지 못할 뻔한\n조준호 (30세)`,
    description: `전세사기 예방을 위한 안전장치들이 있으니,\n시뮬레이션을 통해 학습하면 안심할 수 있지 않을까요?`,
  },
];

const IntroBottomBox = () => {
  const replaceWithBr = (text: string) => {
    return text.replace(/\n/g, "<br />");
  };

  return (
    <Container>
      <Text
        fontSize="52px"
        fontWeight="600"
        lineHeight="64px"
        letterSpacing="-2.6px"
        textAlign="center"
      >
        삐약이탐험대는 안전한 내 집 찾기를 지향합니다.
      </Text>
      <Flex gap="64px">
        {peopleData.map((personData, index) => {
          const { title, description } = personData;

          return (
            <Flex key={index} flexDir="column" gap="16px">
              <Text
                fontSize="24px"
                fontWeight="600"
                lineHeight="32px"
                letterSpacing="-0.48px"
                textAlign="center"
                dangerouslySetInnerHTML={{ __html: replaceWithBr(title) }}
              />
              <Text
                color="#757575"
                fontSize="16px"
                fontWeight="500"
                lineHeight="24px"
                letterSpacing="-0.32px"
                textAlign="center"
                dangerouslySetInnerHTML={{ __html: replaceWithBr(description) }}
              />
            </Flex>
          );
        })}
      </Flex>
    </Container>
  );
};

export default IntroBottomBox;
