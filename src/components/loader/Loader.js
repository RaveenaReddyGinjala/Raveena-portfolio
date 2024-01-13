import React from "react";
import "./Loader.css";

function Loader(props) {
  return <div className={props.isloading ? "loading" : "no-loading"}></div>;
}

export default Loader;
