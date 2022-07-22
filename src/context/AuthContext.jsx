import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(auth && auth.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(auth ? auth.currentUser : null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
