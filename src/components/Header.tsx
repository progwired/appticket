import React from 'react'
import NavMain from './NavMain'
import NavUser from './NavUser'

const Header = () => {
    return (
        <header className='flex flex-col items-center border-b bg-slate-300'>
            <div className="w-full max-w-6xl">
                <div className="flex justify-between p-4">
                    <NavMain />
                    <NavUser />
                </div>
            </div>
        </header>
    )
}

export default Header
