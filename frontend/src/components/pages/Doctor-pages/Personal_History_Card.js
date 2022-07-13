import React from "react";
import "../../../App.css";
import "./Doctor_Home.css";

function Personal_History_Card(props) {
    const pdate = props.personalData.Time
    const personalDate = new Date(pdate);
    const date = new Date();

    function getMonthDifference(startDate, endDate) {
        return (
          endDate.getMonth() -
          startDate.getMonth() +
          12 * (endDate.getFullYear() - startDate.getFullYear())
        );
      }

      let monthDiff = getMonthDifference(personalDate,date);

      let monthString="";

      if(monthDiff>1){
       monthString = monthDiff+" months ago."
      }
      else{
        monthString = "Less than one month."
      }
  return (
    <>
      <div className="card">

      <div className="date_time">
        <h5>{monthString} </h5>
        </div>

        <div className="bloodTransfusionDiv"> 
         <p>Problem: {props.personalData.Problem}</p>
          <p>Type: {props.personalData.ProblemType}</p>
         
        </div>

        <div className="vaccinestaffDiv">
      <h5>Updated by:</h5><h5>{props.personalData.Dfirstname} {props.personalData.Dlastname}</h5>
        <h5>{props.personalData.hospitalname}</h5>
      </div>

        <div className="date_time">
          <h6>
            Date & Time : {props.personalData.Time}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Personal_History_Card;