import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import ThemeToggle from './theme-toggle'
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

const Header = () => {
    const [search, setSearch] = useSearchParams();  // used for reading/writing URL query params
    const isSignInOpen = search.get("sign-in") === "true";   // If URL contains sign-in=true it evaluates to true 
    const { user } = useUser() // Returns the logged-in user info from Clerk.

    const openSignIn = () => setSearch({ "sign-in": true });  // Changes URL to ?sign-in=true which Opens login modal
    const closeSignIn = () => setSearch({}); // Removes query params → Closes modal.

    // Prevents closing when clicking inside the login form - Closes only when clicking the dark overlay.
    const handleOverlayClick = (e) => {
        if (e.target == e.currentTarget) {
            closeSignIn();
        }
    }

    return (
        <>
            <nav className='py-2 flex justify-between items-center'>
                <Link to="/">
                    <img src="/job-portal-logo.png" alt="logo" className='w-44' />
                </Link>

                <div className='flex gap-8'>
                    <ThemeToggle />

                    <SignedOut>
                        <Button variant="outline" onClick={openSignIn}>Login</Button>
                    </SignedOut>

                    <SignedIn>
                        {/* Show button only to recruiter - Based on role objtained from unsafe meatadata of clerk */}
                        {user?.unsafeMetadata?.role === "recruiter" &&
                            <Link to="/post-job">
                                <Button variant="destructive" className="rounded-full" >
                                    <PenBox size={20} className="mr-2" />
                                    Post a Job
                                </Button>
                            </Link>}
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10"
                                }
                            }}
                        >
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label='My Jobs'
                                    labelIcon={<BriefcaseBusiness size={15} />}
                                    href='/my-jobs'
                                />
                                <UserButton.Link
                                    label='Saved Jobs'
                                    labelIcon={<Heart size={15} />}
                                    href='/saved-jobs'
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>
                </div>
            </nav>

            {isSignInOpen && (
                <div
                    className='fixed inset-0 flex items-center justify-center bg-black/80'
                    onClick={handleOverlayClick}
                >
                    <SignIn
                        signUpFallbackRedirectUrl='/onboarding'
                        fallbackRedirectUrl='/onboarding'
                    />
                </div>
            )}
        </>
    )
}

export default Header