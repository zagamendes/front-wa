import { MDBBtn } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { AlertContext } from "../../contextos/AlertContext";

const Alert: React.FC = () => {
  const { showAlert, setShowAlert, message, type } = useContext(AlertContext);
  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };
  return (
    <div
      className={`alert alert-${type} alert-dismissible d-flex justify-content-between align-items-center ${
        !showAlert ? "d-none" : ""
      }`}
    >
      <p className="m-0">{message}.</p>
      <MDBBtn color="muted" onClick={() => toggleAlert()}>
        &times;
      </MDBBtn>
    </div>
  );
};

export default Alert;
