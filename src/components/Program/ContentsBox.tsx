"use client";

import { Box, Button, Link, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

const Container = styled(Box)(
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    width: 350,
    height: 452,
    borderRadius: 40,
  },
  (props) => ({
    color: props.theme === "light" ? "#000" : "#fff",
    backgroundColor: props.theme === "light" ? "#fff" : "#1f1f1f",
  })
);

interface Props {
  stepNumber: number;
  title: string;
  descriptions: string[];
  buttonText?: string;
  buttonDisabled?: boolean;
  theme?: "light" | "dark";
}

const ContentsBox = ({
  stepNumber,
  title,
  descriptions,
  buttonText,
  buttonDisabled = false,
  theme = "dark",
}: Props) => {
  return (
    <Container theme={theme}>
      <Text
        fontSize="24px"
        fontWeight="700"
        lineHeight="32px"
        letterSpacing="-0.48px"
        textAlign="center"
      >
        STEP {String(stepNumber).padStart(2, "0")}
      </Text>
      <Text
        fontSize="44px"
        fontWeight="700"
        lineHeight="52px"
        letterSpacing="-2.2px"
        textAlign="center"
      >
        {title}
      </Text>
      {descriptions.map((description, index) => (
        <Text
          key={index}
          fontSize="16px"
          fontWeight="800"
          lineHeight="24px"
          letterSpacing="-0.32px"
          textAlign="center"
        >
          {description}
        </Text>
      ))}
      {buttonDisabled ? (
        <Button
          marginTop="16px"
          fontSize="16px"
          color="white"
          bg="transparent"
          width="270px"
          height="56px"
          border="2px solid #6b6b6b"
          cursor="not-allowed"
          _hover={{ bg: "transparent" }}
        >
          {buttonText ?? "준비중이에요."}
        </Button>
      ) : (
        <Link href="https://zep.us/play/DELv54" isExternal>
          <Button
            marginTop="16px"
            fontSize="16px"
            color="white"
            width="270px"
            height="56px"
            bgGradient="linear(to-br, #00EA87, #78CBFF)"
            _hover={{ bgGradient: "linear(to-br, #5645FE, #7940EF)" }}
          >
            {buttonText ?? "참여하기"}
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default ContentsBox;
