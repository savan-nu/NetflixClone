import React, { createContext, useState, useContext  } from "react";

export const movieContext = createContext();

export const MovieIdProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState("");

  return (
    <movieContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </movieContext.Provider>
  );
};



