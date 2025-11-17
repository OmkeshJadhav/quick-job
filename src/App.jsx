import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './components/layout/app-layout'
import LandingPage from './pages/landing-page'
import OnBoarding from './pages/onboarding'
import JobListing from './pages/job-listing'
import Job from './pages/job'
import PostJob from './pages/post-job'
import SavedJobs from './pages/saved-jobs'
import MyJobs from './pages/my-jobs'
import { ThemeProvider } from "@/components/theme-provider"
import ProtectedRoutes from './components/protected-routes'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element:

          <LandingPage />

      },
      {
        path: "/onboarding",
        element:
          <ProtectedRoutes>
            <OnBoarding />
          </ProtectedRoutes>
      },
      {
        path: "/jobs",
        element: 
        <ProtectedRoutes>
        <JobListing />
        </ProtectedRoutes>

      },
      {
        path: "/job/:id",
        element: 
        <ProtectedRoutes>
        <Job />
        </ProtectedRoutes>
      },
      {
        path: "/post-job",
        element: 
        <ProtectedRoutes>
          <PostJob />
        </ProtectedRoutes>
      },
      {
        path: "/saved-jobs",
        element: 
        <ProtectedRoutes>
          <SavedJobs />
        </ProtectedRoutes>
      },
      {
        path: "/my-jobs",
        element: 
        <ProtectedRoutes>
          <MyJobs />
        </ProtectedRoutes>
      }

    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
