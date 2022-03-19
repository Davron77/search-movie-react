import React from "react";

function Movis({ Title, Year, Type, Poster }) {
  return (
    <>
      <div className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
          <img src={Poster} alt={Title} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {Title}
          </span>
          <p>
            {Year} <span className="right">{Type}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Movis;
