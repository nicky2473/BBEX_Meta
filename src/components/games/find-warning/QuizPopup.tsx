"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { DocumentType } from "./type";
import Image from "next/image";
import styled from "@emotion/styled";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  documentType?: DocumentType;
}

const CustomModalBody = styled(ModalBody)({
  "& .emphasize": {
    color: "red",
    fontWeight: 700,
  },
});

const QuizPopup = ({ isOpen, onClose, documentType }: Props) => {
  const bodyMapByType = new Map(
    [
      {
        key: "building",
        body: (
          <>
            <span className="emphasize">
              계약하려는 집 주소와 표제부에 적혀 있는 집 주소가 반드시 동일
            </span>
            해야 합니다.
          </>
        ),
      },
      {
        key: "owner",
        body: (
          <>
            <span className="emphasize">
              전세계약서에 쓰여진 소유권자와 갑구에 적혀 있는 소유권자가 반드시
              동일
            </span>
            해야 합니다.
            <br />
            <br />
            또한, 갑구에 가등기, 가처분, 예고등기, 가압류, 압류, 경매 등과 같은
            권리 관계가 얽혀있다면 계약을 피하시는 게 좋습니다.
            <br />
            <br />
            또한 신탁 표기가 있을 경우,{" "}
            <span className="emphasize">
              반드시 등기소에 방문하여 신탁원부를 발급
            </span>
            받아 대금지급자를 확인한 뒤에{" "}
            <span className="emphasize">그 사람의 동의를 받아</span> 계약을
            진행해야 합니다.
          </>
        ),
      },
      {
        key: "etc",
        body: (
          <>
            근저당이 잡혀 있다면 깡통전세의 위험이 있습니다.
            <br />
            <span className="emphasize">
              내가 내는 전세계약금과 근저당의 합이 집 매매가의 70% 이하
            </span>
            인 지 확인하세요!
          </>
        ),
      },
    ].map((body) => [body.key, body])
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
      <ModalContent color="black">
        <ModalHeader fontSize={30}>꼭 확인하세요!</ModalHeader>
        <CustomModalBody fontSize={20}>
          {bodyMapByType.get(documentType as string)?.body}
        </CustomModalBody>
        <br />
        <Image
          alt={`modal-${documentType}`}
          src={`/modal-${documentType}.png`}
          width={1000}
          height={1000}
        />
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuizPopup;
