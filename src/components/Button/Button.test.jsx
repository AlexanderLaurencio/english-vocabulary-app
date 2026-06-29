import { render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import Button from './Button'

test("Button must appear in the document", () => {
    let onClick = vi.fn();
    render(<Button onClick={onClick} />)
    screen.debug()
    expect(screen.getByTestId("Button")).toBeInTheDocument()
})

test("Button must appear run a function when onclick triggers", async () => {
    let user = userEvent.setup();
    let onClick = vi.fn();
    render(<Button onClick={onClick} />);
    screen.debug();
    await user.click(screen.getByTestId("Button"));
    waitFor(() => {
        expect(onClick).toHaveBeenCalled()
    })
})