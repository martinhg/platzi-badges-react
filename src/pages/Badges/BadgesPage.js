import React from 'react';
import { Link } from "react-router-dom";

import './BadgesPage.scss';

import api from '../../api';
import ConferenceLogo from '../../assets/img/badge-header.svg'
import BadgeList from '../../components/BadgeList/BadgeList';
import PageLoading from '../../components/PageLoading/PageLoading';
import PageError from '../../components/PageError/PageError';
import MiniLoader from '../../components/MiniLoader/MiniLoader';

class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount() {
        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000);
    };

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch(error) {
            this.setState({ loading: false, error: error });
        };
    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
    };
    
    render () {

        if (this.state.loading && !this.state.data) {
            return (
                <PageLoading />
            );
        }

        if (this.state.error) {
            return (
                <PageError error={this.state.error} />
            );
        }

        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src= { ConferenceLogo } alt="Logo" />
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgeList badges= { this.state.data } />
                            { this.state.loading && <MiniLoader /> }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
