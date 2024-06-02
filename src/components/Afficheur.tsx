import './Afficheur.css'

interface props{
  text:string,
  op:string
}

const Afficheur = ({text,op}:props) => {
  return (
    <>
      <div className='container'>
        <div className='operator'>{op}</div>
        <div className='Afficheur '>
          <code id='result' >{text}</code>
        </div>
      </div>
    </>
  )
}

export default Afficheur