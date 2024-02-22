import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

test('on initla render ,the checkbox is disabled and people are shown ', () => {
  render(<App i={1} />)
  expect(screen.getByRole('checkbox')).not.toBeChecked()
})

test('check if the search bar is working ', () => {
  render(<App i={1} />)
  userEvent.type(screen.getByRole('textbox'), 'Liam')
  // screen.getByRole('')
})
