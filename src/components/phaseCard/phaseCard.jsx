import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import './phaseCard.css'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const PhaseCard = (props) => {

  const phase = document.querySelector('#phase')

  const deletePhase = (event) => {
    
    const requestOptions = {
      method:'DELETE',
      headers: {
        'Content-Type':'application/json',
      }
    }

    fetch(`http://localhost:8000/phases/${props.id}`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log('Phase deleted')
      })
  }

  return (
    <form id="form-container">
      <tr key={props.id} id="phase" >
        {/* <td id="data">Id: {props.id}</td> */}
        <td id="data">Date: <strong>{props.date}</strong></td>
        <td id="data">Starts at: <strong>{props.start}h</strong></td>
        <td id="data">Wake up at: <strong>{props.end}h</strong></td>
        <td id="data">Hours: <strong>{props.hours}hs</strong></td>
        <td id="data">Quality: <strong>{props.quality}</strong></td>
        <td id="data" className="buttons">
          <div id="icons">
            <div  id="icon-container">
              <FontAwesomeIcon id="update" icon ={faPen}/>
            </div>
            <button type="submit" id="icon-container2" onClick={deletePhase}>
              <FontAwesomeIcon id="trash" icon = {faTrashCan}/>
            </button>
          </div>
      </td>
    </tr>
    </form>
    
  )
}
    
export default PhaseCard