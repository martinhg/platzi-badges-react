import React from 'react';

import './PageError.scss';

const PageError = ( props ) => {
    const errorMessage = props.error.message; 
    return (
        <div className="pageError">
            <span role="img" aria-label="">❌{ errorMessage } 😱</span>
        </div>
    );
};

export default PageError;
