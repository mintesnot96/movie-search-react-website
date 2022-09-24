import React from "react";
import "./App.css";
import 'tachyons';

const Card = (props) => {
//const Card = (name, email, id) => {
  const {name, email, id}=props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}`}/>
      <div>
        <h2 className="t1">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
