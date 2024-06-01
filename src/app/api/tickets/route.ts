import db from "@/db";
import { ticketSchema } from "@/validation/tickets";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = ticketSchema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json(
            validation.error.format(),
            { status: 400 })
    }

    const title = await db.ticket.findUnique({
        where: {
            title: validation.data.title
        }
    })

    if (title) return NextResponse.json(
        { "Error": "Already exist" },
        { status: 500 }
    )

    const craeted = await db.ticket.create({
        data: {
            ...body
        }
    })

    return NextResponse.json(
        { "Error": "Ticket Created" },
        { status: 201 }
    )

}