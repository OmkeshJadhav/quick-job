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

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/onboarding",
        element: <OnBoarding/>
      },
      {
        path: "/jobs",
        element: <JobListing/>
      },
      {
        path: "/job/:id",
        element: <Job/>
      },
      {
        path: "/post-job",
        element: <PostJob/>
      },
      {
        path: "/saved-jobs",
        element: <SavedJobs/>
      },
      {
        path: "/my-jobs",
        element: <MyJobs/>
      }
      
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
