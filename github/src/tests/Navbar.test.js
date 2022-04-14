import { render, screen} from '@testing-library/react';
import Navbar from '../components/Navbar';
import { MemoryRouter } from "react-router-dom";


test('should render Navbar component', () => {
    render(
    <MemoryRouter>
        <Navbar />
    </MemoryRouter>
    );

    const navbarElement = screen.getByTestId('navbar-test');
    expect(navbarElement).toBeInTheDocument();
    expect(navbarElement).toHaveTextContent("Github");
})


