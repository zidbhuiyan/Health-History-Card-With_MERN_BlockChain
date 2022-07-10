import React from "react";
import "../../../App.css";
import "./Doctor_Home.css";

function Family_History_Card(props) {
  return (
    <>
      <div className="card">

        <div className="bloodTransfusionDiv"> 
          <p>Relation: {props.familyData.Relation}</p>
          <p>Disease: {props.familyData.Disease}</p>
        </div>

        <div className="vaccinestaffDiv">
      <h5>Updated by:</h5><h5>{props.familyData.Dfirstname} {props.familyData.Dlastname}</h5>
        <h5>{props.familyData.hospitalname}</h5>
      </div>

        <div className="date_time">
          <h6>
            Date & Time : {props.familyData.Time}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Family_History_Card;