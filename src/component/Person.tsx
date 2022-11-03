import { profile } from '../config';
import { MbButton } from './'
import './Person.css';

type PersonProps = {
  profileData: profile
}
const Person = ({profileData}:PersonProps) => {
  return (
    <div className='person-container'>
      <div className='person-image'>
        <img src='/img/prof.jpg' alt={`${profileData.name}`} />
      </div>
      <div className='person-details'>
        <h1>{profileData.name} - {profileData.title}</h1>
        {profileData.deets.map((deet) => <p key={deet}>{deet}</p>)}
        <MbButton type='GH' text='My Github' link={profileData.links.github} />
        <MbButton type='LI' text='Connect on LinkedIn' link={profileData.links.linkedin} />
      </div>
    </div>
  )
}

export default Person;
