"use client";

import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import ContentsBox from "./ContentsBox";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 80,
  alignItems: "center",
  justifyContent: "center",
  margin: 80,
});

const ProgramBox = () => {
  return (
    <Container id="program">
      <Flex flexDir="column" gap="32px">
        <Text
          fontSize="52px"
          fontWeight="600"
          lineHeight="64px"
          letterSpacing="-2.6px"
          textAlign="center"
        >
          게임으로 쉽게, 시뮬레이션까지 제공합니다.
        </Text>
        <Text
          color="#757575"
          fontSize="18px"
          fontWeight="500"
          lineHeight="28px"
          letterSpacing="-0.36px"
          textAlign="center"
        >
          스텝별로 하나씩, 차근차근 전세사기에 대한 교육을 받을 수 있어요.
        </Text>
      </Flex>
      <Flex gap="32px">
        <ContentsBox
          stepNumber={1}
          title="게임 기반 학습"
          descriptions={[
            "용어 학습 OX 퀴즈",
            "퀘스트를 통한 시뮬레이션",
            "활동 수준별 다양한 콘텐츠 제공 예정",
          ]}
        />
        <ContentsBox
          stepNumber={2}
          title="시뮬레이션"
          descriptions={[
            "NPC와 함께 주요 상황 재연",
            "시뮬레이션을 통한 전세사기 보완점 파악",
            "롤플레잉 게임으로 쉽게 익히는 개념",
          ]}
          theme="light"
        />
        <ContentsBox
          stepNumber={3}
          title="외부 전문가 초빙"
          descriptions={[
            "부동산 분야 메타버스 세미나",
            "전문가 1:N 세미나",
            "현직 공인중개사 세미나",
          ]}
          buttonDisabled
        />
        <ContentsBox
          stepNumber={4}
          title="집 구하기!"
          descriptions={[
            "근처 부동산 정보 제공",
            "계약서 검수 요청",
            "인터넷 등기소, 정부24 연계",
          ]}
          buttonDisabled
        />
      </Flex>
    </Container>
  );
};

export default ProgramBox;
