// src/pages/ReactPage.tsx
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import StateExample from '@/components/examples/StateExample'
import PropsExample from '@/components/examples/PropsExample'
import EffectExample from '@/components/examples/EffectExample'
import ContextExample from '@/components/examples/ContextExample'
import Quiz from '@/components/Quiz'

const ReactPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">React Concepts</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Components</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>What are React Components?</CardTitle>
                <CardDescription>The building blocks of React applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p>React components are reusable pieces of UI that can be composed to create complex interfaces. They can be either function components or class components.</p>
                <PropsExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>State</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Understanding State</CardTitle>
                <CardDescription>How components manage and update their data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">State is mutable data that belongs to a component. When state changes, the component re-renders.</p>
                <StateExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Effects</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Understanding Effects</CardTitle>
                <CardDescription>How to perform side effects in your components</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Effects let you specify side effects that are caused by rendering, rather than by a particular event.</p>
                <EffectExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Context</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Understanding Context</CardTitle>
                <CardDescription>How to share data without passing props</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
                <ContextExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Quiz 
        question="Which hook is used for side effects in React?" 
        answers={["useState", "useEffect", "useContext", "useReducer"]} 
        correctAnswer="useEffect"
      />
    </div>
  )
}

export default ReactPage