import React from "react";

const LifePath = (props) => {
  const { pathNumber, title, description } = props;
  return (
    <div
      style={{
        padding: "1em 2em",
        margin: "2em 4em",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
      className="bg-black text-white opacity-2/3"
    >
      <h1 className="bg-black text-white">{pathNumber}</h1>
      <h2 className=" bg-black text-white">{title}</h2>
      <p className="bg-black text-white">{description}</p>
    </div>
  );
};

export default LifePath;
