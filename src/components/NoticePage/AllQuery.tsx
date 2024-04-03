import styled from "styled-components";
import { Notice } from "./Notice";
import SearchIcon from "../../assets/img/SVG/Search.svg";
import { NoticeGetArrayType, NoticePropsType } from "../../types/type";

interface Notices {
  notices: NoticePropsType;
}

export const AllQuery: React.FC<Notices> = ({ notices }) => {
  return (
    <Container>
      <SearchWrapper>
        <LinkWrapper>
          {notices.isCreateNotice ? (
            <Link href="/NoticeModify/:clubName">공고 만들기</Link>
          ) : (
            <Link onClick={() => alert("이미 만들어진 공고가 있습니다.")}>
              공고 만들기
            </Link>
          )}
          <Link href="/Custom">지원서 커스텀</Link>
          <Link href="/InterviewTimeMod">면접 시간 설정</Link>
        </LinkWrapper>
        <div>
          <Search placeholder="찾고싶은 동아리나 공고를 입력해보세요." />
          <Icon src={SearchIcon} />
        </div>
        <FilterWrapper>
          <Filter>
            <option value="UNDEFINED" disabled selected>
              전공
            </option>
            <option value="FRONT">프론트엔드</option>
            <option value="BACK">백엔드</option>
            <option value="IOS">아이오에스</option>
            <option value="AND">안드로이드</option>
            <option value="FLUTTER">플러터</option>
            <option value="EMBEDDED">임베디드</option>
            <option value="AI">인공지능</option>
            <option value="SECURITY">보안</option>
            <option value="DEVOPS">데브옵스</option>
            <option value="DESIGN">디자인</option>
            <option value="GAME">게임</option>
          </Filter>
          <Filter>
            <option value="UNDEFINED" disabled selected>
              동아리
            </option>
            {notices.notices.map(
              (notice: NoticeGetArrayType, index: number) => (
                <option key={index} value={notice.clubName}>
                  {notice.clubName}
                </option>
              )
            )}
          </Filter>
        </FilterWrapper>
      </SearchWrapper>
      <NoticeWrapper>
        <TotalBox>
          <Total>총 {notices.notices.length}건</Total>
        </TotalBox>
        {notices && <Notice notices={notices} />}
      </NoticeWrapper>
    </Container>
  );
};

const Container = styled.div``;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  padding: 51px 382px 14px 382px;
  > div {
    position: relative;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  width: 250px;
  justify-content: space-around;
`;

const Link = styled.a`
  color: #4e5968;
  font-size: 10px;
  font-weight: 500;
`;

const Search = styled.input`
  width: 1153px;
  height: 53px;
  padding: 16px 31px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: #4e5968;
  font-size: 16px;
  font-weight: 500;
`;

const Icon = styled.img`
  position: absolute;
  top: 14px;
  right: 20px;
  width: 26px;
  height: 26px;
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 13px;
`;

const Filter = styled.select`
  width: 100px;
  height: 28px;
`;

const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 401px;
  padding-top: 30px;
  background-color: #f7f7f7;
`;

const TotalBox = styled.div`
  width: 1154px;
  height: 60px;
  padding: 20px 50px;
  background-color: #ffffff;
  border: "0.5px solid #D9D9D9";
`;

const Total = styled.p`
  font-size: 14px;
  font-weight: 700;
`;
