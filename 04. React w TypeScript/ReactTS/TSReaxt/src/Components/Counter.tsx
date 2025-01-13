import React from 'react'
import { useCountContext } from '../Context/CounterContext'

const Counter = () => {
    const {count,increment,decrement}=useCountContext()
  return (
    <div>
     <h1>Counter {count}</h1>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter