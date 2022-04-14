import { render, screen } from '@testing-library/react';
import UserInfo from '../components/UserInfo.js';
import { MemoryRouter } from "react-router-dom";


test('should render UserInfo component', () => {
    const user = {
        login: "webdevsimplified",
        avatar_url: "https://avatars.githubusercontent.com/u/83230134?v=4",
        public_repos: 10,
        created_at: '1234567890',
        updated_at: '1234567890',
        followers: 0,
        following: 0
    }
    render(
    <MemoryRouter>
        <UserInfo user={user} />
    </MemoryRouter>
    );

    const userInfoElement = screen.getByTestId('userinfo-test');
    expect(userInfoElement).toBeInTheDocument();
    expect(userInfoElement).toHaveTextContent("webdevsimplified");
    
})