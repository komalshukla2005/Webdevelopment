import React, { useEffect, useState } from 'react'

function Timer() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((pre) => pre > 0 ? pre - 1 : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <h1>Countdown : {count}</h1>
    </div>
  )
}

export default Timer
