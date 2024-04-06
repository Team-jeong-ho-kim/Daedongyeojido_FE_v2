import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";
import Mainpage from "./page/MainPage";
import MyPage from "./page/MyPage";
import { CheckClubPage } from "./page/club/CheckClubPage";
import NoticeAllQueryPage from "./page/Notice/NoticeAllQuery";
import { ApplicationWritePage } from "./page/Apply/ApplicationWritePage";
import { ApplicationQueryPage } from "./page/Apply/ApplicatioinqueryPage";
import { CustomPage } from "./page/Apply/CustomPage";
import { AskPage } from "./page/Ask/AskPage";
import { LeveriePage } from "./page/Leverie/LeveriePage";
import { ApplicantQueryPage } from "./page/Query/ApplicantQueryPage";
import { MemoPage } from "./page/Memo/MemoPage";
import NoticeDetailsPage from "./page/Notice/NoticeDetails";
import NoticeModifyPage from "./page/Notice/NoticeModifying";
import ClubInfoModPage from "./page/club/ClubInfoMod";
import { ClubDetailPage } from "./page/club/ClubDetailPage";
import { ClubAdminPage } from "./page/ClubAdminPage";
import InterviewTimeMod from "./page/club/InterviewTimeMod";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/CheckClub" element={<CheckClubPage />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/My" element={<MyPage />} />
        <Route path="/Notices" element={<NoticeAllQueryPage />} />
        <Route path="/NoticeDetails/:id" element={<NoticeDetailsPage />} />
        <Route path="/NoticeModify/:clubName" element={<NoticeModifyPage />} />
        <Route
          path="/NoticeModify/:clubName/:id"
          element={<NoticeModifyPage />}
        />
        <Route
          path="/InterviewTimeMod/:clubName"
          element={<InterviewTimeMod />}
        />
        <Route
          path="/ApplicationWrite/:id"
          element={<ApplicationWritePage />}
        />
        <Route
          path="/ApplicationQuery/:id"
          element={<ApplicationQueryPage />}
        />
        <Route path="/Custom/:id" element={<CustomPage />} />
        <Route path="/Ask" element={<AskPage />} />
        <Route path="/Leverie" element={<LeveriePage />} />
        <Route
          path="/ApplicantQuery/:clubName"
          element={<ApplicantQueryPage />}
        />
        <Route path="/Memo/:id" element={<MemoPage />} />
        <Route path="/ClubInfoModify/:clubName" element={<ClubInfoModPage />} />
        <Route path="/ClubDetail/:clubName" element={<ClubDetailPage />} />
        <Route path="/ClubAdmin" element={<ClubAdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
