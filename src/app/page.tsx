"use client";

import Header from "@/components/Header";
import IntroTopBox from "@/components/Intro/IntroTopBox";
import MainBox from "@/components/MainBox";
import IntroBottomBox from "@/components/Intro/IntroBottomBox";
import ProgramBox from "@/components/Program/ProgramBox";
import StudyBox from "@/components/StudyBox";
import styled from "@emotion/styled";
import ContactBox from "@/components/ContactBox";

const Contents = styled.div({
  display: "flex",
  flexDirection: "column",
});

export default function Home() {
  return (
    <>
      <Header />
      <Contents>
        <MainBox />
        <IntroTopBox />
        <IntroBottomBox />
        <ProgramBox />
        <StudyBox />
        <ContactBox />
      </Contents>
    </>
  );
}
