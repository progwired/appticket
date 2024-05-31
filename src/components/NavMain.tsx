import { navData } from '@/data/nav'
import Link from 'next/link'
import React from 'react'

const NavMain = () => {
    return (
        <nav className="flex items-center gap-4">
            {
                navData.main.map((each) =>
                    <Link key={each.label} href={each.href}>
                        <span className="capitalize">
                            {each.label}
                        </span>
                    </Link>
                )
            }
        </nav>
    )
}

export default NavMain
