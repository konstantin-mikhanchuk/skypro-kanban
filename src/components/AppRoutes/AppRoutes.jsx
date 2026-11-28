import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MainPage from "../../pages/MainPage";
import ExitPage from "../../pages/ExitPage";
import NewCardPage from "../../pages/NewCardPage";
import CardPage from "../../pages/CardPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage";

function AppRoutes() {
  const { userData } = useContext(AuthContext);
  const isAuth = Boolean(userData);
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="exit" element={<ExitPage />} />
          <Route path="new-card" element={<NewCardPage />} />
          <Route path="card/:id" element={<CardPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/register"
        element={<RegisterPage />}
      />
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
    );
}
export default AppRoutes