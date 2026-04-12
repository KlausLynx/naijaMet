import { useState, useEffect } from "react"
import { gini } from "../hooks/transform_data.js"

export default function SectionTwo() {
    const [data, setData] = useState(null) 
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        gini()
            .then(result => {
                setData(result)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p style={{ color: "red" }}>Error: {error}</p> 

    return (
        <>
            <pre style={{ color: "white" }}>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}