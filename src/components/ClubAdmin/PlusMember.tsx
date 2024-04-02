import { useState } from "react";
import styled from "styled-components";
import Close from "../../assets/img/PNG/Close.png";
import Remove from "../../assets/img/SVG/Remove.svg";
import MemberPlus from "../../assets/img/PNG/MemberPlus.png";
import {
  adminPageType,
  memberType,
  PartType,
  MajorType,
} from "../../types/type";
import { patchClub } from "../../apis/admin-club";

interface ContainerProps {
  isPlusMemberVisible: boolean;
}

interface Props {
  selectedClub: adminPageType;
  handleEditClick: () => void;
}

export const PlusMember: React.FC<Props> = ({
  selectedClub,
  handleEditClick,
}) => {
  const [isPlusMemberVisible] = useState<boolean>(false);
  const [info, setInfo] = useState<adminPageType>({
    clubName: selectedClub.clubName,
    teacherName: selectedClub.teacherName,
    memberResponses: selectedClub.memberResponses,
  });

  const [plus, setPlus] = useState<memberType>({
    userName: "",
    classNumber: "",
    part: "CLUB_LEADER",
    major: "UNDEFINED",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPlus({
      ...plus,
      [name]: value,
    });
  };

  const handleSave = () => {
    patchClub(info)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("동아리 정보 수정 중 오류가 발생했습니다.", error);
      });
  };

  const handlePartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: string = e.target.value;

    const part: PartType = selectedValue as PartType;

    setPlus({ ...plus, part });
  };

  const handleMajorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: string = e.target.value;

    const major: MajorType = selectedValue as MajorType;

    setPlus({ ...plus, major });
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
      major: "UNDEFINED",
    });
  };

  const onDelete = (num: number) => {
    const newArr = info.memberResponses.filter((_, index) => index !== num);

    setInfo({
      ...info,
      memberResponses: newArr,
    });
  };

  const handleCloseIconClick = () => {
    handleEditClick();
  };

  return (
    <Container isPlusMemberVisible={isPlusMemberVisible}>
      <Text>
        <div>
          <ClubName
            value={info.clubName}
            onChange={handleChange}
            name="clubName"
            placeholder="동아리 이름"
          />
          <TeacherName
            value={info.teacherName}
            onChange={handleChange}
            name="teacherName"
            placeholder="담당 선생님"
          />
        </div>
        <CloseIcon src={Close} onClick={handleCloseIconClick} />
      </Text>
      <Line></Line>
      <MemberWrapper>
        {info.memberResponses?.map((element, index) => (
          <Member key={index}>
            <NameNumber>{element.userName}</NameNumber>
            <NameNumber>{element.classNumber}</NameNumber>
            <NameNumber>
              {element.part === "CLUB_MEMBER" ? "동아리원" : "동아리장"}
            </NameNumber>
            <NameNumber>{element.major}</NameNumber>
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
            onChange={handleChange}
            name="userName"
            value={plus.userName.toString()}
          />
          <_NameNumber
            placeholder="학번"
            onChange={handleChange}
            name="classNumber"
            value={plus.classNumber.toString()}
          />
          <_Select onChange={handlePartChange}>
            <option value={plus.part} disabled selected>
              미정
            </option>
            <option value="CLUB_LEADER">동아리장</option>
            <option value="CLUB_MEMBER">동아리원</option>
          </_Select>
          <_Select onChange={handleMajorChange}>
            <option value={plus.major} disabled selected>
              미정
            </option>
            <option value="FRONT">FrontEnd</option>
            <option value="BACK">BackEnd</option>
            <option value="IOS">ios</option>
            <option value="AND">Android</option>
            <option value="FLUTTER">Flutter</option>
            <option value="EMBEDDED">Embedded</option>
            <option value="AI">AI</option>
            <option value="SECURITY">Security</option>
            <option value="DEVOPS">DevOps</option>
            <option value="DESIGN">Design</option>
            <option value="GAME">Game</option>
          </_Select>
          <_PlusIcon src={MemberPlus} onClick={onAdd} />
        </_Container>
        <SaveBtn onClick={handleSave}>저장하기</SaveBtn>
      </Bottom>
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
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

const ClubName = styled.input`
  font-size: 24px;
  font-family: 700;
  width: 130px;
`;

const TeacherName = styled.input`
  font-size: 12px;
  font-weight: 400;
  width: 100px;
  &::placeholder {
    color: #6e6e87;
  }
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
  width: 100px;
  height: 27px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  color: black;
`;
const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  gap: 7px;
  width: 528px;
  height: 47px;
  border-radius: 4px;
  background-color: #cccccc;
`;

const _NameNumber = styled.input`
  width: 100px;
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
  width: 130px;
  height: 23px;
  border-radius: 5px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  color: #6e6e87;
`;

const _PlusIcon = styled.img`
  width: 16px;
  height: 16px;
`;
