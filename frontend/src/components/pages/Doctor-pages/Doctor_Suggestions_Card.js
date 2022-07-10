import React from "react";
import "../../../App.css";
import "./Doctor_Home.css";

function Doctor_Sugestions_Card(props) {
  return (
    <>
      <div className="card">
        <h4>
          {props.doctorSuggestionsData.Dfirstname}{" "}
          {props.doctorSuggestionsData.Dlastname}
        </h4>
        <h5>{props.doctorSuggestionsData.hospitalname}</h5>

        <div className="suggestionDiv">
          <p>{props.doctorSuggestionsData.Dsuggestios}</p>
        </div>

        <div className="date_time">
          <h6>
            Date & Time : {props.doctorSuggestionsData.DsuggestiosTime}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Doctor_Sugestions_Card;
