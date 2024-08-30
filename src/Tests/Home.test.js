import Home from '../Components/Home';
import {render, screen} from '@testing-library/react'

test('For Home Component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
});


