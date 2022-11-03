import { useEffect, useLayoutEffect, useRef, useState } from "react";
// style
import './ProjectDisplay.css';
// types
import { profile } from '../config';


type StickyHeaderTypes = {
  profileData: profile
}
const StickyHeader = ({profileData}:StickyHeaderTypes) => {
  const target = profileData.name + ' - '
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
  },[isStuck, stringy, target])

  // we really need a :stuck css selector :'(
  useLayoutEffect(() => {
    if (!stickyRef.current || !stickyRef.current.parentElement) return;
    const fixedTop = stickyRef.current.offsetTop
    const appElement = stickyRef.current.parentElement
    const fixedHeader = () => {
      if (appElement.scrollTop > fixedTop) {
        setIsStuck(true)
      } else {
        setIsStuck(false)
      }
    }
    appElement.addEventListener('scroll', fixedHeader)
  }, [])

  return (
    <div ref={stickyRef} className={`project-header ${isStuck ? "stuck" : ""}`}>
      <h2>{stringy}Public Portfolio</h2>
    </div>
  )
}

export default StickyHeader;
