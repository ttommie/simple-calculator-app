import './App.css';

export default function App() {

 const digitsArr = [
	 1, 2, 3, 4, 5, 6, 7, 8, 9
 ]

  return (
  <div className='mainCalc'>
    <div className='screen'>
      <span>[0]</span>0
    </div>

    <div className='operators'>
				<button>+</button>
				<button>-</button>
				<button>/</button>
				<button>*</button>
				<button>DEL</button>
    </div>

		<div className='digits'>
			{digitsArr.map((digit) => <button key={digit.id}>{digit}</button>)}
			<button>.</button>
			<button>0</button>
			<button>=</button>
		</div>
  </div>
  );
}
