import React from "react";
import "../../../App.css";
import "./Vaccine_Staff_Home.css";

function Vaccine_History_Card(props) {

    const vdate = props.vaccineData.vaccineTime
    const vaccineDate = new Date(vdate);
    const date = new Date();
    console.log("transFusion",vaccineDate);
    console.log("Now",date);

    function getMonthDifference(startDate, endDate) {
        return (
          endDate.getMonth() -
          startDate.getMonth() +
          12 * (endDate.getFullYear() - startDate.getFullYear())
        );
      }

      let monthDiff = getMonthDifference(vaccineDate,date);

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

      <div className="vaccineDiv">
        <h4>Vaccine name:</h4> <p>{props.vaccineData.vaccineName} <h5> ({props.vaccineData.vaccineDoseNum}) </h5> </p>
        <h4>Diseases:</h4> <h5>{props.vaccineData.vaccineDisease}</h5>
      </div>

      <div className="vaccinestaffDiv">
        <h5>Vaccinated by:</h5>
        <h5>{props.vaccineData.firstname} {props.vaccineData.lastname}</h5>
        <h5>{props.vaccineData.hospitalname}</h5>
      </div>


        <div className="date_time">
          <h6>
            Date & Time (MM/DD/YY): {props.vaccineData.vaccineTime}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Vaccine_History_Card;