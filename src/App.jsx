import { useState, useEffect } from "react";
import "./App.css";
import PopUser from "./components/PopUser/PopUser";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { cardList } from "./data";

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])


  return (
    <>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main cardList={ cardList } isLoading={ isLoading }/>
      </div>
    </>
  );
}

export default App;
