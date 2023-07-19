'use client'

import { useEffect } from "react"


export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    }, [error])

    const handlerest = () => {
        reset()
    }
    return (
        <div>
            <h1>Error: {error.message}</h1>
            <button onClick={handlerest}>Reset</button>
        </div>
    )
}