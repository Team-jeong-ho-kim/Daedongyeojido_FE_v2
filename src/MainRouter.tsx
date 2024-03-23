import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";
import Mainpage from "./page/MainPage";
import MyPage from "./page/MyPage";
import { CheckClubPage } from "./page/club/CheckClubPage";
import NoticeAllQueryPage from "./page/NoticeAllQuery";
import { ApplicationWritePage } from "./page/Apply/ApplicationWritePage";
import { ApplicationQueryPage } from "./page/Apply/ApplicatioinqueryPage";
import { CustomPage } from "./page/Apply/CustomPage";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/CheckClub" element={<CheckClubPage />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/My" element={<MyPage />} />
        <Route path="/Notices" element={<NoticeAllQueryPage />} />
        <Route path="/ApplicationWrite" element={<ApplicationWritePage />} />
        <Route path="/ApplicationQuery" element={<ApplicationQueryPage />} />
        <Route path="/CustomPage" element={<CustomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
