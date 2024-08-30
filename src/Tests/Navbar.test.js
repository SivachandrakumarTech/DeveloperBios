import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContext from '../Context';

test('renders Home link', () => {
  const {getByText} = render(
      <Router>
        <Navbar />
      </Router>   
  );  
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});


test('nav route with href attribute value', () => {
     render(
        <Router>
          <Navbar />
        </Router>   
    );  
    let navLinks = screen.getByText(/Home/i);
    expect(navLinks).toHaveAttribute("href", "/");
});

test('test for App Context', () => {
  
const fakeContext = {
    isLoggedIn : true,
    setIsLoggedIn: jest.fn()
}

render(
<AuthContext.Provider value = {fakeContext}>
<Router>
   <Navbar />
</Router>   
</AuthContext.Provider>
)

const allLinks = screen.getAllByRole('link');
const logoutLink  = allLinks[3];
expect(logoutLink.textContent).toBe("Logout")

});

test('test for App Context text', () => {
  
    const fakeContext = {
        isLoggedIn : true,
        setIsLoggedIn: jest.fn()
    }
    
    render(
    <AuthContext.Provider value = {fakeContext}>
    <Router>
       <Navbar />
    </Router>   
    </AuthContext.Provider>
    )
    
    const allLinks = screen.getAllByRole('link');
    const logoutLink  = allLinks[3];
    fireEvent.click(logoutLink);
    expect(fakeContext.setIsLoggedIn).toHaveBeenCalledWith(false);    
    });

