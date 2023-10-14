"use client";

import document from "../../../../public/document.png";
import Image from "next/image";
import styled from "@emotion/styled";
import QuizPopup from "./QuizPopup";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { DocumentType } from "./type";

const Container = styled.div({
  position: "relative",
  minWidth: 750,
});

const Area = styled.div(
  {
    position: "absolute",
    cursor: "pointer",

    "&:hover": {
      border: "solid 5px red",
      transition: "all 0.5s ease 0s",
    },
  },
  ({
    width,
    height,
    top,
    left,
  }: {
    width: number;
    height: number;
    top: number;
    left: number;
  }) => ({
    width,
    height,
    top,
    left,

    "&:hover": {
      width: width + 20,
      height: height + 20,
      top: top - 10,
      left: left - 10,
      transition: "all 0.5s ease 0s",
    },
  })
);

const DocumentImage = () => {
  const [documentType, setDocumentType] = useState<DocumentType | undefined>(
    undefined
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const documentAreas = [
    {
      key: "building",
      width: 180,
      height: 280,
      top: 250,
      left: 200,
    },
    {
      key: "owner",
      width: 280,
      height: 100,
      top: 580,
      left: 425,
    },
    {
      key: "etc",
      width: 280,
      height: 150,
      top: 750,
      left: 425,
    },
  ];

  return (
    <>
      <Container>
        <Image alt="document" src={document} width={750} />
        {documentAreas.map(({ key, width, height, top, left }) => (
          <Area
            key={key}
            width={width}
            height={height}
            top={top}
            left={left}
            onClick={() => {
              setDocumentType(key as DocumentType);

              onOpen();
            }}
          />
        ))}
      </Container>

      <QuizPopup
        isOpen={isOpen}
        onClose={onClose}
        documentType={documentType}
      />
    </>
  );
};

export default DocumentImage;
