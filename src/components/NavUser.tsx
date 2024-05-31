import { navData } from '@/data/nav'
import Link from 'next/link'
import React from 'react'

const NavUser = () => {
    return (
        <nav className="flex items-center gap-4">
            {
                navData.user.map((each) =>
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

export default NavUser
