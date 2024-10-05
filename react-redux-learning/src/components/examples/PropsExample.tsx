// src/components/examples/PropsExample.tsx
import React from 'react'
import { Button } from "@/components/ui/button"

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <p>Hello, {name}!</p>
}

const PropsExample: React.FC = () => {
  const [name, setName] = React.useState('World')

  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-semibold mb-2">Props Example: Greeting</h3>
      <Greeting name={name} />
      <div className="mt-4 space-x-2">
        <Button onClick={() => setName('Alice')}>Greet Alice</Button>
        <Button onClick={() => setName('Bob')}>Greet Bob</Button>
      </div>
    </div>
  )
}

export default PropsExample