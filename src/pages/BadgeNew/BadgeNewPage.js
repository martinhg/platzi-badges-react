import React from 'react';

import './BadgeNewPage.scss';

import api from '../../api';
import Header from '../../assets/img/platziconf-logo.svg';
import Badge from '../../components/Badge/Badge';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import PageLoading from '../../components/PageLoading/PageLoading';

class BadgeNewPage extends React.Component {

    state = { 
        loading: false,
        error: null,
        form: {
            firstName: '',
            LastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };

    handleChange = ( event ) => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value,
            }
        });
    };

    handleSubmit = async ( event ) => {
        event.preventDefault();
        this.setState({ loading: true, error: null });

        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });

            this.props.history.push('/badges');
        } catch(error) {
            this.setState({ loading: false, error: error });
        }
    };

    render () {
        const { firstName, lastName, twitter, jobTitle, email } = this.state.form;

        if ( this.state.loading ) {
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={ Header } alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName= { firstName }
                                lastName= { lastName } 
                                twitter= { twitter } 
                                jobTitle= { jobTitle } 
                                email= { email }
                                avatarUrl= "https://s.gravatar.com/avatar/e3c4457d125c525044bf5940feea593f?s=80" 
                            />
                        </div>

                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange= { this.handleChange }
                                onSubmit= { this.handleSubmit }
                                formValues= { this.state.form }
                                error= { this.state.error }
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

export default BadgeNewPage;
