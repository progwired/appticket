import { string, z } from "zod";

export const ticketSchema = z.object({
    title: z.string().min(3, "Title is required").max(20),
    description: z.string().min(10, "Description is required").max(65535),
    status: z.string().min(1, "Status").max(10).optional(),
    priority: z.string().min(1, "Priority").max(10).optional()
})