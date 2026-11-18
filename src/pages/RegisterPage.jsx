import { Link, useNavigate } from "react-router-dom";
import * as S from "./Auth.styled";

function RegisterPage({ setIsAuth }) {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <S.WrapperAuth>
      <S.ContainerAuth>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalFormLogin onSubmit={handleRegister}>
              <S.ModalInput
                type="text"
                name="first-name"
                placeholder="Имя"
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter type="submit">
                Зарегистрироваться
              </S.ModalBtnEnter>
              <S.ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                </p>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerAuth>
    </S.WrapperAuth>
  );
}

export default RegisterPage;