import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import ThemeToggle from './theme-toggle'
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

const Header = () => {
    const [search, setSearch] = useSearchParams();
    const isSignInOpen = search.get("sign-in") === "true";

    const openSignIn = () => setSearch({ "sign-in": true });
    const closeSignIn = () => setSearch({});

    const handleOverlayClick = (e) => {
        if (e.target == e.currentTarget) {
            closeSignIn();
            // setSearch({})
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
                        <Link to="/post-job">
                            <Button variant="destructive" className="rounded-full" >
                                <PenBox size={20} classname="mr-2" />
                                Post a Job
                            </Button>
                        </Link>
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
                                    labelIcon={<BriefcaseBusiness size={15}/>}
                                    href='/my-jobs'
                                />
                                <UserButton.Link 
                                    label='Saved Jobs'
                                    labelIcon={<Heart size={15}/>}
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
                        signUpForceRedirectUrl='/onboarding'
                        fallbackRedirectUrl='/onboarding'
                    />
                </div>
            )}
        </>
    )
}

export default Header