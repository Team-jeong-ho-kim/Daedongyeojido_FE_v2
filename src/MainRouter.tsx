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
        <Route path="/NoticeModify" element={<NoticeModifyPage />} />
        <Route path="/ApplicationWrite" element={<ApplicationWritePage />} />
        <Route path="/ApplicationQuery" element={<ApplicationQueryPage />} />
        <Route path="/Custom" element={<CustomPage />} />
        <Route path="/Ask" element={<AskPage />} />
        <Route path="/Leverie" element={<LeveriePage />} />
        <Route path="/ApplicantQuery" element={<ApplicantQueryPage />} />
        <Route path="/Memo" element={<MemoPage />} />
        <Route path="/ClubInfoModify" element={<ClubInfoModPage />} />
        <Route path="/ClubDetail" element={<ClubDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
