import React from "react";
import "../../../App.css";
import "./Report_Staff_Home.css";

function Blood_Transfusion_Card(props) {

    const tdate = props.booldTransfusionData.booldtransfusionTime
    const transfusionDate = new Date(tdate);
    const date = new Date();
    console.log("transFusion",transfusionDate);
    console.log("Now",date);

    function getMonthDifference(startDate, endDate) {
        return (
          endDate.getMonth() -
          startDate.getMonth() +
          12 * (endDate.getFullYear() - startDate.getFullYear())
        );
      }

      const monthDiff = getMonthDifference(transfusionDate,date);

  return (
    <>
      <div className="card">
        <h4> Last blood transfusion: {monthDiff} months ago. </h4>
        <h4>Blood transfusion amount: {props.booldTransfusionData.booldtransfusionAmount} Litre</h4>

        <h5>Blood transfused by: {props.booldTransfusionData.firstname} {props.booldTransfusionData.lastname} </h5>
        <h5>Hospital Name: {props.booldTransfusionData.hospitalname}</h5>

        <div className="date_time">
          <h6>
            Date & Time (MM/DD/YY): {props.booldTransfusionData.booldtransfusionTime}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Blood_Transfusion_Card;