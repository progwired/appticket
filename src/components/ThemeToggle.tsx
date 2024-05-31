"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
        disabled={true}
    />

    const dark = theme === "dark"

    return (
        <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
        >
            {
                dark ? (
                    <Sun className='hover:cursor-pointer hover:text-primary' />
                ) : (
                    <Moon className='hover:cursor-pointer hover:text-primary' />
                )
            }
        </Button>
    )
}

export default ThemeToggle


