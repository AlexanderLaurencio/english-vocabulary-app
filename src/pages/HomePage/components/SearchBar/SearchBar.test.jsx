import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import SearchBar from './SearchBar'

test("SearchBar must appear in the document", () => {
    render(<SearchBar />)
    screen.debug()
    expect(screen.getByTestId("SearchBar")).toBeInTheDocument()
})