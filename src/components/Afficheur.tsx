import './Afficheur.css'

interface props{
  text:string,
}

const Afficheur = ({text}:props) => {
  return (
    <>
      <div className='container'>
        <div className='Afficheur '>
          <code id='result' >{text}</code>
        </div>
      </div>
    </>
  )
}

export default Afficheur