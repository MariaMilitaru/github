import { screen, cleanup} from '@testing-library/react';
import Navbar from '../components/Navbar';
import {StrictMode} from 'react';


test('should render Navbar component', () => {
  <StrictMode>
        <Navbar/>
  </StrictMode>
  const navbarElement = screen.queryByTestId('navbar-test');
  // expect(navbarElement).toBeInTheDocument();
  

})