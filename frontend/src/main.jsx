import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import {QueryClient, QueryClientProvider,useQuery} from '@tanstack/react-query'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; // apna clerk key daal

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Cleark Publishable Key");
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
       <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { ClerkProvider } from '@clerk/react'
// import { BrowserRouter } from 'react-router-dom'

// // Import your Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Cleark Publishable Key");
// }

// createRoot(document.getElementById('root')).render(
  
//   <BrowserRouter>
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//       <App />
//     </ClerkProvider>
//   </BrowserRouter>,
// )