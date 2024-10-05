// src/App.tsx
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import { Toaster } from "@/components/ui/toaster"
import './App.css'

const ReactPage = React.lazy(() => import('./pages/ReactPage'))
const ReduxPage = React.lazy(() => import('./pages/ReduxPage'))
const ReduxToolkitPage = React.lazy(() => import('./pages/ReduxToolkitPage'))
const AdvancedTopicsPage = React.lazy(() => import('./pages/AdvancedTopicsPage'))

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RootLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/react" element={<ReactPage />} />
              <Route path="/redux" element={<ReduxPage />} />
              <Route path="/redux-toolkit" element={<ReduxToolkitPage />} />
              <Route path="/advanced" element={<AdvancedTopicsPage />} />
            </Routes>
          </Suspense>
        </RootLayout>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App