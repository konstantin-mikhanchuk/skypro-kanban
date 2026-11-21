import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../services/auth";
import * as S from "./Auth.styled";

function LoginPage({onLogin}) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      login: "",
      password: "",
    });
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
      const {name, value} = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      setError("");
      if (!formData.login.trim() || !formData.password.trim()) {
        setError("Пожалуйста, заполните все поля");
        return;
      }
      try {
        setIsSubmitting(true);
        const data = await signIn(formData);
        onLogin(data.user);
        navigate("/");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
    <S.WrapperAuth>
      <S.ContainerAuth>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            <S.ModalFormLogin onSubmit={handleLogin}>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Эл. почта или логин"
                value={formData.login}
                onChange={handleInputChange}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleInputChange}
              />
              {error && <S.ErrorText>{error}</S.ErrorText>}
              <S.ModalBtnEnter type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Входим..." : "Войти"}
              </S.ModalBtnEnter>
              <S.ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerAuth>
    </S.WrapperAuth>
    )
} 
export default LoginPage