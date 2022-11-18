import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer: React.FC = () => {
  return (
    <MDBFooter
      className="text-center text-lg-left"
      style={{ background: "#020202" }}
    >
      <div className="text-center p-3 text-white">
        &copy; {new Date().getFullYear()} Copyright
      </div>
    </MDBFooter>
  );
};

export default Footer;
