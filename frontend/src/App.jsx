import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProblemsPage from './pages/ProblemsPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { isSignedIn, isLoaded } = useUser()

  // 🔥 jab tak clerk load nahi hota kuch mat dikhao
  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/problems'
          element={
            isSignedIn ? <ProblemsPage /> : <Navigate to="/" />
          }
        />
      </Routes>
      <Toaster position='top-right' toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App
// tw, daisyui, react-router, react-hot-toast
// todo: react-query aka tanstack query, axios
// ! mkdnksandka
// ? mkdnkasandka
// * mkdnkasandka


// import React from 'react'
// import { useUser } from '@clerk/clerk-react'
// import { Route, Routes, Navigate } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import ProblemsPage from './pages/ProblemsPage'
// import { Toaster } from 'react-hot-toast'

// const App = () => {
//   const { isSignedIn } = useUser()
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/problems' element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
//       </Routes>
//       <Toaster />
//     </>
//   )
// }

// export default App