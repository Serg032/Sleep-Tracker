import React, { useEffect, useState } from "react";
import PhaseCard from "../../components/phaseCard/phaseCard";
import './home.css'

const Home = () => {

  const [phases, setPhases] = useState([])

    useEffect(() => { 
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
  
      fetch(`http://localhost:8000/phases`, requestOptions)
        .then((response) => response.json())
        .then((json) => {
          // json.setState()
          setPhases(json);
          console.log(json);
        });
  }, [])

  console.log(phases)

  return (
    <section>
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
    </section>
  );
}

export default Home;
