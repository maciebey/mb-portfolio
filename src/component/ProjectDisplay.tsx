import { Link } from "react-router-dom";
// style
import './ProjectDisplay.css';
// types
import { tags, project } from '../config'
import { useEffect, useLayoutEffect, useRef, useState } from "react";

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
  const target = "Person Lastname - "
  const [isStuck, setIsStuck] = useState(false);
  const [stringy, setStringy] = useState("")
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(isStuck && stringy !== target) {
      setTimeout(() => {
        setStringy(s => {
          const nextChar = target[s.length]
          return s + nextChar
        });
      }, 50);
    } else if (!isStuck && stringy !== "") {
      setTimeout(() => {
        setStringy(s => s.substring(0, s.length-1));
      }, 30);
    }
  },[isStuck, stringy])

  // we really need a :stuck css selector :'(
  useLayoutEffect(() => {
    let fixedTop = stickyRef.current!.offsetTop
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        setIsStuck(true)
      } else {
        setIsStuck(false)
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])

  return (
    <>
    <div ref={stickyRef} className={`project-header ${isStuck ? "stuck" : ""}`}>
      <h2>{stringy}Public Portfolio</h2>
    </div>
    <div className='project-container'>
      <div>
      {projectData.map((pData)=> <div className='project-card' key={pData.name}>
        <div className='project-card-inner'>
          <div className='project-card-preview'>
            <img src={`/img/${pData.image}`} />
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