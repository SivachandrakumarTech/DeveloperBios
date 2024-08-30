import App from '../Components/App';
import {render, screen} from '@testing-library/react'

test('For App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});


