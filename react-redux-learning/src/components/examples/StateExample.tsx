import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const StateExample: React.FC = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded-md">
        <h3 className="text-lg font-semibold mb-2">Counter Example</h3>
        <p className="mb-4">Count: {count}</p>
        <div className="space-x-2">
          <Button onClick={() => setCount(count + 1)} aria-label="Increment counter">Increment</Button>
          <Button onClick={() => setCount(count - 1)} aria-label="Decrement counter">Decrement</Button>
          <Button onClick={() => setCount(0)} aria-label="Reset counter">Reset</Button>
        </div>
      </div>
      <div className="p-4 border rounded-md">
        <h3 className="text-lg font-semibold mb-2">Input Example</h3>
        <Input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="mb-2"
        />
        <p>You typed: {inputValue}</p>
      </div>
    </div>
  )
}

export default StateExample