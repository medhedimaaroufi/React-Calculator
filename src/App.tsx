import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Calculator from './components/Calculator';  // Import the Calculator component
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App row'>
      <Calculator />  {/* Use the component with an uppercase first letter */}
    </div>
  );
}

export default App;

