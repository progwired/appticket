import React from 'react'
import db from '@/db'
import TicketTable from './TicketTable'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { routes } from '@/lib/routes'

const TicketsPage = async () => {
    const tickets = await db.ticket.findMany()
    return (
        <div>
            <p className='py-2 mb-2'>
                <Link href={routes.ticketsNew()}>Create a Ticket</Link>
            </p>
            <TicketTable tickets={tickets} />
        </div>
    )
}

export default TicketsPage
