import React from 'react';

export const userContext = React.createContext();

export const userStorage = ({ children }) => {
  return (
    <userContext.Provider value={{ user: 'Bill' }}>
      {children}
    </userContext.Provider>
  );
};
