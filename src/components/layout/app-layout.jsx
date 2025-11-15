import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'

const AppLayout = () => {
    return (
        <div>
            <div className='grid-background'></div>
            <main className='min-h-screen container p-10 mx-auto'>
                <Header />
                <Outlet />
            </main>
                <Footer />
        </div>
    )
}

export default AppLayout