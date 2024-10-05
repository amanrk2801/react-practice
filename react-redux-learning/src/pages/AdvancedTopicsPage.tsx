// src/pages/AdvancedTopicsPage.tsx
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ReactQueryExample from '@/components/examples/ReactQueryExample'
import Quiz from '@/components/Quiz'

const AdvancedTopicsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Advanced React and Redux Topics</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>React Query</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Understanding React Query</CardTitle>
                <CardDescription>Powerful asynchronous state management for React</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">React Query is a library for fetching, caching, synchronizing and updating server state in your React applications.</p>
                <ReactQueryExample />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        {/* Add more advanced topics here */}
      </Accordion>
      <Quiz 
        question="Which library is used for asynchronous state management in React?" 
        answers={["React Query", "Redux", "Context API", "useReducer"]} 
        correctAnswer="React Query"
      />
    </div>
  )
}

export default AdvancedTopicsPage