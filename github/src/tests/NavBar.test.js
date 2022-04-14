import {render, screen, cleanup} from '@testing-library/react';
import Navbar from '../components/Navbar';


test('should render NavBar component', () => {
    render(<Navbar/>);
    const navbarElement = screen.getByTestId('navbar-1');
    expect(navbarElement).toBeInTheDocument();
})