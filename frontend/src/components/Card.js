import React from "react";

const Card = ({ imgLink }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card my-2 rounded-1">
          <img src={imgLink} className="card-img-top rounded" alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
