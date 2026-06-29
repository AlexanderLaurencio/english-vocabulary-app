import { fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test, vi } from 'vitest'
import SearchType from './SearchType'

test("SearchType must appear in the document", () => {
    render(<SearchType />)
    screen.debug()
    expect(screen.getByTestId("SearchType")).toBeInTheDocument()
});

test("SearchType must run a function when onchange triggers", () => {
    let onChange = vi.fn()
    render(<SearchType onChange={onChange} />)
    screen.debug()
    fireEvent.change(screen.getByTestId("SearchType"))
    expect(onChange).toHaveBeenCalled()
})