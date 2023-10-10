import { useState } from 'react'

export const Button = () => {
    const [display, setDisplay] = useState('block')
    const handleClick = () => {
        setDisplay('none')
    }
    return (
        <button style={{ display: display }} onClick={handleClick}>Click me</button>
    )
}