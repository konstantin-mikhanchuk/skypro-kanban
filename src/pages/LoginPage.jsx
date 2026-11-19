import { Link, useNavigate } from "react-router-dom";
import * as S from "./Auth.styled";

function LoginPage({setIsAuth}) {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        setIsAuth(true);
        navigate("/");
    }
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
                placeholder="Эл. почта"
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter type="submit">
                Войти
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