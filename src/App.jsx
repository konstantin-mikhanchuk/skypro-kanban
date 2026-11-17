import { useState, useEffect } from "react";
import "./App.css";
import PopUser from "./components/PopUser/PopUser";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { cardList } from "./data";
import { GlobalStyle } from "./styled/GlobalStyle";
import { Wrapper } from "./styled/Common.styled";

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])


  return (
    <>
    <GlobalStyle />
      <Wrapper>
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main cardList={ cardList } isLoading={ isLoading }/>
      </Wrapper>
    </>
  );
}

export default App;
