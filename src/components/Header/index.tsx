import React from "react";
import { MDBContainer, MDBNavbar } from "mdb-react-ui-kit";

const Header: React.FC = () => {
  return (
    <MDBNavbar style={{ background: "#020202" }}>
      <MDBContainer fluid className="justify-content-center">
        <h1 className="text-center text-white">Galeria</h1>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
