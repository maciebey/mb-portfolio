import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
// component
import { Person, ProjectDisplay } from './component'
// style
import './App.css';
// data
import { projectData } from './config'

function App() {
  const { id } = useParams<{ id: string }>();
  const [projects] = useState(projectData)
  const navigate = useNavigate();

  useEffect(()=>{
    if (id) {
      // when id is set and the modal is open stop scroll
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [id])

  const closeInfo = () => {
    navigate(-1)
  }
  return (
    <div className="App">
      <Person />
      <ProjectDisplay projectData={projects}/>

      <div className={`info ${id ? "": "hide"}`}>
        <div className='project-card-large'>
          <button onClick={closeInfo}>X</button>
          <div>Hello {id}</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
