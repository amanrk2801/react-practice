// src/pages/ReduxToolkitPage.tsx
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ReduxToolkitExample from '@/components/examples/ReduxToolkitExample'
import Quiz from '@/components/Quiz'

const ReduxToolkitPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Redux Toolkit Concepts</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>createSlice</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>createSlice</CardTitle>
                <CardDescription>A function that simplifies the creation of Redux logic</CardDescription>
              </CardHeader>
              <CardContent>
                <p>createSlice is a function that accepts an initial state, an object of reducer functions, and a slice name, and automatically generates action creators and action types that correspond to the reducers and state.</p>
                {/* Add more detailed explanation here */}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>configureStore</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>configureStore</CardTitle>
                <CardDescription>A wrapper around createStore to provide simplified configuration options and good defaults</CardDescription>
              </CardHeader>
              <CardContent>
                <p>configureStore sets up a store with the right defaults, including combining reducers, adding the thunk middleware, and setting up the Redux DevTools Extension.</p>
                {/* Add more detailed explanation here */}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>createAsyncThunk</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>createAsyncThunk</CardTitle>
                <CardDescription>A function to simplify the creation of async action creators</CardDescription>
              </CardHeader>
              <CardContent>
                <p>createAsyncThunk accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise.</p>
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
                <CardTitle>Redux Toolkit in Action</CardTitle>
                <CardDescription>A practical example of Redux Toolkit usage</CardDescription>
              </CardHeader>
              <CardContent>
                <ReduxToolkitExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Quiz 
        question="What is the purpose of Redux Toolkit in state management?" 
        answers={["To manage local component state", "To handle side effects", "To centralize application state", "To simplify routing"]} 
        correctAnswer="To centralize application state"
      />
    </div>
  )
}

export default ReduxToolkitPage