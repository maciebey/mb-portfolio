import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
// component
import { Person, ProjectDisplay, StickyHeader } from './component'
// style
import './App.css';
// data
import { profileData, projectData } from './config'

function App() {
  const { id } = useParams<{ id: string }>();
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
      <Person profileData={profileData} />
      <StickyHeader profileData={profileData} />
      <ProjectDisplay projectData={projectData} />

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
