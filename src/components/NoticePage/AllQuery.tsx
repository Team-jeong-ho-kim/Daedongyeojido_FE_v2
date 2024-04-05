import styled from "styled-components";
import { Notice } from "./Notice";
import { useEffect, useState } from "react";
import Delete from "../../assets/img/SVG/Delete.svg";
import { MyInfoType, NoticePropsType } from "../../types/type";
import { Cookie } from "../../utils/cookie";
import { NoticeGetArrayType } from "../../types/type";
import { getMyInfo } from "../../apis/user";

interface Notices {
  notices: NoticePropsType;
}

export const AllQuery: React.FC<Notices> = ({ notices }) => {
  const [selectMajor, setSelectMajor] = useState<string>("UNDEFINED");
  const [searchValue, setSearchValue] = useState<string>("");
  const [hide, setHide] = useState<boolean>(false);
  const [user, setUser] = useState<MyInfoType>();
  const [notId, setNotId] = useState<number>(0);
  const part = Cookie.get("part");
  const accessToken = Cookie.get("accessToken");

  const handleSelectMajor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectMajor(selectedValue);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    if (inputValue) setHide(true);
    else setHide(false);
  };

  const MajorLevel = (major: string) => {
    switch (major) {
      case "FRONT":
        return "FRONT";
      case "BACK":
        return "BACK";
      case "SECURITY":
        return "SECURITY";
      case "IOS":
        return "IOS";
      case "AND":
        return "AND";
      case "FLUTTER":
        return "FLUTTER";
      case "EMBEDDED":
        return "EMBEDDED";
      case "AI":
        return "AI";
      case "DEVOPS":
        return "DEVOPS";
      case "DESIGN":
        return "DESIGN";
      case "GAME":
        return "GAME";
      default:
        return "UNDEFINED";
    }
  };

  const MajorLabel = (major: string) => {
    switch (major) {
      case "FRONT":
        return "프론트엔드";
      case "BACK":
        return "백엔드";
      case "SECURITY":
        return "정보 보안";
      case "IOS":
        return "IOS";
      case "AND":
        return "안드로이드";
      case "FLUTTER":
        return "플러터";
      case "EMBEDDED":
        return "임베디드";
      case "AI":
        return "AI";
      case "DEVOPS":
        return "DevOps";
      case "DESIGN":
        return "디자인";
      case "GAME":
        return "게임";
      default:
        return "미정";
    }
  };

  useEffect(() => {
    console.log(selectMajor);
  }, [selectMajor]);

  useEffect(() => {
    if (!accessToken) return;
    getMyInfo().then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    if (user) {
      const search = notices.notices.filter(
        (notice) => user.myClub == notice.clubName
      );
      if (search[0].clubName == user.myClub) {
        setNotId(search[0].id);
      }
    }
  }, []);

  return (
    <Container>
      <SearchWrapper>
        <LinkWrapper>
          {part === "CLUB_LEADER" ||
            (part === "ADMIN" && (
              <LinkWp>
                {notices.isCreateNotice ? (
                  <Link onClick={() => alert("이미 만들어진 공고가 있습니다.")}>
                    공고 만들기
                  </Link>
                ) : (
                  <Link href={`/NoticeModify/${user?.myClub}`}>
                    공고 만들기
                  </Link>
                )}
                <Link href={`/Custom/${notId}`}>지원서 커스텀</Link>
                <Link href="/InterviewTimeMod">면접 시간 설정</Link>
              </LinkWp>
            ))}
        </LinkWrapper>
        <div>
          <Search
            placeholder="찾고싶은 동아리나 공고를 입력해보세요."
            value={searchValue}
            onChange={handleSearch}
          />
          <Icon
            hide={hide}
            src={Delete}
            onClick={() => {
              setSearchValue("");
              setHide(false);
            }}
          />
        </div>
      </SearchWrapper>
      <Slabber>
        <SlabWrap>
          <FilterWrapper>
            <Filter onChange={handleSelectMajor}>
              <Opt value="UNDEFINED" selected>
                전체
              </Opt>
              <Opt value="FRONT">프론트엔드</Opt>
              <Opt value="BACK">백엔드</Opt>
              <Opt value="IOS">IOS</Opt>
              <Opt value="AND">안드로이드</Opt>
              <Opt value="FLUTTER">플러터</Opt>
              <Opt value="EMBEDDED">임베디드</Opt>
              <Opt value="AI">AI</Opt>
              <Opt value="SECURITY">정보 보안</Opt>
              <Opt value="DEVOPS">DevOps</Opt>
              <Opt value="DESIGN">디자인</Opt>
              <Opt value="GAME">게임</Opt>
            </Filter>
          </FilterWrapper>
        </SlabWrap>
      </Slabber>
      <NoticeWrapper>
        <TotalBox>
          <Total>
            총{" "}
            {searchValue
              ? notices.notices.filter(
                  (notice: NoticeGetArrayType) =>
                    notice.clubName
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    notice.noticeTitle
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    notice.major.filter((m) =>
                      MajorLabel(m).includes(searchValue)
                    ).length >= 1
                ).length
              : selectMajor == "UNDEFINED"
              ? notices.notices.length
              : notices.notices.filter((obj) =>
                  obj.major.includes(MajorLevel(selectMajor))
                ).length}
            건
          </Total>
        </TotalBox>
        {notices && (
          <Notice
            notices={notices}
            selectedMajor={selectMajor}
            searches={searchValue}
          />
        )}
      </NoticeWrapper>
    </Container>
  );
};

const Container = styled.div``;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 51px 0 0;
  > div {
    position: relative;
  }
`;

const Slabber = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0;
  justify-content: center;
  align-items: center;
`;

const SlabWrap = styled.div`
  width: 1153px;
  display: flex;
  justify-content: flex-start;
`;

const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LinkWp = styled.div`
  display: flex;
  width: 1153px;
  justify-content: flex-end;
  gap: 3px;
`;

const Link = styled.a`
  color: #4e5968;
  font-size: 10px;
  font-weight: 500;
  display: flex;
  padding: 6px 17px;
  cursor: pointer;
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
  cursor: text;
  transition: box-shadow 0.2s;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const Icon = styled.img<{
  hide: boolean;
}>`
  display: ${({ hide }) => (hide ? "block" : "none")};
  position: absolute;
  top: 14px;
  right: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: scale 0.1s;
  user-select: none;
  &:hover {
    scale: 1.05;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 13px;
`;

const Filter = styled.select`
  border-radius: 4px;
  border: 1px solid #e5e7e9;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 15.6px;
  color: #4b4b4b;
`;

const Opt = styled.option``;

const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 401px;
  padding-top: 30px;
  background-color: #f7f7f7;
  user-select: none;
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
