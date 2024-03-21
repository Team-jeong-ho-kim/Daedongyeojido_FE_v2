import styled from "styled-components";

export const Club = () => {
  const clubs = [
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
    {
      clubImageUrl: "",
      clubName: "대동여지도",
      title: "대마고 동아리 여기서 지원하고 도움받자",
      tag1: "믱",
      tag2: "ㅓㅇ나ㅣ리ㅏㄷ",
      tag3: "헤헤ㅔㅎ헤헤ㅔㅎ",
    },
  ];
  return (
    <Container>
      {clubs.map((club, index) => (
        <ClubWrapper key={index}>
          <ClubLogo src={club.clubImageUrl} alt="동아리 이미지" />
          <ClubName>{club.clubName}</ClubName>
          <ClubInfo>{club.title}</ClubInfo>
          <TagWrapper>
            <ClubTag>#{club.tag1}</ClubTag>
            <ClubTag>#{club.tag2}</ClubTag>
            <ClubTag>#{club.tag3}</ClubTag>
          </TagWrapper>
        </ClubWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 223px 223px 223px 223px 223px 223px);
  column-gap: 30px;
  row-gap: 30px;
  padding: 0px 20%;
  justify-content: space-around;
`;

const ClubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
  height: 300px;
`;

const ClubLogo = styled.img`
  width: 223px;
  height: 136px;
`;

const ClubName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #454545;
`;

const ClubInfo = styled.p`
  color: #717171;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

const ClubTag = styled.p`
  color: #909090;
  font-size: 13px;
  font-weight: 400;
`;
