import { fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test, vi } from 'vitest'
import FilterType from './FilterType'

test("FilterType must appear in the document", () => {
    render(<FilterType />)
    screen.debug()
    expect.soft(screen.getByTestId("FilterType")).toBeInTheDocument()
});

test("FilterType must run a function when it onchange triggers", () => {
    let onChange = vi.fn()
    render(<FilterType onChange={onChange}/>)
    screen.debug()

    fireEvent.change(screen.getByTestId("FilterType"))
    expect(onChange).toHaveBeenCalled()
})