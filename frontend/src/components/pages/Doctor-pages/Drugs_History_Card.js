import React from "react";
import "../../../App.css";
import "./Doctor_Home.css";

function Drug_History_Card(props) {
  return (
    <>
      <div className="card">
        <h4>
          {props.drugsData.Dfirstname}{" "}
          {props.drugsData.Dlastname}
        </h4>
        <h5>{props.drugsData.hospitalname}</h5>

        <div className="suggestionDiv"> 
          <p>{props.drugsData.Drugs}</p>
        </div>

        <div className="date_time">
          <h6>
            Date & Time : {props.drugsData.DrugTime}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Drug_History_Card;