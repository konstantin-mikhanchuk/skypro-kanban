import { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./styled/GlobalStyle";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
    const [ isAuth, setIsAuth ] = useState(false)
    return (
        <>
            <GlobalStyle/>
            <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth}/>
        </>
    )
}
export default App

