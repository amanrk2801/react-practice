// src/layouts/RootLayout.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/app/store'
import { toggleTheme } from '@/features/theme/themeSlice'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state: RootState) => state.theme.darkMode)
  const Year = new Date();

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <header className="bg-background border-b dark:text-white">
        <nav className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="text-2xl font-bold mb-4 sm:mb-0">React & Redux Learning</Link>
          <div className="space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center">
            <Button asChild variant="ghost" className="w-full sm:w-auto">
              <Link to="/react">React</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full sm:w-auto ">
              <Link to="/redux">Redux</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full sm:w-auto">
              <Link to="/redux-toolkit">Redux Toolkit</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full sm:w-auto">
              <Link to="/advanced">Advanced Topics</Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => dispatch(toggleTheme())}>
              {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-background border-t py-4">
        <div className="container mx-auto px-4 text-center dark:text-white">
          © {Year.getFullYear()} React & Redux Learning
        </div>
      </footer>
    </div>
  )
}

export default RootLayout