import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import HomePageHeader from './HomePageHeader'


test("HomePageHeader must be in the document", () => {
    render(<HomePageHeader />)
    screen.debug()
    expect(screen.getByTestId("HomePageHeader")).toBeInTheDocument()
})