// ReactPage.tsx

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import StateExample from '@/components/examples/StateExample'
import PropsExample from '@/components/examples/PropsExample'
import EffectExample from '@/components/examples/EffectExample'
import ContextExample from '@/components/examples/ContextExample'
import Quiz from '@/components/Quiz'

const ReactPage: React.FC = () => {
  const quizQuestions = [
    {
      question: "Which hook is used for side effects in React?",
      answers: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: "useEffect"
    },
    {
      question: "What is the purpose of the key prop when rendering lists in React?",
      answers: [
        "It's optional and doesn't serve any purpose",
        "It helps React identify which items have changed, been added, or been removed",
        "It's used to style list items",
        "It's required for all elements, not just lists"
      ],
      correctAnswer: "It helps React identify which items have changed, been added, or been removed"
    },
    {
      question: "What is the Context API used for?",
      answers: [
        "To replace Redux entirely",
        "To handle all state management in an application",
        "To avoid prop drilling by providing a way to pass data through the component tree without passing props manually",
        "To create global variables accessible anywhere in the application"
      ],
      correctAnswer: "To avoid prop drilling by providing a way to pass data through the component tree without passing props manually"
    }
  ]

  const singleQuestion = {
    question: "What is the purpose of React keys?",
    answers: [
      "To uniquely identify elements in a list",
      "To manage state in functional components",
      "To handle side effects in React",
      "To style React components"
    ],
    correctAnswer: "To uniquely identify elements in a list"
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">React Concepts</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Components and Props</AccordionTrigger>
          <AccordionContent>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Understanding Components and Props</CardTitle>
                <CardDescription>The building blocks of React applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">React components are reusable pieces of UI that can be composed to create complex interfaces. Props allow you to pass data from parent to child components.</p>
                <PropsExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>State and Lifecycle</AccordionTrigger>
          <AccordionContent>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Understanding State and Lifecycle</CardTitle>
                <CardDescription>How components manage and update their data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">State is mutable data that belongs to a component. When state changes, the component re-renders. Lifecycle methods (or hooks in functional components) allow you to run code at specific points in a component's life.</p>
                <StateExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Effects and Side Effects</AccordionTrigger>
          <AccordionContent>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Understanding Effects</CardTitle>
                <CardDescription>How to perform side effects in your components</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Effects let you specify side effects that are caused by rendering, rather than by a particular event. This is useful for data fetching, subscriptions, or manually changing the DOM.</p>
                <EffectExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Context API</AccordionTrigger>
          <AccordionContent>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Understanding Context</CardTitle>
                <CardDescription>How to share data without passing props</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Context provides a way to pass data through the component tree without having to pass props down manually at every level. This is useful for sharing data that can be considered "global" for a tree of React components.</p>
                <ContextExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      {/* Spacer */}
      <div className="my-8"></div>

      {/* Quiz with Multiple Questions */}
      <Quiz questions={quizQuestions} />

      {/* Spacer */}
      <div className="my-8"></div>

      {/* Quiz with Single Question */}
      <Quiz 
        question={singleQuestion.question}
        answers={singleQuestion.answers}
        correctAnswer={singleQuestion.correctAnswer}
      />
    </div>
  )
}

export default ReactPage
