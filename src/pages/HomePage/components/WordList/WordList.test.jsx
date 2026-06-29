import { render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import WordList from './WordList'


test("The quantity of children it the WordList must be the same as in the database", async () => {
    let request = await fetch("https://jsonplaceholder.typicode.com/users");
    let response = await request.json();
    render(<WordList>{response.map(u => <li key={u.id}>{u.name}</li>)}</WordList>);
    screen.debug();
    expect(screen.getByTestId("WordList").children.length).toBe(response.length)
})