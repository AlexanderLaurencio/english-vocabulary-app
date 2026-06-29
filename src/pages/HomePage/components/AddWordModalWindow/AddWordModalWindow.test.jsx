import { render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import userEvent from '@testing-library/user-event'
import AddWordModalWindow from '../AddWordModalWindow/AddWordModalWindow'
import Button from '../../../../components/Button/Button'

test("AddWordModalWindow must appear in the document when you click AddWordButton and disappear when you click CloseAddModalWindow", async () => {
    function showAddWordModalWindow() {
        screen.getByTestId("AddWordModalWindow").classList.toggle("hidden")
    }
    const user = userEvent.setup()
    render(<AddWordModalWindow > 
        <Button dataTestId="CloseAddModalWindow" onClick={showAddWordModalWindow} >Cancel</Button>
        <Button dataTestId="AddWordButton" onClick={showAddWordModalWindow} >Add word</Button>
    </AddWordModalWindow>)

    screen.debug()

    expect(screen.queryByTestId("AddWordModalWindow")).not.toBeVisible()


    await user.click(screen.getByTestId("AddWordButton"))
    waitFor(() => {
        expect(screen.getByTestId("AddWordModalWindow")).not.toBeVisible()
    })

    await user.click(screen.getByTestId("CloseAddModalWindow"))
    waitFor(() => {
        expect(screen.getByTestId("AddWordModalWindow")).toBeVisible()
    })
})