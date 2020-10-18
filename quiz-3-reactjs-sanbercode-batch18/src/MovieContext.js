import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {

  const [login, setLogin] = useState(localStorage.getItem('login') ? localStorage.getItem('login') : "");

  return (
    <MovieContext.Provider value={[login, setLogin]}>
      {props.children}
    </MovieContext.Provider>
  );
};

