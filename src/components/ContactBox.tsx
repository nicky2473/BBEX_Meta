"use client";

import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 56,
  alignItems: "center",
  justifyContent: "center",
  margin: 80,
});

const ContactBox = () => {
  return (
    <Container id="contact">
      <Image src="logo.png" alt="logo" />
      <Flex flexDir="column" gap="16px">
        <Text
          color="#757575"
          fontSize="24px"
          fontWeight="600"
          lineHeight="32px"
          letterSpacing="-0.48px"
          textAlign="center"
        >
          M2O(Metaverse to Offline) 부동산 시뮬레이션 교육 서비스
        </Text>
        <Text
          fontSize="36px"
          fontWeight="600"
          lineHeight="44px"
          letterSpacing="-1.8px"
          textAlign="center"
        >
          삐약이 탐험대 : 전세사기에서 살아남기
        </Text>
      </Flex>
      <Link href="https://zep.us/play/DELv54" isExternal>
        <Button
          fontSize="16px"
          color="white"
          width="225px"
          height="56px"
          bgGradient="linear(to-br, #00EA87, #78CBFF)"
          _hover={{ bgGradient: "linear(to-br, #5645FE, #7940EF)" }}
        >
          지금 바로 ZEP에서 합류하기
        </Button>
      </Link>
      <Text
        color="#757575"
        fontSize="14px"
        fontWeight="400"
        lineHeight="16px"
        letterSpacing="4px"
        textAlign="center"
      >
        ⒸBBEX Inc., LTD All Rights Reserved.
      </Text>
    </Container>
  );
};

export default ContactBox;
