// src/components/examples/ReduxToolkitExample.tsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/app/store'
import { increment, decrement, incrementByAmount } from '@/features/counter/counterSlice'
import { Button } from "@/components/ui/button"

const ReduxToolkitExample: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-semibold mb-2">Redux Toolkit Example: Counter</h3>
      <p className="mb-4">Count: {count}</p>
      <div className="space-x-2">
        <Button onClick={() => dispatch(increment())} aria-label="Increment counter">Increment</Button>
        <Button onClick={() => dispatch(decrement())} aria-label="Decrement counter">Decrement</Button>
        <Button onClick={() => dispatch(incrementByAmount(5))} aria-label="Increment counter by 5">Increment by 5</Button>
      </div>
    </div>
  )
}

export default ReduxToolkitExample