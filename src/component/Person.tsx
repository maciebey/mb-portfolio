import './Person.css';

type PersonProps = {}
const Person = ({}:PersonProps) => {
  return (
    <div className='person-container'>
      <div className='person-image'>
        <img src='/img/profile.jpg' />
      </div>
      <div className='person-details'>
        <h1>Person Lastname - Job Title</h1>
        <p>Oh wow</p>
        <p>Truely a beautiful site</p>
        <p>Look at that rotating gradient wow</p>
      </div>
    </div>
  )
}

export default Person;