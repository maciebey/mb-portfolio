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
        <MbButton type='GH' text='gh link' link={profileData.links.github} />
        <MbButton type='LI' text='li link' link={profileData.links.linkedin} />
      </div>
    </div>
  )
}

export default Person;
