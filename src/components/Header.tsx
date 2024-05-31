import React from 'react'
import NavMain from './NavMain'
import NavUser from './NavUser'
import ThemeToggle from './ThemeToggle'

const Header = () => {
    return (
        <header className='flex flex-col items-center border-b'>
            <div className="w-full max-w-6xl">
                <div className="flex justify-between gap-4 p-4">
                    <NavMain />
                    <div className='flex gap-4'>
                        <NavUser />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
