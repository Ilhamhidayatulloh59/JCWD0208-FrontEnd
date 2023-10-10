import { screen, render, fireEvent } from '@testing-library/react'
import { Button } from './components/button'

test("button should disappear", () => {
    render(<Button />)
    const buttonElement = screen.getByRole('button', { name: 'Click me' })
    fireEvent.click(buttonElement)
    expect(buttonElement).not.toBeVisible
})