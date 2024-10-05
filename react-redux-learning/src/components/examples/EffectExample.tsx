import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

const EffectExample: React.FC = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (count % 2 === 0) {
      setMessage('Count is even')
    } else {
      setMessage('Count is odd')
    }
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded-md">
        <h3 className="text-lg font-semibold mb-2">Effect Example: Even or Odd</h3>
        <p className="mb-4">Count: {count}</p>
        <p className="mb-4">Message: {message}</p>
        <Button onClick={() => setCount(count + 1)} aria-label="Increment counter">Increment</Button>
      </div>
      <div className="p-4 border rounded-md">
        <h3 className="text-lg font-semibold mb-2">Effect Example: Timer</h3>
        <p>Timer: {timer} seconds</p>
      </div>
    </div>
  )
}

export default EffectExample