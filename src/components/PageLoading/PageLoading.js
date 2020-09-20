import React from 'react';

import './PageLoading.scss';

import Loader from '../Loader/Loader';

const PageLoading = () => {
    return (
        <div className="pageLoading">
            <Loader />
        </div>
    );
};

export default PageLoading;
