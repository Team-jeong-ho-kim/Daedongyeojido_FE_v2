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
        <Banner src={clubImageUrl ?? DAEBanner} />
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
  width: 370px;
  height: 338px;
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
  height: 332px;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  position: relative;
  cursor: pointer;
`;

const Banner = styled.img`
  width: 100%;
  height: 217px;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 158px;
  border-radius: 0 0 10px 10px;
  padding: 0 33px;
  justify-content: center;
  gap: 21px;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
`;

const ClubName = styled.p`
  height: 23px;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.018px;
  &:hover {
    cursor: pointer;
  }
`;

const NoticeTitle = styled.p`
  height: 25px;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.75px;
  &:hover {
    cursor: pointer;
  }
`;

const NoticeDL = styled.p`
  height: 15px;
  color: #898989;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.012px;
  &:hover {
    cursor: pointer;
  }
`;

export default Notice;
