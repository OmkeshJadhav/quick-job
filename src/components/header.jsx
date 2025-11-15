import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { ModeToggle } from './theme-toggle'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
    return (
        <div className='py-2 flex justify-between items-center'>
            <Link to="/">
                <img src="/job-portal-logo.png" alt="logo" className='w-20' />
            </Link>

            <div className='flex justify-center items-center gap-3'>
                <ModeToggle />
                <Button variant="outline">Login</Button>
                {/* <div>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div> */}
            </div>
        </div>
    )
}

export default Header