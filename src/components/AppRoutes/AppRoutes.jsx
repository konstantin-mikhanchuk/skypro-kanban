import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MainPage from "../../pages/MainPage";
import ExitPage from "../../pages/ExitPage";
import NewCardPage from "../../pages/NewCardPage";
import CardPage from "../../pages/CardPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage";

function AppRoutes({ isAuth, setIsAuth }) {
    return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="exit" element={<ExitPage setIsAuth={setIsAuth} />} />
          <Route path="new-card" element={<NewCardPage />} />
          <Route path="card/:id" element={<CardPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      <Route
        path="/register"
        element={<RegisterPage setIsAuth={setIsAuth} />}
      />
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
    );
}
export default AppRoutes