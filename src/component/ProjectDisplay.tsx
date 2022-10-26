import { Link } from "react-router-dom";
// style
import './ProjectDisplay.css';
// types
import { project } from '../config'

type ProjectDisplayTypes = {
  projectData: project[]
}
const ProjectDisplay = ({projectData}:ProjectDisplayTypes) => {
  return (
    <div className='project-container'>
      {projectData.map((pData)=> <div className='project-card' key={pData.name}>
        <div className='project-card-inner'>
          <div className='project-card-preview'>
            <div>Placeholder</div>
          </div>
          <div>{pData.name}</div>
          <div>{pData.description}</div>
          <Link to={`/${pData.name}`}>{pData.name}</Link>
        </div>
      </div>)}
    </div>
  )
}

export default ProjectDisplay;