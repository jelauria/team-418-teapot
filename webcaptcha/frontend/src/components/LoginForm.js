import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginForm() {

    const { loginWithRedirect } = useAuth0();

    return (
        <React.Fragment>
            <button onClick={() => loginWithRedirect()}>
                Log In
            </button>
        </React.Fragment>
    );
}

export default LoginForm;