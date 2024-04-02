import styled from "styled-components";
import DAEBanner from "../../assets/img/PNG/Daedongyeojido.png";
import { NoticeGetType } from "../../types/type";

const Notice = ({
  clubName,
  clubImageUrl,
  recruitDay,
  noticeTitle,
}: NoticeGetType) => {
  return (
    <Container>
      <Block>
        <Banner>
          <img src={clubImageUrl ?? DAEBanner} />
        </Banner>
        <Detail>
          <TextBox>
            <ClubName>{clubName}</ClubName>
            <NoticeTitle>{noticeTitle}</NoticeTitle>
          </TextBox>
          <NoticeDL>
            {recruitDay.startDay} ~ {recruitDay.endDay}
          </NoticeDL>
        </Detail>
      </Block>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 300px;
  height: 236px;
  border-radius: 10px;
  background-color: #ff5a70;
  align-items: flex-end;
  margin-bottom: 50px;
  user-select: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s;
  &:hover {
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.7);
    transform: translateY(-18px);
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 236px;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  position: relative;
  cursor: pointer;
`;

const Banner = styled.div`
  width: 100%;
  height: 130px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 100%;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 102px;
  border-radius: 0 0 10px 10px;
  padding: 30px 16px 0 16px;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 12px;
`;

const ClubName = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.018px;
  &:hover {
    cursor: pointer;
  }
`;

const NoticeTitle = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.75px;
  &:hover {
    cursor: pointer;
  }
`;

const NoticeDL = styled.p`
  color: #898989;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.012px;
  &:hover {
    cursor: pointer;
  }
`;

export default Notice;
