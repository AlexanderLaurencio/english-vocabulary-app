import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import HomePage from './HomePage.jsx'

test("HomePage must be in the document", () => {
    render(<HomePage />)
    screen.debug()
    expect(screen.getByTestId("HomePage")).toBeInTheDocument()
});
