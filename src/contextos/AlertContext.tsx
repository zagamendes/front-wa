import React, { useState } from "react";

import { createContext } from "react";

interface AlertContextProps {
  showAlert: boolean;
  setShowAlert: (_: boolean) => void;
  message: string;
  setMessage: (_: string) => void;
  type: string;
  setType: (_: string) => void;
}
export const AlertContext = createContext<AlertContextProps>(
  {} as AlertContextProps
);
const AlertProvider: React.FC<any> = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        setShowAlert,
        message,
        setMessage,
        type,
        setType,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
