import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'
import toast from 'react-hot-toast'

const HomePage = () => {
    return (
        <div>
            <button
                className=''
                onClick={() => toast.error("success toast message")}
            >
                button
            </button>
            <div className='bg-red-500'>black</div>
            <h1 className=' text-gray-300 font-semibold text-5xl'>hlo</h1>
            <div className="bg-green-500 text-white p-10 text-3xl">
                TEST 🔥
            </div>

            <header>
                <SignedOut>
                    <SignInButton mode='modal'>
                        <button className=''>Login</button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <SignOutButton />
                </SignedIn>
            </header>
        </div>
    )
}

export default HomePage