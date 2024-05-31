"use client"
import React from 'react'
import Link from 'next/link'
import { navData } from '@/data/nav'
import { usePathname } from 'next/navigation'

const NavMain = () => {
    const currentPath = usePathname()
    return (
        <nav className="flex items-center gap-4">
            {
                navData.main.map((each) =>
                    <Link
                        key={each.label}
                        href={each.href}
                        className={`nav-link ${currentPath === each.href &&
                            "cursor-default text-primary/70 hover:text-primary/60"
                            }`}
                    >
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
