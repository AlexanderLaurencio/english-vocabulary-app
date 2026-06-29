import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import SideNav from './SideNav';
import { MemoryRouter } from 'react-router-dom';

test("HomePage must be in the document", () => {
    render(<MemoryRouter>
        <SideNav />
    </MemoryRouter>)
    screen.debug()
    expect(screen.getByTestId("SideNav")).toBeInTheDocument()
});
