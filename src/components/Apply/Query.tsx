import styled from "styled-components";

export const Query = () => {
  return (
    <Container>
      <Wrapper>
        <IntroduceWrapper>
          <InfoWrapper>
            <Name>워는지</Name>
            <Number>2210</Number>
          </InfoWrapper>
          <Introduce>
            <IntroduceLine></IntroduceLine>
            <IntroduceText>
              안녕하세요. 저는 2108 변정현입니다. 저는 탐라국 출신이지만,
              오메기떡이 뭔지 모르고 먹어본 적 없습니다. 칼국수를 모르는 뉴진스
              민지를 본받아 오메기떡을 모르기로 했어요! 님들은 오메기떡 재료가
              뭔지 다 아세요? 다 외우고 다녀요? 아무튼 저는 감귤왕자님입니다.
              그리고 최소한 원은지보다는 섹시하다고 생각해서 동아리에 지원하게
              되었습니다. 저는요, 대동여지도라는 말만 들어도 뒤집어지게
              행복해지는 아이입니다. 그치만 아무리 제가 좋아하는 대동여지도라
              하여도 UX는 뒤지게 짜기 싫어가지구요. 절대 짤 일 없습니다 오케이?
              유 언더스탠드입니까? 뚜시따시. 만약 제가 동아리에 입부하게 된다면,
              서버는 기가막히게 짜고 디자인은 다른 사람한테 짬 때리겠습니다.
              그리고 저는 보노보노를 별로 좋아하지는 않아요. 왜냐면 파랗고
              못생겨서요
            </IntroduceText>
          </Introduce>
        </IntroduceWrapper>
        <QuestionWrapper>
          <Title>질문</Title>
          <Line></Line>
          <Q_A>
            <Text>
              <O></O>
              <Question>아 빨리 집가고 싶다</Question>
            </Text>
            <Input>학교탈출까지 1시간 40분</Input>
          </Q_A>
        </QuestionWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1832px;
  margin-left: 10%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 114px;
  width: 1462px;
  height: auto;
  border-radius: 10px;
  border: 3px solid #eaecef;
  padding: 60px 55px;
`;

const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 11px;
`;

const Name = styled.p`
  font-size: 50px;
  font-weight: 700;
`;

const Number = styled.p`
  color: #64686f;
  font-size: 30px;
  font-weight: 700;
`;

const Introduce = styled.div`
  width: 1351px;
  height: 391px;
  display: flex;
  gap: 15px;
`;

const IntroduceLine = styled.div`
  width: 5px;
  height: 280px;
  background: #626c7b;
`;

const IntroduceText = styled.p`
  color: #52585c;
  font-size: 25px;
  font-weight: 500;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const Line = styled.div`
  width: 1351px;
  border: 1px solid #eaecef;
`;

const Q_A = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const O = styled.div`
  background-color: #000;
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;

const Question = styled.p`
  font-size: 30px;
  font-weight: 400;
`;

const Input = styled.p`
  color: #52585c;
  font-size: 25px;
  font-weight: 500;
  padding-left: 20px;
`;
