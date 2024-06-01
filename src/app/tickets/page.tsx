import React from 'react'
import db from '@/db'
import TicketTable from './TicketTable'
import Link from 'next/link'
import { routes } from '@/routes'

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
