import { Link } from "react-router-dom";
// style
import './ProjectDisplay.css';
// types
import { tags, project } from '../config'
import { useLayoutEffect, useRef } from "react";

const Tag = ({tag}:{tag:tags}) => {
  let classNames = "tag ";
  let logo, displayText;
  if (tag === tags.TypeScript) {
    classNames += "typescript";
    logo = "logo192.png";
    displayText = "TypeScript";
  }
  else if (tag === tags.React) {
    classNames += "react";
    logo = "logo192.png";
    displayText = "React";
  }
  else {
    classNames += "undef";
    logo = "logo192.png";
    displayText = `Undefined Tag: ${tag}`;
  }

  return (
    <div className={classNames}><img src={`/${logo}`} />{displayText}</div>
  )
}

type ProjectDisplayTypes = {
  projectData: project[]
}
const ProjectDisplay = ({projectData}:ProjectDisplayTypes) => {
  const stickyRef = useRef<HTMLDivElement>(null)

  // we really need a :stuck css selector :'(
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
          {pData.tags.length > 0 && <div className='project-tags'>{pData.tags.map((t)=><Tag tag={t} key={`${pData.name}_${t}`} />)}</div>}
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