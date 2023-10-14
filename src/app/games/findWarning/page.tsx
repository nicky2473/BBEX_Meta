"use client";

import styled from "@emotion/styled";
import { Grid } from "@chakra-ui/react";
import DocumentImage from "@/components/games/find-warning/DocumentImage";
import Description from "@/components/games/find-warning/Description";

const Container = styled.div({
  display: "flex",
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

const SubTitle = styled.div({
  fontSize: 20,
});

export default function Page() {
  return (
    <>
      <Container>
        <Title>등기부등본을 확인해보자!</Title>
        <SubTitle>
          전세사기를 예방하기 위한 대부분의 단서는 등기부등본에 있어요. 계약을
          진행하기 전에 체크해야 하는 부분에는 어떤 것들이 있는지 표제부, 갑구,
          을구 항목에서 선택해 보세요.
        </SubTitle>
        <Grid templateColumns="repeat(2, 750px)" gap="20">
          <DocumentImage />
          <Description />
        </Grid>
      </Container>
    </>
  );
}
