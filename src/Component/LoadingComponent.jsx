import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingComponent() {

    return (

        <>
            <div>
                <Spinner animation="border" role="status" variant="primary" style={{ width: '12rem', height: '12rem', borderWidth: '0.1em' }} />
                <p> <span>Loading...</span></p>
            </div>
        </>
    )
}

export default LoadingComponent;
