import { render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import userEvent from '@testing-library/user-event'
import Button from '../../../../components/Button/Button'
import AddWordModalWindow from '../AddWordModalWindow/AddWordModalWindow'
import AddWordForm from './AddWordForm'

test("AddWordForm should be visible when you click Button", async () => {
    render(<AddWordModalWindow > <AddWordForm  /> </AddWordModalWindow>)
    screen.debug()
    expect(screen.getByTestId("AddWordForm")).toBeInTheDocument()
});