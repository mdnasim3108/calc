import './App.css';
import Card from './components/card'
import Button from './components/button'
import { useState } from 'react'

function App() {

  var newStr
  const [dispStr, setStr] = useState('')
  const [flag, setFlag] = useState(false)
  const[error,setError]=useState(false)

  const displayString = (str) => {
    if (str === 'C') {
      setError(false)
      setStr('')
      return
    }
    if (str === '<=') {
      setStr(dispStr.slice(0, dispStr.length - 1))
      return
    }
    if (flag) {
      setStr(dispStr.replace(dispStr, '') + str)
      setFlag(false)
      return
    }
    if (str === "=") {
      try {
        var res = eval(dispStr).toString();
        setStr(res)
        setFlag(true)
        setError(false)
      }
      catch (e) {
        setFlag(true)
        setError(true)
        setStr("error")
      }
      return
    }
    newStr = dispStr + str
    setStr(newStr)
  }
  const BtnArr = [
    { id: "clear", label: 'C' },
    { id: "back", label: '<=' },
    { id: "mod", label: '%' },
    { id: "div", label: '/' },
    { id: "seven", label: '7' },
    { id: "eight", label: '8' },
    { id: "nine", label: '9' },
    { id: "mul", label: '*' },
    { id: "four", label: '4' },
    { id: "five", label: '5' },
    { id: "six", label: '6' },
    { id: "sub", label: '-' },
    { id: "one", label: '1' },
    { id: "two", label: '2' },
    { id: "three", label: '3' },
    { id: "add", label: '+' },
    { id: "zero", label: '0' },
    { id: "point", label: '.' },
    { id: "equal", label: '=' }
  ]
  return (
    <Card>
      <input id="display" value={dispStr} style={{backgroundColor:error && flag?'red':'beige'}}/>
      {BtnArr.map((arr) => {
        return (
          <Button id={arr.id} label={arr.label} onClicker={displayString} key={Math.random()} />
        )
      })}
    </Card>
  );
}

export default App;
