import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Wrapper } from "../styled/Common.styled";

function MainPage() {
  return (
    <>
      <Wrapper>
        <Header />
        <Main />
        <Outlet />
      </Wrapper>
    </>
  );
}

export default MainPage;