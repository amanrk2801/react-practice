// src/pages/ReduxPage.tsx
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ReduxExample from '@/components/examples/ReduxExample'
import Quiz from '@/components/Quiz'

const ReduxPage: React.FC = () => {
  const question = "What is the purpose of Redux in state management?"
  const answers = [
    "To manage local component state",
    "To handle side effects",
    "To centralize application state",
    "To simplify routing"
  ]
  const correctAnswer = "To centralize application state"
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Redux Concepts</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Store</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Redux Store</CardTitle>
                <CardDescription>The central state container for your entire application</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The Redux store is a single source of truth that holds the entire state of your application. It's responsible for storing, reading, and updating the state.</p>
                {/* Add more detailed explanation here */}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Actions</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Redux Actions</CardTitle>
                <CardDescription>Events that describe something happening in the application</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Actions are plain JavaScript objects that represent an intention to change the state. They must have a `type` property that indicates the type of action being performed.</p>
                {/* Add more detailed explanation here */}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Reducers</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Redux Reducers</CardTitle>
                <CardDescription>Functions that specify how the application's state changes in response to actions</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Reducers are pure functions that take the current state and an action as arguments, and return a new state. They determine how the state should be updated based on the action type.</p>
                {/* Add more detailed explanation here */}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Example</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Redux in Action</CardTitle>
                <CardDescription>A practical example of Redux state management</CardDescription>
              </CardHeader>
              <CardContent>
                <ReduxExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Quiz 
         question={question}
         answers={answers}
         correctAnswer={correctAnswer}
      />
    </div>
  )
}

export default ReduxPage