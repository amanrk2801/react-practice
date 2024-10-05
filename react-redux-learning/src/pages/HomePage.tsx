// src/pages/HomePage.tsx
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>React</CardTitle>
          <CardDescription>Learn the fundamentals of React</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link to="/react">Explore React</Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Redux</CardTitle>
          <CardDescription>Master state management with Redux</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link to="/redux">Explore Redux</Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Redux Toolkit</CardTitle>
          <CardDescription>Simplify Redux with Redux Toolkit</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link to="/redux-toolkit">Explore Redux Toolkit</Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Advanced Topics</CardTitle>
          <CardDescription>Dive into advanced React and Redux concepts</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link to="/advanced">Explore Advanced Topics</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default HomePage