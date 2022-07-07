import React from 'react';
import '../../../App.css';
import'./Doctor_Home.css'

function Doctor_Sugestions_Card( props ) {
  
  return (
    <>
    <div className='card'>

        <h4>{props.doctorSuggestionsData.Dfirstname} {props.doctorSuggestionsData.Dlastname}</h4>
        <h6>{props.doctorSuggestionsData.hospitalname}</h6>
        
        <div className='suggestionDiv'>
            <div className='suggestionTittle'>
            <h4>Suggestions:</h4>
            </div>
        <p>{props.doctorSuggestionsData.Dsuggestios}</p>
        </div>

        <h6>Date: {props.doctorSuggestionsData.DsuggestiosTime}</h6>
     
    </div>
    </>
  );
}

export default Doctor_Sugestions_Card;