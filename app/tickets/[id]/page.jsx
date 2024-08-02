import { notFound } from "next/navigation"
import DeleteTicketButton from "./DeleteTicketButton"

export async function generateStaticParams() {
    const response = await fetch("http://localhost:4000/tickets")

    const tickets = await response.json()

    return tickets.map((ticket) => ({
        id: ticket.id,
    }))
}

async function getTicket(id) {

    const response = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60,
        }
    })

    if (!response.ok) {
        notFound()
    }

    return response.json()
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id)

    return (
        <main>
            <div>
                <h2>Ticket Details</h2>
            </div>

            <div className="card">
                <div className="flex">
                    <div className="flex-1">
                        <h3>{ticket.title}</h3>
                        <small>Created by {ticket.user_email}</small>
                    </div>
                    <DeleteTicketButton id={ticket.id} />
                </div>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
