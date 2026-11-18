import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #EAEEF6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const NotFoundBlock = styled.div`
  background-color: #FFFFFF;
  max-width: 400px;
  width: 100%;
  padding: 50px 40px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: #565EEF;
  margin-bottom: 10px;
`;

const NotFoundText = styled.p`
  font-size: 16px;
  color: #94A6BE;
  margin-bottom: 25px;
`;

const HomeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #565EEF;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #33399b;
  }
`;

function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <NotFoundBlock>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>Страница не найдена</NotFoundText>
        <HomeButton to="/">Вернуться на главную</HomeButton>
      </NotFoundBlock>
    </NotFoundWrapper>
  );
}

export default NotFoundPage;