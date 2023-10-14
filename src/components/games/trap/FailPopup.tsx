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
import Image from "next/image";
import styled from "@emotion/styled";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModalBody = styled(ModalBody)({
  "& .emphasize": {
    color: "red",
    fontWeight: 700,
  },
});

const FailPopup = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
      <ModalContent color="black">
        <ModalHeader fontSize={30}>이행보증서, 효력이 있을까요?</ModalHeader>
        <CustomModalBody fontSize={20}>
          <Image alt="news" src="/news.png" width={700} height={700} />
          <>
            <span className="emphasize">인천 미추홀구 전세 사기</span>
            에서 발생한 실제 사례입니다.
            <br />
            <br />
            건축 사기꾼과 중개사가 모의하여 전세 계약을 체결하기 위해 중개사
            측이 사용한 방법으로,{" "}
            <span className="emphasize">
              이행보증서는 공인중개사법에도 없는 내용
            </span>
            이며, 만약 중개사가 이행보증서를 주겠다고 할 때는 임차인의 불안을
            잠재우고 계약을 강제 체결하기 위한 수단으로 보아야 하므로 주의해야
            합니다.
          </>
        </CustomModalBody>
        <br />
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FailPopup;
