// src/components/examples/ReduxExample.tsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/app/store'
import { increment, decrement } from '@/features/counter/counterSlice'
import { Button } from "@/components/ui/button"

const ReduxExample: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-semibold mb-2">Redux Example: Counter</h3>
      <p className="mb-4">Count: {count}</p>
      <div className="space-x-2">
        <Button onClick={() => dispatch(increment())} aria-label="Increment counter">Increment</Button>
        <Button onClick={() => dispatch(decrement())} aria-label="Decrement counter">Decrement</Button>
      </div>
    </div>
  )
}

export default ReduxExample