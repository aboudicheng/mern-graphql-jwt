import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import AuthNavigation from './auth';
import NonAuthNavigation from './nonauth';

function Navigation() {
    const mapState = useCallback((state) => ({
        authUser: state.sessionState.authUser
    }), [])

    const { authUser } = useMappedState(mapState);

    return authUser ? <AuthNavigation /> : <NonAuthNavigation />
}

export default Navigation;