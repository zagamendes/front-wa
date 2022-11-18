import React, { useState } from "react";

import { createContext } from "react";
import { Movie } from "../@types/movie";

interface modalContextProps {
  showModal: boolean;
  setShowModal: (_: boolean) => void;
  chosenMovie: Movie | null;
  setChosenMovie: (_: Movie | null) => void;
}
export const modalContext = createContext<modalContextProps>(
  {} as modalContextProps
);
const ModalProvider: React.FC<any> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [chosenMovie, setChosenMovie] = useState<Movie | null>(null);

  return (
    <modalContext.Provider
      value={{
        showModal,
        setShowModal,
        chosenMovie,
        setChosenMovie,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
