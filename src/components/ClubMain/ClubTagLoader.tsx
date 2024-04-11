import styled from "styled-components";
import { useEffect, useState } from "react";
import Trashcan from "../../assets/img/SVG/Trashcan.svg";
import Plus from "../../assets/img/SVG/Plus.svg";
import DelTag from "../../assets/img/SVG/DelTag.svg";
import { ClubDetailsType } from "../../types/type";

interface Update {
  club: ClubDetailsType;
  tagLoad: (data: string[]) => void;
}

const ClubTagLoader: React.FC<Update> = ({ club, tagLoad }) => {
  const [currentTags, setCurrentTags] = useState<number>(
    club.tags.length < 1 ? 1 : club.tags.length
  );
  const [deleteMod, setDeleteMod] = useState<boolean>(false);
  const [noneTag, setNoneTag] = useState<boolean>(false);
  const [tagz, setTagz] = useState<string[]>(club.tags);

  const handleAddTag = () => {
    if (currentTags < 5) setCurrentTags(currentTags + 1);
  };

  useEffect(() => {
    console.log(currentTags);
  }, [currentTags]);

  const handleWriteTag1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[?@$&*!:;(){}\[\]\-`~=+<>/.,'"\s]/g, "");
    if (inputValue.length <= 11) {
      setTagz([
        inputValue,
        tagz[1] ? tagz[1] : "",
        tagz[2] ? tagz[2] : "",
        tagz[3] ? tagz[3] : "",
        tagz[4] ? tagz[4] : "",
      ]);
    }
  };

  const handleWriteTag2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[?@$&*!:;(){}\[\]\-`~=+<>/.,'"\s]/g, "");
    if (inputValue.length <= 11) {
      setTagz([
        tagz[0],
        inputValue,
        tagz[2] ? tagz[2] : "",
        tagz[3] ? tagz[3] : "",
        tagz[4] ? tagz[4] : "",
      ]);
    }
  };

  const handleWriteTag3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[?@$&*!:;(){}\[\]\-`~=+<>/.,'"\s]/g, "");
    if (inputValue.length <= 11) {
      setTagz([
        tagz[0],
        tagz[1],
        inputValue,
        tagz[3] ? tagz[3] : "",
        tagz[4] ? tagz[4] : "",
      ]);
    }
  };

  const handleWriteTag4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[?@$&*!:;(){}\[\]\-`~=+<>/.,'"\s]/g, "");
    if (inputValue.length <= 11) {
      setTagz([tagz[0], tagz[1], tagz[2], inputValue, tagz[4] ? tagz[4] : ""]);
    }
  };

  const handleWriteTag5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[?@$&*!:;(){}\[\]\-`~=+<>/.,'"\s]/g, "");
    if (inputValue.length <= 11) {
      setTagz([tagz[0], tagz[1], tagz[2], tagz[3], inputValue]);
    }
  };

  useEffect(() => {
    tagLoad(tagz);
  }, [tagz]);

  const handleFocusTag1 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTagz([inputValue, tagz[1], tagz[2], tagz[3], tagz[4]]);
  };

  const handleFocusTag2 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTagz([tagz[0], inputValue, tagz[2], tagz[3], tagz[4]]);
  };

  const handleFocusTag3 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTagz([tagz[0], tagz[1], inputValue, tagz[3], tagz[4]]);
  };

  const handleFocusTag4 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTagz([tagz[0], tagz[1], tagz[2], inputValue, tagz[4]]);
  };

  const handleFocusTag5 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (!inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }
    setTagz([tagz[0], tagz[1], tagz[2], tagz[3], inputValue]);
  };

  const handleBlurTag1 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue === "#") {
      inputValue = "";
    } else if (inputValue === "") {
      inputValue = "";
    } else if (!inputValue.startsWith("#")) {
      inputValue = inputValue.replace("#", "");
      inputValue = "#" + inputValue;
    }
    setTagz([inputValue, tagz[1], tagz[2], tagz[3], tagz[4]]);
  };

  const handleBlurTag2 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue === "#") {
      inputValue = "";
    } else if (inputValue === "") {
      inputValue = "";
    } else if (!inputValue.startsWith("#")) {
      inputValue = inputValue.replace("#", "");
      inputValue = "#" + inputValue;
    }
    setTagz([tagz[0], inputValue, tagz[2], tagz[3], tagz[4]]);
  };

  const handleBlurTag3 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue === "#") {
      inputValue = "";
    } else if (inputValue === "") {
      inputValue = "";
    } else if (!inputValue.startsWith("#")) {
      inputValue = inputValue.replace("#", "");
      inputValue = "#" + inputValue;
    }
    setTagz([tagz[0], tagz[1], inputValue, tagz[3], tagz[4]]);
  };

  const handleBlurTag4 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue === "#") {
      inputValue = "";
    } else if (inputValue === "") {
      inputValue = "";
    } else if (!inputValue.startsWith("#")) {
      inputValue = inputValue.replace("#", "");
      inputValue = "#" + inputValue;
    }
    setTagz([tagz[0], tagz[1], tagz[2], inputValue, tagz[4]]);
  };

  const handleBlurTag5 = (e: React.FocusEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (inputValue === "#") {
      inputValue = "";
    } else if (inputValue === "") {
      inputValue = "";
    } else if (!inputValue.startsWith("#")) {
      inputValue = inputValue.replace("#", "");
      inputValue = "#" + inputValue;
    }
    setTagz([tagz[0], tagz[1], tagz[2], tagz[3], inputValue]);
  };

  useEffect(() => {
    console.log(tagz);
  }, [tagz]);

  const handleDeleteOn = () => {
    setDeleteMod(!deleteMod);
    console.log(tagz);
  };

  const handleNoneTag = () => {
    setNoneTag(true);
    setTimeout(() => {
      setNoneTag(false);
    }, 1000);
  };

  const handleDelete1 = () => {
    if (currentTags > 1) {
      setTagz([tagz[1], tagz[2], tagz[3], tagz[4], ""]);
    } else if (currentTags == 1) {
      handleNoneTag();
      return;
    }
    setCurrentTags(currentTags - 1);
  };

  const handleDelete2 = () => {
    if (currentTags > 2) {
      setTagz([
        tagz[0],
        tagz[2] ? tagz[2] : "",
        tagz[3] ? tagz[3] : "",
        tagz[4] ? tagz[4] : "",
        "",
      ]);
    } else if (currentTags == 2) {
      setTagz([tagz[0], "", "", "", ""]);
    }
    setCurrentTags(currentTags - 1);
  };

  const handleDelete3 = () => {
    if (currentTags > 3) {
      setTagz([
        tagz[0],
        tagz[1] ? tagz[1] : "",
        tagz[3] ? tagz[3] : "",
        tagz[4] ? tagz[4] : "",
        "",
      ]);
    } else if (currentTags == 3) {
      setTagz([tagz[0], tagz[1], "", "", ""]);
    }
    setCurrentTags(currentTags - 1);
  };

  const handleDelete4 = () => {
    if (currentTags > 4) {
      setTagz([
        tagz[0],
        tagz[1] ? tagz[1] : "",
        tagz[2] ? tagz[2] : "",
        tagz[4] ? tagz[4] : "",
        "",
      ]);
    } else if (currentTags == 4) {
      setTagz([tagz[0], tagz[1], tagz[2], "", ""]);
    }
    setCurrentTags(currentTags - 1);
  };

  const handleDelete5 = () => {
    setTagz([
      tagz[0],
      tagz[1] ? tagz[1] : "",
      tagz[2] ? tagz[2] : "",
      tagz[3] ? tagz[3] : "",
      "",
    ]);
    setCurrentTags(currentTags - 1);
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
                value={tagz[0]}
                maxLength={11}
                onChange={handleWriteTag1}
                onFocus={handleFocusTag1}
                onBlur={handleBlurTag1}
                placeholder="#태그1 입력"
                style={{
                  width: `${tagz[0].length > 0 ? tagz[0].length * 23 : 170}px`,
                }}
              />
              {deleteMod && <DeleteTag src={DelTag} onClick={handleDelete1} />}
            </TagWrap>
          )}
          {currentTags >= 2 && (
            <TagWrap>
              <Tager
                type="text"
                value={tagz[1]}
                maxLength={11}
                onChange={handleWriteTag2}
                onFocus={handleFocusTag2}
                onBlur={handleBlurTag2}
                placeholder="#태그2 입력"
                style={{
                  width: `${
                    tagz[1] && tagz[1].length > 0 ? tagz[1].length * 23 : 170
                  }px`,
                }}
              />
              {deleteMod && <DeleteTag src={DelTag} onClick={handleDelete2} />}
            </TagWrap>
          )}
          {currentTags >= 3 && (
            <TagWrap>
              <Tager
                type="text"
                value={tagz[2]}
                maxLength={11}
                onChange={handleWriteTag3}
                onFocus={handleFocusTag3}
                onBlur={handleBlurTag3}
                placeholder="#태그3 입력"
                style={{
                  width: `${
                    tagz[2] && tagz[2].length > 0 ? tagz[2].length * 23 : 170
                  }px`,
                }}
              />
              {deleteMod && <DeleteTag src={DelTag} onClick={handleDelete3} />}
            </TagWrap>
          )}
          {currentTags >= 4 && (
            <TagWrap>
              <Tager
                type="text"
                value={tagz[3]}
                maxLength={11}
                onChange={handleWriteTag4}
                onFocus={handleFocusTag4}
                onBlur={handleBlurTag4}
                placeholder="#태그4 입력"
                style={{
                  width: `${
                    tagz[3] && tagz[3].length > 0 ? tagz[3].length * 23 : 170
                  }px`,
                }}
              />
              {deleteMod && <DeleteTag src={DelTag} onClick={handleDelete4} />}
            </TagWrap>
          )}
          {currentTags >= 5 && (
            <TagWrap>
              <Tager
                type="text"
                value={tagz[4]}
                maxLength={11}
                onChange={handleWriteTag5}
                onFocus={handleFocusTag5}
                onBlur={handleBlurTag5}
                placeholder="#태그5 입력"
                style={{
                  width: `${
                    tagz[4] && tagz[4].length > 0 ? tagz[4].length * 23 : 170
                  }px`,
                }}
              />
              {deleteMod && <DeleteTag src={DelTag} onClick={handleDelete5} />}
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
  flex-wrap: wrap;
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
  min-width: 170px;
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
