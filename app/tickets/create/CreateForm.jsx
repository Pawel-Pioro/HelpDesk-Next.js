"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import FormSubmit from "./FormSubmit"

export default function CreateForm() {
    const router = useRouter()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [priority, setPriority] = useState("low")
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        FormSubmit(title, body, priority)
        setIsLoading(false)
        router.push("/tickets")
    }

    return (
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Title:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Title:</span>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
                <span>
                    {isLoading ?
                        "Adding..." :
                        "Add Ticket"
                    }
                </span>
            </button>
        </form>
    )
}
