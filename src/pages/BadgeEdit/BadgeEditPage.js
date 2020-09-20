import React from 'react';

import './BadgeEditPage.scss';

import api from '../../api';
import Header from '../../assets/img/platziconf-logo.svg';
import Badge from '../../components/Badge/Badge';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import PageLoading from '../../components/PageLoading/PageLoading';

class BadgeEditPage extends React.Component {

    state = { 
        loading: true,
        error: null,
        form: {
            firstName: '',
            LastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };

    componentDidMount() {
        this.fetchData();
    };

    fetchData = async () => {
        this.setState({ loading:true, error:null });

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({ loading: false, form: data });
        } catch( error ) {
            this.setState({ loading: false, error: error });
        };
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
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({ loading: false });

            this.props.history.push('/badges');
        } catch( error ) {
            this.setState({ loading: false, error: error });
        };
    };

    render () {
        const { firstName, lastName, email, jobTitle, twitter } = this.state.form;

        if ( this.state.loading ) {
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src= { Header } alt="Logo" />
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
                            <h1>Edit Attendant</h1>
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
        )
    }
}

export default BadgeEditPage;
