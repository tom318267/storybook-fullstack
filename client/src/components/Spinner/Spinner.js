import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
  return (
    <Loader
      style={{ textAlign: "center", marginTop: "300px" }}
      type="Rings"
      color="#a80c03"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default Spinner;
