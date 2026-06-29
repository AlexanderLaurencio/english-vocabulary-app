import { fireEvent, getByTestId, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test, vi } from 'vitest'
import InputChooseWordType from './InputChooseWordType'

test("InputChooseWordType must run a function when onchange triggers", () => {
    let onChange = vi.fn();
    render(<InputChooseWordType onChange={onChange}/>);
    fireEvent.change(screen.getByTestId("InputChooseWordType"));
    expect(onChange).toHaveBeenCalled();
})