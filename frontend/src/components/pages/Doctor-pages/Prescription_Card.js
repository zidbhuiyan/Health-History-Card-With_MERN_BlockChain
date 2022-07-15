import React from "react";
import "../../../App.css";
import "./Doctor_Home.css";

function Prescription_Card(props) {
  return (
    <>
      <div className="card">
        <h4>
          {props.prescriptionData.Dfirstname}{" "}
          {props.prescriptionData.Dlastname}
        </h4>
        <h5>{props.prescriptionData.hospitalname}</h5>

        <div className="bloodTransfusionDiv">
        <h4><embed src={props.prescriptionData.srcUrl}  /></h4>
        <a href={props.prescriptionData.srcUrl}>Click here to view.</a>
      </div>

        <div className="date_time">
          <h6>
            Date & Time : {props.prescriptionData.Time}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Prescription_Card;