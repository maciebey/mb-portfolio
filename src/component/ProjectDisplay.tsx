import { Link } from "react-router-dom";
// style
import './ProjectDisplay.css';
// types
import { tags, project } from '../config';


const Tag = ({tag}:{tag:tags}) => {
  let classNames = "tag ";
  let logo, displayText;
  switch (tag) {
    case tags.TypeScript:
      classNames += "typescript";
      logo = "ts.svg";
      displayText = "TypeScript";
      break;
    case tags.React:
      classNames += "react";
      logo = "react.png";
      displayText = "React";
      break;
    case tags.Redux:
      classNames += "redux";
      logo = "redux.svg";
      displayText = "Redux";
      break;
    case tags.Heroku:
      classNames += "heroku";
      logo = "heroku.svg";
      displayText = "Heroku";
      break;
    default:
      classNames += "undef";
      logo = "logo192.png";
      displayText = `Undefined Tag: ${tag}`;
  }

  return (
    <div className={classNames}>
      <img src={`/icons/${logo}`} alt={`${displayText} logo`}/>
      <div>{displayText}</div>
    </div>
  )
}

type ProjectDisplayTypes = {
  projectData: project[]
}
const ProjectDisplay = ({projectData}:ProjectDisplayTypes) => {
  return (
    <div className='project-container'>
      <div>
      {projectData.map((pData)=> <div className='project-card' key={pData.name}>
        <div className='project-card-inner'>
          <div className='project-card-preview'>
            <img src={`/img/${pData.image}`} alt={`preview of site ${pData.name}`} />
          </div>
          <div>{pData.name}</div>
          {pData.tags.length > 0 && <div className='project-tags'>{pData.tags.map((t)=><Tag tag={t} key={`${pData.name}_${t}`} />)}</div>}
          <div>{pData.description}</div>
          <Link to={`/${pData.name}`}>{pData.name}</Link>
        </div>
      </div>)}
      </div>
    </div>
  )
}

export default ProjectDisplay;