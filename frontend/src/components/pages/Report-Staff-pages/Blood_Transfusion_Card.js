import React from "react";
import "../../../App.css";
import "./Report_Staff_Home.css";

function Blood_Transfusion_Card(props) {

    const tdate = props.booldTransfusionData.booldtransfusionTime
    const transfusionDate = new Date(tdate);
    const date = new Date();

    function getMonthDifference(startDate, endDate) {
        return (
          endDate.getMonth() -
          startDate.getMonth() +
          12 * (endDate.getFullYear() - startDate.getFullYear())
        );
      }

      let monthDiff = getMonthDifference(transfusionDate,date);

      let monthString="";

      if(monthDiff>1){
       monthString = monthDiff+" months ago."
      }
      else{
        monthString = "Less than one month ago."
      }

  return (
    <>
      <div className="card">

        <div className="date_time">
        <h5>{monthString} </h5>
        </div>
        
      <div className="bloodTransfusionDiv">
        <h5>Amount: {props.booldTransfusionData.booldtransfusionAmount}</h5>
        <h5>Type: {props.booldTransfusionData.booldtransfusionType}</h5>
      </div>

      <div className="vaccinestaffDiv">
      <h5>Updated by:</h5><h5> {props.booldTransfusionData.firstname} {props.booldTransfusionData.lastname} </h5>
        <h5>{props.booldTransfusionData.hospitalname}</h5>
      </div>

        <div className="date_time">
          <h6>
            Date & Time : {props.booldTransfusionData.booldtransfusionTime}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Blood_Transfusion_Card;