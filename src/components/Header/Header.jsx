import { useState } from "react";
import { Container } from "../../styled/Common.styled";
import * as S from "./Header.styled";

function Header() {
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
                <a href="" target="_self">
                  <img src="images/logo.png" alt="logo" />
                </a>
              </S.HeaderLogo>
              <S.HeaderLogo $isDark>
                <a href="" target="_self">
                  <img src="images/logo_dark.png" alt="logo" />
                </a>
              </S.HeaderLogo>
              <S.HeaderNav>
                <S.HeaderBtnMainNew
                  id="btnMainNew"
                >
                  <a href="#popNewCard">Создать новую задачу</a>
                </S.HeaderBtnMainNew>
                <S.HeaderUser href="#" onClick={toggleUserPopup}>
                  Ivan Ivanov
                </S.HeaderUser>
                
                
                {isUserOpen && (
                  <S.HeaderPopUserSet
                  id="user-set-target"
                  >
                  {/* <a href="">x</a> */}
                  <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                  <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                  <S.PopUserSetTheme>
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </S.PopUserSetTheme>
                  <button type="button">
                    <a href="#popExit">Выйти</a>
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