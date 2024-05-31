import db from '@/db'
import React from 'react'

const TicketsPage = async () => {
    const tickets = await db.ticket.findMany()
    return (
        <div>
            {
                tickets.map(each => <div key={each.id}>
                    {each.title}
                </div>)
            }
        </div>
    )
}

export default TicketsPage
