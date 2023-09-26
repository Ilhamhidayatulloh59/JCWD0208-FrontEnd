import { useEffect, useState } from "react"
import useCounter from "../hooks/counter"

function Count () {
    // const [count, setCount] = useState(0)
    const [name, setName] = useState("lutfi")
    const [count, increment, decrement] = useCounter(0, 5)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>{name}</p>
            <p>You clicked {count}</p>
            <button onClick={decrement}>
                decrement
            </button>
            <button onClick={increment}>
                increment
            </button>
        </div>
    )
}

export default Count
