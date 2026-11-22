import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { getTasks } from "../services/tasks";
import { Wrapper } from "../styled/Common.styled";

function MainPage({userData}) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let isMounted = true;
    const fetchTasks = async () => {
     try {
      setIsLoading(true);
      setError("");
      const data = await getTasks({token: userData.token});
      if(isMounted) {
        setCards(data.tasks)
      } 
    } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      } 
    }; 
    if (userData?.token) {
        fetchTasks()
      }
      
      return () => {
        isMounted = false
      }
  }, [userData])


  return (
    <>
      <Wrapper>
        <Header userData={userData} />
        <Main cardList={ cards } isLoading={ isLoading } error={error}/>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default MainPage;