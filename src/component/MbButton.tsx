import './MbButton.css';

type ButtonProps = {
  type: string,
  text: string,
  link: string
}
const MbButton = ({type, text, link}:ButtonProps) => {
  return (
    <div className={`mb-button ${type}`}>
      <a href={link}>
        <img src={`/icons/link.svg`} alt={`link to`}/>
        <div>{text}</div>
      </a>
    </div>
  )
}

export default MbButton;
