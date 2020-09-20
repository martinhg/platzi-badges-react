import React from 'react';

import './Badge.scss';

import ConferenceLogo from '../../assets/img/badge-header.svg';
import Gravatar from '../Gravatar/Gravatar';

class Badge extends React.Component {
    render () {
        const { firstName, lastName, jobTitle, twitter, email } = this.props;

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={ConferenceLogo} alt="Conference logo" />
                </div>

                <div className="Badge__section-name">
                    <Gravatar
                        className="Badge__avatar"
                        email={ email }
                        alt="Avatar"
                    />
                    <h1>{ firstName }<br/>{ lastName }</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{ jobTitle }</h3>
                    <div>@{ twitter }</div>
                </div>
                
                <div className="Badge__footer">
                    #PlatziConf
                </div>
            </div>
        );
    };
};

export default Badge;
