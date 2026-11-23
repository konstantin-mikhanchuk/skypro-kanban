import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Container } from "../../styled/Common.styled";
import * as S from "./Header.styled";

function Header() {
    const { userData } = useContext(AuthContext);
    const [ isUserOpen, setIsUserOpen ] = useState(false);
    const toggleUserPopup = (e) => {
        e.preventDefault();
        setIsUserOpen((prev) => !prev);
    }

  return (
    <S.Header>
          <Container>
            <S.HeaderBlock>
              <S.HeaderLogo>
                <Link to="/">
                  <img src="/images/logo.png" alt="logo" />
                </Link>
              </S.HeaderLogo>
              <S.HeaderLogo $isDark>
                <Link to="/">
                  <img src="/images/logo_dark.png" alt="logo" />
                </Link>
              </S.HeaderLogo>
              <S.HeaderNav>
                <S.HeaderBtnMainNew id="btnMainNew">
                  <Link to="/new-card">Создать новую задачу</Link>
                </S.HeaderBtnMainNew>
                <S.HeaderUser href="#" onClick={toggleUserPopup}>
                  {userData?.name || "Пользователь"}
                </S.HeaderUser>
                
                
                {isUserOpen && (
                  <S.HeaderPopUserSet id="user-set-target" >
                  <S.PopUserSetName>
                    {userData?.name || "Пользователь"}
                  </S.PopUserSetName>
                  <S.PopUserSetMail>
                    {userData?.login || ""}
                  </S.PopUserSetMail>
                  <S.PopUserSetTheme>
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </S.PopUserSetTheme>
                  <button type="button">
                    <Link to="/exit">Выйти</Link>
                  </button>
                  </S.HeaderPopUserSet>
                )}
              </S.HeaderNav>
            </S.HeaderBlock>
          </Container>
        </S.Header>
  );
}
export default Header;