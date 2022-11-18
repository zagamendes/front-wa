import React from "react";

// import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
    </div>
  );
};

export default Loading;
