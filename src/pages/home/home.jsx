import React, { useEffect, useState } from "react";
import PhaseCard from "../../components/phaseCard/phaseCard";
import './home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Home = () => {

  const params = useParams()


  const [phases, setPhases] = useState([])

  const [date, setDate] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [hours, setHours] = useState('')
  const [quality, setQuality] = useState('')

  const formContainer = document.querySelector('#formUp-container')
  const formCreateContainer = document.querySelector('#create-container')
  const formCreate = document.querySelector('#create-form')
  const updatedForm = document.querySelector('#form')

  const hideForm = () => {
    formContainer.style.transform = "translateX(-100%)"
    console.log('hided')
  }

  const showCreate = () => {
    formCreateContainer.style.transform = "translate(0)"
  }

  const hideCreate = () => {
    formCreateContainer.style.transform = "translateX(-100%)"
    console.log('hided')
  }

    useEffect(() => { 
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
  
      fetch(`http://localhost:8000/phases`, requestOptions)
        .then((response) => response.json())
        .then((json) => {
          setPhases(json);
          console.log(json);
        });
  }, [formCreateContainer])

  console.log(phases)

  const createPhaseTo = () => {
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
    
          formCreate.reset()
          setTimeout(() => {
            formCreateContainer.style.transform = "translateX(-100%)"
          }, 1000)

          
    }
  }

  const updateAPhase = () => {
    if (date === ''|| start === ''|| end === '' || hours === '' || quality === '') {
      alert('Must complete all the fields')
      return
  } else {
    const requestOptions = {
      method: "PUT",
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify({
          "date": date,
          "start": start,
          "end": end,
          "hours": hours,
          "quality": quality
      })
  };
  
    fetch(`http://localhost:8000/phases/${params.id}`, requestOptions)
    .then((response) => response.json())
    .then((json) => console.log(json.data))
    .catch((error) => {
        console.error(`ERROR`, error)
    });

    updatedForm.reset()
    setTimeout(() => {
      formCreateContainer.style.transform = "translateX(-100%)"
    }, 1000)
  }

  }

  return (
    <section id="home-container">
      <button onClick={showCreate} id="createFromc">Create new sleep phase</button>
      <div id="main-home">
        <h1 className="title" id="title">This is your Sleep data</h1>
        <div id="data-container">
            {phases.map((phase) => (
                <PhaseCard
                  id = {phase.id}
                  date = {phase.date}
                  start = {phase.start}
                  end = {phase.end}
                  hours = {phase.hours}
                  quality = {phase.quality}
              />
            ))}    
        </div>
      </div>
      {/* <div  id="formUp-container">
          <FontAwesomeIcon
          onClick={hideForm} 
          id="cross-icon" 
          icon={faCircleXmark}/>
      <form  id = 'form' onClick={updateAPhase}>
        <h2>Update the Phase</h2>
        <div id="fields-update">
            <div className="li-container" id="date">
                <label htmlFor="date">
                    Date: 
                </label>
                <input 
                className="input-update"
                onChange={(event) => setDate(event.target.value)} 
                id="date" 
                type="text" 
                placeholder="...2022-02-22" />
            </div> 
            <div className="li-container" id = 'start'>
                <label htmlFor="start">
                    Start at: 
                </label>
                <input 
                className="input-update"
                onChange={(event) => setStart(event.target.value)}
                id="start" 
                type="text" 
                placeholder="...22:00:00" />
            </div>
            <div  className="li-container" id = 'end'>
            <label htmlFor="end">
                    End at: 
                </label>
                
                <input 
                className="input-update"
                onChange={(event) => setEnd(event.target.value)} 
                id="end" 
                type="text" 
                placeholder="...06:00:00" />
            </div>
            <div className="li-container" id = 'hours'>
            <label htmlFor="hours">
                    Hours: 
                </label>
                <input
                className="input-update" 
                onChange={(event) => setHours(event.target.value)}
                id="hours" 
                type="text" 
                placeholder="...8" />
            </div>
            <div className="li-container" id = 'quality'>
            <label htmlFor="quality">
                    Quality: 
                </label>
                <input 
                className="input-update"
                onChange={(event) => setQuality(event.target.value)} 
                type="text" 
                id="quality" 
                placeholder="...great" />
              
            </div>
        </div>
        <button id="checker" type="submit"><FontAwesomeIcon icon={faCheck}/></button>
        <div>
          <p id="remember">Remember: You have to complete all the inputs to have a nice experience.</p>
        </div>
    </form>
      </div> */}
      <div id="create-container">
      <FontAwesomeIcon
          onClick={hideCreate} 
          id="cross-create-icon" 
          icon={faCircleXmark}/>
        <form id="create-form" onSubmit={createPhaseTo}>
          <h2>Create a Phase</h2>
          <div id="fields-create">
            <div className="lic-container" id="date">
                <label htmlFor="date">
                    Date: 
                </label>
                <input 
                onChange={(event) => setDate(event.target.value)}
                className="input-update"
                id="date" 
                type="text" 
                placeholder="...2022-02-22" />
            </div> 
            <div className="lic-container" id = 'start'>
                <label htmlFor="start">
                    Start at: 
                </label>
                <input 
                onChange={(event) => setStart(event.target.value)}
                className="input-update"
                id="start" 
                type="text" 
                placeholder="...22:00:00" />
            </div>
            <div  className="lic-container" id = 'end'>
            <label htmlFor="end">
                    End at: 
                </label>
                
                <input 
                onChange={(event) => setEnd(event.target.value)}
                className="input-update"
                id="end" 
                type="text" 
                placeholder="...06:00:00" />
            </div>
            <div className="lic-container" id = 'hours'>
            <label htmlFor="hours">
                    Hours: 
                </label>
                <input
                onChange={(event) => setHours(event.target.value)}
                className="input-update" 
                id="hours" 
                type="text" 
                placeholder="...8" />
            </div>
            <div className="lic-container" id = 'quality'>
            <label htmlFor="quality">
                    Quality: 
                </label>
                <input 
                onChange={(event) => setQuality(event.target.value)}
                className="input-update"
                type="text" 
                id="quality" 
                placeholder="...great" />
              
            </div>
        </div>
        <button type="submit"><FontAwesomeIcon icon={faCheck}/></button>

        </form>
      </div>

    </section>
      
  );
}

export default Home;
