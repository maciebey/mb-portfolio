import { Link } from "react-router-dom";
// style
import './ProjectDisplay.css';
// types
import { project } from '../config'
import { useLayoutEffect, useRef } from "react";

type ProjectDisplayTypes = {
  projectData: project[]
}
const ProjectDisplay = ({projectData}:ProjectDisplayTypes) => {
  const stickyRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    let fixedTop = stickyRef.current!.offsetTop
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        stickyRef.current!.classList.add('stuck')
      } else {
        stickyRef.current!.classList.remove('stuck')
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])

  return (
    <>
    <div ref={stickyRef} className='project-header'>
      <h2 className="vis-on-stuck">Person Lastname&nbsp;-&nbsp;</h2>
      <h2>Public Portfolio</h2>
    </div>
    <div className='project-container'>
      <div>
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
    </div>
    </>
  )
}

export default ProjectDisplay;