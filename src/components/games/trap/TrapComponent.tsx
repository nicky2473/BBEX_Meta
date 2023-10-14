"use client";

import { useDisclosure } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import FailPopup from "./FailPopup";

const Container = styled.div({
  display: "flex",
  position: "relative",
  padding: 40,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 50,
});

const Title = styled.div({
  fontSize: 60,
  fontWeight: 700,
});

const TrapComponent = () => {
  const [isSigned, setIsSigned] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container>
        <Title>이행보증서 작성</Title>
        <Image alt="ment-1" src="/ment1.png" width={1200} height={500} />
        <Image alt="ment-2" src="/ment2.png" width={1200} height={500} />
        <Image
          alt="trap-document"
          src={`/trap-${isSigned ? "after" : "before"}.png`}
          width={700}
          height={500}
          onClick={() => {
            setIsSigned(true);

            onOpen();
          }}
        />
      </Container>

      <FailPopup isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default TrapComponent;
