import React from 'react'
import CounterProvider from './Context/CounterContext'
import Counter from './Components/Counter'

const App = () => {
  return (
    <div>
      <CounterProvider>
        <Counter/>
      </CounterProvider>
    </div>
  )
}

export default App