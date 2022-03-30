import { useState } from 'react';
import './App.css';

export default function App() {
  	const [calc, setCalc ] = useState('');
  	const [result, setResult ] = useState('');
  	const digitsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  	const operatorsArr = [ '+', '-', '/', '*', '.', '=' ];

  	const calcUpdates = (value) => {
	// Check if an operator is by itself or if the last value was an operator
	if (operatorsArr.includes(value) &  calc === '' ||
		operatorsArr.includes(value) &  operatorsArr.includes(calc.slice(-1))) {
		  return; 
		}
	
	// display values clicked on the screen
	setCalc(calc + value);

	// Evauate the calc + value
	if (!operatorsArr.includes(value)) {
		// eslint-disable-next-line no-eval
		setResult(eval(calc + value).toString())
	}
  }

  	const equalsCalc = () => {
	  // eslint-disable-next-line no-eval
	  setCalc(eval(calc).toString())
	}

	// check if the user wants to delete a recent input
	const deleteCalc = () => {
	  if (calc === '') {
		return;
	  }

	  setCalc(calc.slice(0, -1))
  	}

	// check if the user wants to clear the whole experssion
	const clearCalc = () => {
		if (calc === '') {
			return;
		}

		setCalc('');
		setResult('');
	}


  return (
	<div className="mainCalc">
	  <div className="screen">
		{result ? <span>[{result}]</span> : ''} {calc || '0'}
	  </div>

	  <div className="operators">
		<button value='+' onClick={(e) => calcUpdates(e.target.value)}>+</button>
		<button value='-' onClick={(e) => calcUpdates(e.target.value)}>-</button>
		<button value='/' onClick={(e) => calcUpdates(e.target.value)}>/</button>
		<button value='*' onClick={(e) => calcUpdates(e.target.value)}>*</button>
	  </div>

	  <div className='main-buttons'>
	  	<button className="clearButtons" onClick={clearCalc}>CLR</button>
		<button className="clearButtons" onClick={deleteCalc}>DEL</button>
	  </div>

	  <div className="main-buttons">
		{digitsArr.map((digit) => (
		  <button key={digit} value={digit} onClick={(e) => calcUpdates(e.target.value)}>{digit}</button>
		))}
		<button value='.' onClick={(e) => calcUpdates(e.target.value)}>.</button>
		<button value='0' onClick={(e) => calcUpdates(e.target.value)}>0</button>
		<button value='=' onClick={equalsCalc}>=</button>
	  </div>
	</div>
  );
}
