import React from 'react'
import { Ticket } from '@prisma/client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import TicketStatusBadge from '@/components/TicketStatusBadge'
import TicketPriority from '@/components/TicketPriority'

interface Props {
    tickets: Ticket[]
}
const TicketTable = ({ tickets }: Props) => {

    const tableBody = tickets ? tickets.map(each =>
        <TableRow key={each.id} data-href="/">
            <TableCell className="text-xl text-sky-700">
                {each.title}
            </TableCell>
            <TableCell>

                {each.description}
                <div className='flex justify-between border-t mt-4 pt-4 text-slate-500'>
                    <div>
                        <small>
                            Created at: {each.createdAt.toLocaleDateString("en-US", {
                                year: "2-digit",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "numeric",
                                hour12: true,
                                minute: "numeric",
                                second: "numeric"
                            })}
                        </small>
                    </div>
                    <div>
                        <small>
                            Updated at: {each.updatedAt.toLocaleDateString("en-US", {
                                year: "2-digit",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "numeric",
                                hour12: true,
                                minute: "numeric",
                                second: "numeric"
                            })}
                        </small>
                    </div>
                </div>

            </TableCell>
            <TableCell>
                <TicketStatusBadge status={each.status} />
            </TableCell>
            <TableCell>
                <TicketPriority priority={each.priority} />
            </TableCell>
        </TableRow>
    ) : null

    return (
        <div className='w-full'>
            <div className="rounded-sm sm:border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Priority</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableBody}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default TicketTable
