import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";
import Mainpage from "./page/MainPage";
import MyPage from "./page/MyPage";
import { CheckClubPage } from "./page/club/CheckClubPage";
import { ApplicationWritePage } from "./page/Apply/ApplicationWritePage";
import { ApplicationQueryPage } from "./page/Apply/ApplicatioinqueryPage";
import { CustomPage } from "./page/Apply/CustomPage";
import { AskPage } from "./page/Ask/AskPage";
import { LeveriePage } from "./page/Leverie/LeveriePage";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/CheckClub" element={<CheckClubPage />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/My" element={<MyPage />} />
        <Route path="/ApplicationWrite" element={<ApplicationWritePage />} />
        <Route path="/ApplicationQuery" element={<ApplicationQueryPage />} />
        <Route path="/Custom" element={<CustomPage />} />
        <Route path="/Ask" element={<AskPage />} />
        <Route path="/Leverie" element={<LeveriePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
