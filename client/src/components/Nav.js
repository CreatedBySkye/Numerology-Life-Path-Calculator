import Header from './Header';
import AuthHeader from './AuthHeader';
import { useAuth0 } from '@auth0/auth0-react';

const Nav= () => {

    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? <Header /> : <AuthHeader />
}

export default Nav;