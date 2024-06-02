import './Button.css'

interface props{
    value: string,
    width?: 1|2,
    states: any
}

const Button = ({width, value, states}: props) => {
  function handleButtonClick() {
    switch(value) {
      case 'AC':
        states[0][1](0);
        states[1][1]('');
        states[2][1]('');
        states[3][1]('');
        break;
      case 'DEL':
        if (states[2][0]==='='){
          states[2][1](''); 
          states[3][1]('');
          states[0][1](0);
          states[1][1]('');
        }
        if (states[3][0]) {states[3][1](''); states[0][1](states[1][0]);}
        else if (states[2][0]) states[2][1]('');
        else if (states[1][0]) {states[1][1]('');states[0][1](0);}
        else states[0][1](0);
        break;
      case '=':
        if(!states[0][0]&&!states[1][0]) return;
        states[0][1](eval(states[1][0]+states[2][0]+states[3][0]));
        states[1][1](eval(states[1][0]+states[2][0]+states[3][0]));
        states[2][1]('=');
        states[3][1]('');
        break;
      case '+':
        states[2][1]('+');
        if (states[3][0]) {
          states[0][1](eval(states[1][0]+states[2][0]+states[3][0]));
          states[1][1](eval(states[1][0]+states[2][0]+states[3][0]));
          states[3][1]('');
        }
        break;
      case '-':
        states[2][1]('-');
        if (states[3][0]) {
          states[0][1](eval(states[1][0]+states[2][0]+states[3][0]));
          states[1][1](eval(states[1][0]+states[2][0]+states[3][0]));
          states[3][1]('');
        }
        break;
      case '*':
        states[2][1]('*');
        if (states[3][0]) {
          states[0][1](eval(states[1][0]+states[2][0]+states[3][0]));
          states[1][1](eval(states[1][0]+states[2][0]+states[3][0]));
          states[3][1]('');
        }
        break;
      case '/':
        states[2][1]('/');
        if (states[3][0]) {
          states[0][1](eval(states[1][0]+states[2][0]+states[3][0]));
          states[1][1](eval(states[1][0]+states[2][0]+states[3][0]));
          states[3][1]('');
        }
        break;
      default:
        if (value==='.'&&states[0][0].includes('.')) return;
        if (value==='.'&&states[0][0]) states[0][1]('0.');
        if (states[3][0] || states[2][0]) {
          states[3][1](states[3][0]+value);
          states[0][1](states[3][0]+value);
        }
        else if (states[2][0]==='=') {
          states[1][1](value);
          states[0][1](value);
        }
        else{
          states[1][1](states[1][0]+value);
          states[0][1](states[1][0]+value);
        }
      }
  }

  return (
    <div onClick={handleButtonClick} className={'btn btn-secondary bt Button'+width}>
        <code>
            {value}
        </code>
    </div>
  )
}

export default Button;