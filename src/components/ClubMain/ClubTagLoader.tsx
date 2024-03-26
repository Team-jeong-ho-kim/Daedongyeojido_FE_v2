import styled from "styled-components";
import { useState } from "react";
import Trashcan from "../../assets/img/SVG/Trashcan.svg";
import Plus from "../../assets/img/SVG/Plus.svg";
import DelTag from "../../assets/img/SVG/DelTag.svg";
import { ClubDetailsType } from "../../types/type";

interface Tags {
  tag1: string;
  tag2: string;
  tag3: string;
  tag4: string;
  tag5: string;
}

interface Update {
  club: ClubDetailsType;
  tagLoad: (data: Tags) => void;
}

const ClubTagLoader: React.FC<Update> = ({ club, tagLoad }) => {
  const [currentTags, setCurrentTags] = useState<number>(club.tags.length);
  const [deleteMod, setDeleteMod] = useState<boolean>(false);
  const [noneTag, setNoneTag] = useState<boolean>(false);
  const [tag1, setTag1] = useState<string>(club.tags[0]);
  const [tag2, setTag2] = useState<string>(club.tags[1]);
  const [tag3, setTag3] = useState<string>(club.tags[2]);
  const [tag4, setTag4] = useState<string>(club.tags[3]);
  const [tag5, setTag5] = useState<string>(club.tags[4]);
  const [tagz, setTagz] = useState<Tags>({
    tag1: tag1,
    tag2: tag2,
    tag3: tag3,
    tag4: tag4,
    tag5: tag5,
  });

  const handleAddTag = () => {
    if (currentTags < 5) setCurrentTags(currentTags + 1);
  };

  const handleWriteTag1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[?@$&*!:;(){}\[\]\-`~=+<>/.,'"\s]/g, "");
    if (inputValue.length <= 10) {
      setTag1(inputValue);
      setTagz({
        ...tagz,
        tag1: tag1,
      });
      tagLoad(tagz);
    }
  };

  const handleWriteTag2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[?@$&*!:;(){}\[\]\-`~=+<>/.,'"\s]/g, "");
    if (inputValue.length <= 10) {
      setTag2(inputValue);
      setTagz({
        ...tagz,
        tag2: tag2,
      });
      tagLoad(tagz);
    }
  };

  const handleWriteTag3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[?@$&*!:;(){}\[\]\-`~=+<>/.,'"\s]/g, "");
    if (inputValue.length <= 10) {
      setTag3(inputValue);
      setTagz({
        ...tagz,
        tag3: tag3,
      });
      tagLoad(tagz);
    }
  };

  const handleWriteTag4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[?@$&*!:;(){}\[\]\-`~=+<>/.,'"\s]/g, "");
    if (inputValue.length <= 10) {
      setTag4(inputValue);
      setTagz({
        ...tagz,
        tag4: tag4,
      });
      tagLoad(tagz);
    }
  };

  const handleWriteTag5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[?@$&*!:;(){}\[\]\-`~=+<>/.,'"\s]/g, "");
    if (inputValue.length <= 10) {
      setTag5(inputValue);
      setTagz({
        ...tagz,
        tag5: tag5,
      });
      tagLoad(tagz);
    }
  };

  const handleFocusTag1 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTag1(inputValue);
  };

  const handleFocusTag2 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTag2(inputValue);
  };

  const handleFocusTag3 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTag3(inputValue);
  };

  const handleFocusTag4 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTag4(inputValue);
  };

  const handleFocusTag5 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTag5(inputValue);
  };

  const handleBlurTag1 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue === "#") {
      inputValue = "";
    } else if (inputValue === "") {
      inputValue = "";
    } else if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTag1(inputValue);
  };

  const handleBlurTag2 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue === "#") {
      inputValue = "";
    } else if (inputValue === "") {
      inputValue = "";
    } else if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTag2(inputValue);
  };

  const handleBlurTag3 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue === "#") {
      inputValue = "";
    } else if (inputValue === "") {
      inputValue = "";
    } else if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTag3(inputValue);
  };

  const handleBlurTag4 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue === "#") {
      inputValue = "";
    } else if (inputValue === "") {
      inputValue = "";
    } else if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTag4(inputValue);
  };

  const handleBlurTag5 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue === "#") {
      inputValue = "";
    } else if (inputValue === "") {
      inputValue = "";
    } else if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTag5(inputValue);
  };

  const handleDeleteOn = () => {
    setDeleteMod(!deleteMod);
  };

  const handleDeleteTag = () => {
    setTag5("");
    setCurrentTags(currentTags - 1);
  };

  const handleNoneTag = () => {
    setNoneTag(true);
    setTimeout(() => {
      setNoneTag(false);
    }, 1000);
  };

  const handleDelete1 = () => {
    if (currentTags > 1) {
      setTag1(tag2);
      setTag2(tag3);
      setTag3(tag4);
      setTag4(tag5);
    } else if (currentTags == 1) {
      handleNoneTag();
      return;
    }
    handleDeleteTag();
  };

  const handleDelete2 = () => {
    if (currentTags > 2) {
      setTag2(tag3);
      setTag3(tag4);
      setTag4(tag5);
    }
    handleDeleteTag();
  };

  const handleDelete3 = () => {
    if (currentTags > 3) {
      setTag3(tag4);
      setTag4(tag5);
    }
    handleDeleteTag();
  };

  const handleDelete4 = () => {
    if (currentTags > 4) {
      setTag4(tag5);
    }
    handleDeleteTag();
  };

  return (
    <TagBox>
      <TagLine>
        <TagHi># 우리 동아리를 상징할 수 있는 태그를 추가해 보세요.</TagHi>
        <TagN>{currentTags}/5</TagN>
        <Delete1
          src={Trashcan}
          onClick={handleDeleteOn}
          isDeleteMod={deleteMod}
        />
      </TagLine>
      <TagBlock>
        <AddTag src={Plus} onClick={handleAddTag} />
        <TagWrapper>
          {currentTags >= 1 && (
            <TagWrap>
              <Tager
                type="text"
                value={tag1}
                maxLength={10}
                onChange={handleWriteTag1}
                onFocus={handleFocusTag1}
                onBlur={handleBlurTag1}
                placeholder="#태그1 입력"
              />
              {deleteMod && <DeleteTag src={DelTag} onClick={handleDelete1} />}
            </TagWrap>
          )}
          {currentTags >= 2 && (
            <TagWrap>
              <Tager
                type="text"
                value={tag2}
                maxLength={10}
                onChange={handleWriteTag2}
                onFocus={handleFocusTag2}
                onBlur={handleBlurTag2}
                placeholder="#태그2 입력"
              />
              {deleteMod && <DeleteTag src={DelTag} onClick={handleDelete2} />}
            </TagWrap>
          )}
          {currentTags >= 3 && (
            <TagWrap>
              <Tager
                type="text"
                value={tag3}
                maxLength={10}
                onChange={handleWriteTag3}
                onFocus={handleFocusTag3}
                onBlur={handleBlurTag3}
                placeholder="#태그3 입력"
              />
              {deleteMod && <DeleteTag src={DelTag} onClick={handleDelete3} />}
            </TagWrap>
          )}
          {currentTags >= 4 && (
            <TagWrap>
              <Tager
                type="text"
                value={tag4}
                maxLength={10}
                onChange={handleWriteTag4}
                onFocus={handleFocusTag4}
                onBlur={handleBlurTag4}
                placeholder="#태그4 입력"
              />
              {deleteMod && <DeleteTag src={DelTag} onClick={handleDelete4} />}
            </TagWrap>
          )}
          {currentTags >= 5 && (
            <TagWrap>
              <Tager
                type="text"
                value={tag5}
                maxLength={10}
                onChange={handleWriteTag5}
                onFocus={handleFocusTag5}
                onBlur={handleBlurTag5}
                placeholder="#태그5 입력"
              />
              {deleteMod && (
                <DeleteTag src={DelTag} onClick={handleDeleteTag} />
              )}
            </TagWrap>
          )}
        </TagWrapper>
      </TagBlock>
      <TagCenter>
        <IsTag>{noneTag && "최소 하나의 태그를 작성해야 합니다!"}</IsTag>
      </TagCenter>
    </TagBox>
  );
};

const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 21px;
  margin-bottom: 15px;
`;

const TagLine = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  user-select: none;
`;

const TagHi = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02px;
  margin-right: 15px;
`;

const TagN = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 25px;
  color: #fff;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Delete1 = styled.img<{
  isDeleteMod: boolean;
}>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  filter: ${({ isDeleteMod }) => (isDeleteMod ? "invert(100%)" : "none")};
`;

const TagBlock = styled.div`
  display: flex;
  height: 53px;
  gap: 25px;
  align-items: center;
`;

const AddTag = styled.img`
  width: 51px;
  height: 51px;
  margin-bottom: 1px;
  border: 10px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
  }
`;

const TagWrap = styled.div`
  display: flex;
  position: relative;
`;

const DeleteTag = styled.img`
  position: absolute;
  right: -5px;
  top: -7px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  max-width: 1350px;
`;

const TagCenter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const IsTag = styled.p`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.05px;
  height: 15px;
`;

const Tager = styled.input`
  padding: 16px 22px 12px;
  width: 250px;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.02px;
  border-radius: 10px;
  background-color: #f5f5f5;
  cursor: text;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.3);
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export default ClubTagLoader;
