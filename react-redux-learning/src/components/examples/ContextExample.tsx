// src/components/examples/ContextExample.tsx
import React, { createContext, useContext, useState } from 'react'
import { Button } from "@/components/ui/button"

const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined)

const ThemedButton: React.FC = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('ThemedButton must be used within a ThemeProvider')
  const { theme, toggleTheme } = context

  return (
    <Button 
      onClick={toggleTheme}
      className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      Toggle Theme
    </Button>
  )
}

const ContextExample: React.FC = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`p-4 border rounded-md text-black ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800 text-white'}`}>
        <h3 className="text-lg font-semibold mb-2">Context Example: Theme Toggler</h3>
        <p className="mb-4">Current theme: {theme}</p>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  )
}

export default ContextExample
