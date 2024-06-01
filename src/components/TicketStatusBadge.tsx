import React from 'react'
import { Status } from '@prisma/client'
import { Badge } from './ui/badge';

interface Props {
    status: Status
}

const statusMap: Record<
    Status,
    {
        label: string;
        color: "bg-red-700" | "bg-blue-700" | "bg-green-700"
    }
> = {
    OPEN: { label: "Open", color: "bg-red-700" },
    STARTED: { label: "Started", color: "bg-blue-700" },
    CLOSED: { label: "Closed", color: "bg-green-700" },
}

const TicketStatusBadge = ({ status }: Props) => {
    return (
        <Badge className={`${statusMap[status].color} hover:${statusMap[status].color}`}>
            {statusMap[status].label}
        </Badge>
    )
}

export default TicketStatusBadge
