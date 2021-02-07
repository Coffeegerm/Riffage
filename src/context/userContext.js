import React, { useEffect, createContext, useState } from "react";
import auth from "@react-native-firebase/auth";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  //   return subscriber;
  // }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
