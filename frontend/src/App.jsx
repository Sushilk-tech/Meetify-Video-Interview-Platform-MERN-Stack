import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProblemsPage from './pages/ProblemsPage'
import { Toaster } from 'react-hot-toast'
import DashboardPage from './pages/DashboardPage'
import ProblemPage from './pages/ProblemPage'
import SessionPage from './pages/SessionPage'

const App = () => {
  const { isSignedIn, isLoaded } = useUser()

  //  jab tak clerk load nahi hota kuch mat dikhao
  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Routes>
        <Route path='/' element={!isSignedIn ? <HomePage /> : <Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={isSignedIn ? <DashboardPage /> : <Navigate to='/' />} />

        <Route
          path='/problems'
          element={
            isSignedIn ? <ProblemsPage /> : <Navigate to="/" />
          }
        />
        <Route
          path="/problem/:id"
          element={
            isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />}
        />

        <Route
          path="/session/:id"
          element={
            isSignedIn ? <SessionPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster position='top-right' toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App
