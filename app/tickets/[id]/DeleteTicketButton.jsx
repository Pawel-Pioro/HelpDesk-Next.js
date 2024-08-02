"use client"

import { useRouter } from "next/navigation"

export default function DeleteTicketButton({ id }) {
    const router = useRouter()

    async function deleteTicket(id) {

        const response = await fetch(`http://localhost:4000/tickets/${id}`, {
            method: "DELETE",
        })

        if (response.ok) {
            router.refresh()
            router.push("/tickets")
        }
    }

    return (
        <button onClick={() => deleteTicket(id)} className="btn-delete">Delete</button>
    )
}
