import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";
import { CheckClubPage } from "./page/club/CheckClubPage";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/CheckClub" element={<CheckClubPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
