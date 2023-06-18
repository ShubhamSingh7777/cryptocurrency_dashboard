import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingComponent2() {

    return (

        <>
            <div>
                <Spinner animation="border" role="status" variant="primary" style={{ width: '2rem', height: '2rem', borderWidth: '0.1em' }} />
                <p> <span>Loading...</span></p>
            </div>
        </>
    )
}

export default LoadingComponent2;
