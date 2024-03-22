import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";
import Mainpage from "./page/MainPage";
import MyPage from "./page/MyPage";
import { CheckClubPage } from "./page/club/CheckClubPage";
import NoticeAllQueryPage from "./page/NoticeAllQuery";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/CheckClub" element={<CheckClubPage />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/My" element={<MyPage />} />
        <Route path="/Notices" element={<NoticeAllQueryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
