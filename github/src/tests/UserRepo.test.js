import { render, screen } from '@testing-library/react';
import UserRepo from '../components/UserRepo.js';
import { MemoryRouter } from "react-router-dom";


test('should render UserRepo component', () => {
    const repo = [{
        id:1,
        name: 'aaa',
        language: 'JavaScript',
        forks_count: 5
    }]
    const setSearchText = jest.fn();
    const setRooting = jest.fn();
    const setActiveRepo = jest.fn();
    render(
        <MemoryRouter>
            <UserRepo
                repo={repo}
                setSearchText={setSearchText}
                setRooting={setRooting}
                setActiveRepo={setActiveRepo}
            />
        </MemoryRouter>
    );

    const userRepoElement = screen.getByTestId('userrepo-test');
    expect(userRepoElement).toBeInTheDocument();
    expect(userRepoElement).toHaveTextContent("JavaScript");
})