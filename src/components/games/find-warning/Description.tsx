import styled from "@emotion/styled";

const Container = styled.div({
  position: "relative",
  minWidth: 750,

  "& strong": {
    fontSize: 20,
  },
});

const Contents = styled.div({
  position: "absolute",
  width: 750,
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  padding: 20,
  borderRadius: 8,
  height: "fit-content",

  "&.building": {
    top: 225,
  },

  "&.owner": {
    top: 550,
  },

  "&.etc": {
    top: 690,
  },
});

const Description = () => {
  const descriptions = [
    {
      key: "building",
      title: "표제부",
      description: (
        <>
          <span className="bold">부동산에 대한 정보, 주소, 건물번호 등</span>을
          나타내요.
        </>
      ),
    },
    {
      key: "owner",
      title: "갑구",
      description: (
        <>
          <span className="bold">누가 이 집을 가지고 있는지(=소유권)</span>
          에 대해 적혀 있어요.
          <br />
          가압류, 가처분 등 소유권에 대한 다툼이 일어나고 있는지도 알 수 있어요.
        </>
      ),
    },
    {
      key: "etc",
      title: "을구",
      description: (
        <>
          <span className="bold">소유자에 대한 정보 외의 다른 정보들</span>
          을 보여줘요.
          <br />
          집을 담보로 얼마나 대출받았는지(=근저당권) 등도 을구에서 알 수 있어요.
        </>
      ),
    },
  ];

  return (
    <Container>
      {descriptions.map(({ key, title, description }) => (
        <Contents key={key} className={key}>
          <strong>[ {title} ]</strong>
          <br />
          <span>{description}</span>
        </Contents>
      ))}
    </Container>
  );
};

export default Description;
