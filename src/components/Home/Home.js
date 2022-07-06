import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h4>This is home</h4>
            <p>Corrent User Is: {user ? user.displayName : "No One sigh-in"}</p>
        </div>
    );
};

export default Home;