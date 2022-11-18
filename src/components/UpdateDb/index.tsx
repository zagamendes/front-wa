import React, { useContext, useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import api from "../../utils/api";
import { bancoContext } from "../../contextos/Banco";
import { AlertContext } from "../../contextos/AlertContext";

export default function UpdateDb() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeliting] = useState(false);
  const { setwasUpdated, wasUpdated } = useContext(bancoContext);
  const { setMessage, showAlert, setShowAlert, setType } =
    useContext(AlertContext);

  const updateDb = async () => {
    try {
      setIsUpdating(true);
      const { data } = await api.post("updatedb").catch((e) => {
        throw new Error(e);
      });
      setIsUpdating(false);
      setMessage(data.message);
      setShowAlert(!showAlert);
      setType(data.type);
      setwasUpdated(!wasUpdated);
    } catch (e) {
      console.log(e);
      setMessage(e as string);
      setShowAlert(!showAlert);
    }
  };
  const deleteMovies = async () => {
    try {
      setIsUpdating(true);
      setIsDeliting(true);
      const { data } = await api.delete("deleteMovies").catch((e) => {
        throw new Error(e);
      });
      updateStates(data);
    } catch (e) {
      console.log(e);
      setMessage(e as string);
      setShowAlert(!showAlert);
      setType("danger");
    }
  };
  const updateStates = (data: any) => {
    setIsUpdating(false);
    setMessage(data.message);
    setShowAlert(!showAlert);
    setType(data.type);
    setwasUpdated(!wasUpdated);
    setIsDeliting(false);
  };
  return (
    <div className="d-flex justify-content-center">
      <MDBBtn
        className="me-1"
        color={isUpdating ? "info" : "success"}
        onClick={() => updateDb()}
        disabled={isUpdating}
      >
        {isUpdating ? "Atualizando banco de dados" : "Atualizar banco de dados"}
      </MDBBtn>
      <MDBBtn
        className="me-1"
        color={"danger"}
        onClick={() => deleteMovies()}
        disabled={isUpdating}
      >
        {isDeleting ? "Deletando filmes" : "Deletar filmes"}
      </MDBBtn>
    </div>
  );
}
