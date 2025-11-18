import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
    const { isSignedIn, user, isLoaded } = useUser()
    const { pathname } = useLocation()

    // If user is not signed in then navigate to sign-in=true so that sign in modal will open
    if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
        return <Navigate to="/?sign-in=true" />
    }

    // Always redirect to "onboarding" page to assign role if user has no role assigned
    if (
        user !== undefined &&
        !user?.unsafeMetadata?.role &&
        pathname !== "/onboarding"
    ) {
        return <Navigate to="/onboarding" />
    }

    return children
}

export default ProtectedRoutes