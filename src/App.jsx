import "./App.css";
import { GlobalStyle } from "./styled/GlobalStyle";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext"

function App() {
    return (
        
        <AuthProvider>
          <TaskProvider>
             <GlobalStyle/>
             <AppRoutes />
          </TaskProvider>
        </AuthProvider>
         
    );
}

export default App

