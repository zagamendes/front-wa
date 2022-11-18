import React, { useState } from "react";
import { createContext } from "react";
interface bancoContextProps {
  wasUpdated: boolean;
  setwasUpdated: (_: boolean) => void;
}
export const bancoContext = createContext<bancoContextProps>(
  {} as bancoContextProps
);

const BancoProvider: React.FC<any> = ({ children }) => {
  const [wasUpdated, setwasUpdated] = useState(false);
  return (
    <bancoContext.Provider value={{ wasUpdated, setwasUpdated }}>
      {children}
    </bancoContext.Provider>
  );
};

export default BancoProvider;
