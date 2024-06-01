import NewTicketForm from '@/components/NewTicketForm'
import React from 'react'

const NewTicketPage = () => {
    return (
        <div>
            <h1 className="text-2xl border-b py-4 mb-4">
                New Ticket Page
            </h1>
            <NewTicketForm />
        </div>
    )
}

export default NewTicketPage
