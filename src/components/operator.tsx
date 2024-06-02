import './operator.css'

interface props{
    op:string
}

const Operator = ({op}:props) => {
  return (
    <div>{op}</div>
  )
}

export default Operator;