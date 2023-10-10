/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
import { screen, render } from '@testing-library/react'
import { Header } from './components/header'

test("renders hello world", () => {
    render(<Header title='Hello World' />)
    const headerElement = screen.getByText(/hello world/i)
    expect(headerElement).toBeInTheDocument
}) 