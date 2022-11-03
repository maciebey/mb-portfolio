import { profile } from '../config';
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
      </div>
    </div>
  )
}

export default Person;