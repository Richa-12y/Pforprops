import React from "react";

function ChildComponents({ imgUrl, name, jobdesc = "content writer" }) {
  return (
    <div className="card">
      <img src={imgUrl} alt="Avatar" style={{ width: "10%" }} />
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{jobdesc}</p>
      </div>
    </div>
  );
}

export default ChildComponents;
