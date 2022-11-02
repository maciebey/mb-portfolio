import { profile } from '../config';
import './Person.css';

type PersonProps = {
  profileData: profile
}
const Person = ({profileData}:PersonProps) => {
  return (
    <div className='person-container'>
      <div className='person-image'>
        <img src='/img/prof.jpg' alt='person lastname' />
      </div>
      <div className='person-details'>
        <h1>Person Lastname - Job Title</h1>
        {profileData.deets.map((deet) => <p>{deet}</p>)}
      </div>
    </div>
  )
}

export default Person;