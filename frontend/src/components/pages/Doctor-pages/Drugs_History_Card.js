import React from "react";
import "../../../App.css";
import "./Doctor_Home.css";

function Drug_History_Card(props) {


  const drugNameArr = JSON.parse(props.drugsData.Drugs);
  const drugDayArr = JSON.parse(props.drugsData.DrugsDay);

  const numArr = []

  for(var i = 0;i<drugNameArr.length;i++){
    numArr.push(i)
  }
 
  return (
    <>
      <div className="card">
        <h4>
          {props.drugsData.Dfirstname}{" "}
          {props.drugsData.Dlastname}
        </h4>
        <h5>{props.drugsData.hospitalname}</h5>

        {
          numArr.map((num)=>(
            <>
            <div className="suggestionDiv"> 
          <p>{drugNameArr[num]}</p>
          <p>Duration: {drugDayArr[num]} Days</p>
          <p>&nbsp;</p>
        </div>
            </>
          ))
        }

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