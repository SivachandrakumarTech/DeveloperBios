import App from '../Components/App';
import {render, screen} from '@testing-library/react'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});


