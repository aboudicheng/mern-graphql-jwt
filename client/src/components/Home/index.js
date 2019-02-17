import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import AuthHome from './auth';
import NonAuthHome from './nonauth';

function Home() {
    const mapState = useCallback((state) => ({
        authUser: state.sessionState.authUser
    }), [])

    const { authUser } = useMappedState(mapState);

    return authUser ? <AuthHome /> : <NonAuthHome />
}

export default Home;