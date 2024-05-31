import React from 'react'

const PageBody = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='flex flex-col items-center'>
            <div className="w-full max-w-6xl p-4">
                {children}
            </div>
        </main>
    )
}

export default PageBody
