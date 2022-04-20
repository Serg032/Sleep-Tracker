import React, { useState } from "react";
import './create.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CreatePhase = () => {

  const [date, setDate] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [hours, setHours] = useState('')
  const [quality, setQuality] = useState('')

  const questions = document.querySelector('#form')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (date === ''|| start === ''|| end === '' || hours === '' || quality === '') {
        alert('Must complete all the fields')
        return
    } else {
        const requestOptions = {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({
                "date": date,
                "start": start,
                "end": end,
                "hours": hours,
                "quality": quality
            })
        };
        
          fetch("http://localhost:8000/phases", requestOptions)
          .then((response) => response.json())
          .then((json) => console.log(json.data))
          .catch((error) => {
              console.error(`ERROR`, error)
          });
    
        questions.reset()
    }

    
  }

  

  return (
    <section id="main-create">
      <h1 id="title">Create a sleep phase</h1>
      <div id = 'forForm'>
      <form onSubmit={handleSubmit} id = 'form-create'>
        <div id="fields">
            <div id="date">
                <label htmlFor="date">
                    Date: 
                </label>
                <input onChange={(event) => setDate(event.target.value)} 
                id="date" 
                type="text" 
                placeholder="...2022-02-22" />
            </div>
            <div id = 'start'>
                <label htmlFor="start">
                    Start at: 
                </label>
                <input 
                onChange={(event) => setStart(event.target.value)}
                id="start" 
                type="text" 
                placeholder="...22:00:00" />
            </div>
            <div id = 'end'>
            <label htmlFor="end">
                    End at: 
                </label>
                
                <input onChange={(event) => setEnd(event.target.value)} 
                id="end" 
                type="text" 
                placeholder="...06:00:00" />
            </div>
            <div id = 'hours'>
            <label htmlFor="hours">
                    Hours: 
                </label>
                <input 
                onChange={(event) => setHours(event.target.value)}
                id="hours" 
                type="text" 
                placeholder="...8" />
            </div>
            <div id = 'quality'>
            <label htmlFor="quality">
                    Quality: 
                </label>
                <input onChange={(event) => setQuality(event.target.value)} type="text" id="quality" placeholder="...great" />
              
            </div>
        </div>
        <button type="submit"><FontAwesomeIcon icon={faCheck}/></button>
    </form>
      </div>

    </section>
  )
}

export default CreatePhase