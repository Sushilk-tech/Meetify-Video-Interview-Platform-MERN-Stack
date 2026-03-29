import React from 'react'
import { Show, SignInButton, UserButton, } from '@clerk/react'

const App = () => {
  return (
    <div>
      <h1>Welcome to the app</h1>

      <Show when="signed-out">
        <SignInButton />
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  )
}

export default App