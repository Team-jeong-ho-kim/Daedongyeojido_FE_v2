import styled from "styled-components";
import CustomBannerImg from "../../assets/img/PNG/CustomBanner.png";

export const CustomBanner = () => {
  return (
    <Container>
      <Title>지원서 커스텀</Title>
      <Content>
        신입생 지원자들에게 질문을 <br /> 커스텀하여 지원서로 받아보세요.
      </Content>
      <Banner src={CustomBannerImg} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 10.5%;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const Banner = styled.img`
  width: 1460px;
  height: 489px;
  border-radius: 15px;
`;
