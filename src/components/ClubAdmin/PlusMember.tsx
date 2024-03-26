import { useState } from "react";
import styled from "styled-components";
import Close from "../../assets/img/PNG/Close.png";
import Remove from "../../assets/img/SVG/Remove.svg";
import MemberPlus from "../../assets/img/PNG/MemberPlus.png";
import { adminPageType, memberType, PartType } from "../../types/type";
import { patchClub } from "../../apis/admin-club";

export const PlusMember = () => {
  const [, setPlusMemberVisible] = useState(false);
  const [info, setInfo] = useState<adminPageType>({
    clubName: "",
    teacherName: "",
    memberResponses: [],
  });
  const [plus, setPlus] = useState<memberType>({
    userName: "",
    classNumber: "",
    part: "CLUB_MEMBER",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPlus({
      ...plus,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: string = e.target.value;

    const part: PartType = selectedValue as PartType;

    setPlus({ ...plus, part });
  };

  const handleClose = () => {
    setPlusMemberVisible(false);
  };

  const onAdd = () => {
    const newArr = info.memberResponses;
    newArr.push(plus);

    setInfo({
      ...info,
      memberResponses: newArr,
    });

    setPlus({
      userName: "",
      classNumber: "",
      part: "CLUB_MEMBER",
    });
  };

  const onDelete = (num: number) => {
    const newArr = info.memberResponses.filter((_, index) => index !== num);

    setInfo({
      ...info,
      memberResponses: newArr,
    });
  };

  const onSave = () => {
    patchClub(info)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Text>
        <ClubName>{info.clubName}</ClubName>
        <CloseIcon src={Close} onClick={handleClose} />
      </Text>
      <Line></Line>
      <MemberWrapper>
        {info.memberResponses?.map((element, index) => (
          <Member>
            <NameNumber>{element.userName}</NameNumber>
            <NameNumber>{element.classNumber}</NameNumber>
            <NameNumber>
              {element.part === "CLUB_MEMBER" ? "동아리원" : "동아리장"}
            </NameNumber>
            <Icon
              src={Remove}
              onClick={() => {
                onDelete(index);
              }}
            />
          </Member>
        ))}
      </MemberWrapper>
      <Bottom>
        <_Container>
          <_NameNumber
            placeholder="이름"
            onChange={onChange}
            name="userName"
            value={plus.userName.toString()}
          />
          <_NameNumber
            placeholder="학번"
            onChange={onChange}
            name="classNumber"
            value={plus.classNumber.toString()}
          />
          <_Select onChange={handleSelectChange}>
            <option value={plus.part} disabled selected>
              미정
            </option>
            <option value="CLUB_LEADER">동아리장</option>
            <option value="CLUB_MEMBER">동아리원</option>
          </_Select>
          <_PlusIcon src={MemberPlus} onClick={onAdd} />
        </_Container>
        <SaveBtn onClick={onSave}>저장하기</SaveBtn>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 640px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  height: 530px;
  background-color: #ffffff;
  padding: 24px 36px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.5);
`;

const CloseIcon = styled.img`
  display: flex;
  justify-content: center;
  width: 15px;
  height: 15px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ClubName = styled.div`
  width: 140px;
  font-size: 32px;
  font-family: "DXhimchanBold";
`;

const Line = styled.div`
  width: 530px;
  height: 1px;
  border: 0.5px solid #cccccc;
  margin-top: -5px;
`;

const Member = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 27px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  color: black;
`;
const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SaveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #52565d;
  color: #ffffff;
  font-size: 16px;
`;

const Bottom = styled.div`
  position: absolute;
  top: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  align-self: center;
  cursor: pointer;
`;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 528px;
  height: 47px;
  border-radius: 4px;
  background-color: #cccccc;
`;

const _NameNumber = styled.input`
  width: 150px;
  height: 23px;
  font-size: 16px;
  padding: 12px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  border-radius: 5px;
  &::placeholder {
    font-size: 12px;
    color: #6e6e87;
  }
`;

const _Select = styled.select`
  width: 150px;
  height: 23px;
  border-radius: 5px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  color: #6e6e87;
`;

const _PlusIcon = styled.img`
  width: 16px;
  height: 16px;
`;
