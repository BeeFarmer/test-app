import "./styles.css";
import { useState } from 'react';

const codeMap = {
  'China': '+86',
  'USA': '+1'
};

const defaultOption = '==Select Country==';

export default function App() {
  const [input, setInput] = useState('');
  const [country, setCountry] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleSelect = (e) => {
    const curCountry = e.target.value;
    setCountry(curCountry);
    console.log(codeMap[curCountry] + input);
    setInput(
      input[0] === '+'
      ? codeMap[curCountry] + input.slice(codeMap[country].length)
      : codeMap[curCountry] + input
    );
  }

  return (
    <div className="App">
      <select value={country ? country : defaultOption} onChange={handleSelect}>
        <option disabled hidden>==Select Country==</option>
        <option value="China">China</option>
        <option value="USA">USA</option>
      </select>
      <input onChange={handleInput} value={input}/>
    </div>
  );
}
