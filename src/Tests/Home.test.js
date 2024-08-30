import Home from '../Components/Home';
import {render, screen} from '@testing-library/react'

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Siva/i);
  expect(linkElement).toBeInTheDocument();
});


