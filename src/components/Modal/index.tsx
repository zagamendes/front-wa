import React, { FC, useContext, useRef, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { modalContext } from "../../contextos/Modal";

const Modal: React.FC<any> = () => {
  const { showModal, setShowModal, chosenMovie, setChosenMovie } =
    useContext(modalContext);

  const closeModal = () => {
    setShowModal(!showModal);
    setChosenMovie(null);
  };

  return !chosenMovie ? null : (
    <MDBModal
      show={showModal}
      setShow={setShowModal}
      onHide={() => setChosenMovie(null)}
    >
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader className="border-bottom-0">
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={() => closeModal()}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody className="d-flex flex-column">
            <div className="ctn-img px-2 py-2 align-self-center d-flex justify-content-center">
              <img className="img-fluid" src={chosenMovie.banner} />
            </div>
            <div>
              <h2 className="text-center" style={{ color: "#d8315b" }}>
                {chosenMovie.title}
              </h2>
              <p style={{ color: "#610f7f" }}>{chosenMovie.description}</p>
            </div>
            <div>
              <p style={{ color: "#d8315b" }}>
                Director: {chosenMovie.director}
              </p>
              <p style={{ color: "#d8315b" }}>
                Producer: {chosenMovie.producer}
              </p>
            </div>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};
export default Modal;
