import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

test('renders lstart buttons', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(getByText(/3x4/i)).toBeInTheDocument()
  expect(getByText(/4x6/i)).toBeInTheDocument()
  expect(getByText(/6x8/i)).toBeInTheDocument()
})
