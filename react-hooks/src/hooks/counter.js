import { useState } from "react";

function useCounter(val, step) {
    const [count, setCount] = useState(val)

    function increment() {
        setCount(count + step)
    }

    function decrement() {
        setCount(count - step)
    }
    
    return [count, increment, decrement]
} 

export default useCounter