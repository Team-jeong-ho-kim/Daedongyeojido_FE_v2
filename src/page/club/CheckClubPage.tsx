import styled from "styled-components";
import { ClubMainBanner } from "../../components/ClubMain/ClubMainBanner";
import { Club } from "../../components/ClubMain/Club";
import { SmallHeader } from "../../components/ClubMain/SmallBanner";

export const CheckClubPage = () => {
  return (
    <Container>
      <SmallHeader />
      <ClubMainBanner />
      <Club />
    </Container>
  );
};

const Container = styled.div``;
