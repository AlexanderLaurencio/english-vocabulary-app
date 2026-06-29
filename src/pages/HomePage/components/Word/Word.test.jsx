import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import Word from './Word'

test("Word must appear in the document", () => {
    render(<Word />)
    screen.debug()
    expect(screen.getByTestId("Word")).toBeInTheDocument()
})