import React, { useState } from 'react';

type GlobalContextType = {
  apiUrl: string;
  setApiUrl: React.Dispatch<React.SetStateAction<string>>; // this is the setUser function type
};

export const GlobalContext = React.createContext<GlobalContextType>(null as any);

export const GlobalProvider: React.FC = ({ children }) => {
  const [apiUrl, setApiUrl] = useState('http://localhost:4000');

  return (
    <GlobalContext.Provider
      value={{
        apiUrl,
        setApiUrl,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
