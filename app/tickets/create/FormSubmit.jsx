"use server"

import revalidateTickets from '@/app/Actions/revalidateTickets'

export default async function FormSubmit(title, body, priority ) {

    const ticket = {
        title, body, priority, user_email: "test@example.com"
    }

    const response = await fetch("http://localhost:4000/tickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
    })

    if (response.status === 201) {
        revalidateTickets()
    }
}