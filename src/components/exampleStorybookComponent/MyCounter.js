import React, { useState } from 'react'

const MyCounter = ({ color }) => {
  const [counter, setCounter] = useState(0)
  const style = color ? { background: color } : {}

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <button
        style={style}
        onClick={increment}>INCREMENT COUNTER</button>
      <p>{counter}</p>
    </>
  )
}

export default MyCounter
