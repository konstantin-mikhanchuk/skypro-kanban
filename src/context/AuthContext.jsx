import { createContext, useState } from "react";

export const AuthContext = createContext();

function getUserFromLocalStorage() {
  try {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(getUserFromLocalStorage);
  const loginUser = (newUser) => {
    setUserData(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logoutUser = () => {
    setUserData(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
   );
}
