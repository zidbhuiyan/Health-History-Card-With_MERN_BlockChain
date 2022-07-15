import React from "react";
import "../../../App.css";
import "./Report_Staff_Home.css";

function Investigation_Profile_Card(props) {

  console.log(props.investigationData);

    const idate = props.investigationData.Time
    const inDate = new Date(idate);
    const date = new Date();

    function getMonthDifference(startDate, endDate) {
        return (
          endDate.getMonth() -
          startDate.getMonth() +
          12 * (endDate.getFullYear() - startDate.getFullYear())
        );
      }

      let monthDiff = getMonthDifference(inDate,date);

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
        <h4><embed src={props.investigationData.srcUrl}  /></h4>
        <a href={props.investigationData.srcUrl}>Click here to view.</a>
      </div>

      <div className="vaccinestaffDiv">
      <h5>Updated by:</h5><h5> {props.investigationData.firstname} {props.investigationData.lastname} </h5>
        <h5>{props.investigationData.hospitalname}</h5>
      </div>

        <div className="date_time">
          <h6>
            Date & Time : {props.investigationData.Time}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Investigation_Profile_Card;