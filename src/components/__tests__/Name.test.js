import React from 'react'
import {render, waitFor, screen} from '@testing-library/react'
import { createStore } from "redux";
import reducer from "../../reducers";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Provider } from "react-redux";
import fireEvent from '@testing-library/user-event'
import Name from '../Name'

const initialState = {
	values: {
        formValues: {
        FirstName: 'John',
        LastName: 'Doe'
        }
    }
};

const store = createStore(reducer, initialState);

test('should render the component correctly', async () => {
    const history = createMemoryHistory()
    const route = '/some-route'
    history.push(route)
    const onSubmit = jest.fn()
    render(
        <Provider store={store}>
            <Router history={history}>
    <Name onSubmit={onSubmit} />
    </Router>
    </Provider>
    )

    // userEvent.type(screen.getByLabelText(/FirstName/i), 'John')
    // userEvent.type(screen.getByLabelText(/LastName/i), 'Doe')

    fireEvent.click(screen.queryByRole('button', { name: /next/i }))
    // fireEvent.submit(screen.getByRole("b"))
    // fireEvent.submit(queryByTestId("form"));

    await waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
    })
  )
  })