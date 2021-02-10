import React from 'react'
import {render, waitFor, screen, getByTestId} from '@testing-library/react'
import { createStore } from "redux";
import reducer from "../../reducers";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Provider } from "react-redux";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Name from '../Name'

const initialState = {
	values: {
        formValues: {
        FirstName: '',
        LastName: ''
        }
    }
};

const store = createStore(reducer, initialState);

test('should render the component correctly', async () => {
    const history = createMemoryHistory()
    const onSubmit = jest.fn()
    render(
        <Provider store={store}>
            <Router history={history}>
    <Name saveFormValues={onSubmit} />
    </Router>
    </Provider>
    )

    expect(screen.getByLabelText(/FirstName/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Next/i})).toBeInTheDocument()

    userEvent.type(screen.getByLabelText(/FirstName/i), 'John')
    userEvent.type(screen.getByLabelText(/LastName/i), 'Doe')

    userEvent.click(screen.getByRole("button", { name: /Next/i}))

  await waitFor(() => 
  expect(screen.getByTestId('name-form')).toHaveFormValues({
    FirstName: 'John',
    LastName: 'Doe'
  }))
  })