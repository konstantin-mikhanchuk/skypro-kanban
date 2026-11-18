import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { cardList } from "../data";
import { Wrapper } from "../styled/Common.styled";

function MainPage() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])


  return (
    <>
      <Wrapper>
        <Header />
        <Main cardList={ cardList } isLoading={ isLoading }/>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default MainPage;