import { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./styled/GlobalStyle";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function getUserFromLocalStorage() {
    try {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    } catch {
        return null;
    }     
}



function App() {
    const [userData, setUserData] = useState(getUserFromLocalStorage);
    
    const handleLoginUser = (newUser) => {
    setUserData(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
};

    const handleLogoutUser = () => {
        setUserData(null);
        localStorage.removeItem("user");
    }

    return (
        <>
            <GlobalStyle/>
            <AppRoutes userData={userData}
                       onLogin={handleLoginUser}
                       onLogout={handleLogoutUser}/>
        </>
    )
}
export default App

