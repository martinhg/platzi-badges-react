import React from 'react';
import { Link } from 'react-router-dom';

import './BadgeList.scss';

import Gravatar from '../Gravatar/Gravatar';

class BadgesListItem extends React.Component {
    render () {
        const {firstName, lastName, email, jobTitle, twitter} = this.props.badge;

        return (
            <div className='BadgesListItem'>
                <Gravatar
                    email={ email }
                    className='BadgesListItem__avatar'
                />

                <div>
                    <strong>
                        { firstName } { lastName }
                    </strong>
                    <br />@{ twitter }
                    <br />
                    { jobTitle }
                </div>
            </div>
        );
    };
};

function useSearchBadges( badge ) {
    const [ query, setQuery ] = React.useState('');
    const [ filteredBadges, setFilteredBadges ] = React.useState(badge);

    React.useMemo( () => { 
        const result = badge.filter( badge => {
        return `${ badge.firstName } ${ badge.lastName }`.toLowerCase().includes(query.toLowerCase());
        });

        setFilteredBadges(result);
    }, [badge, query]);

    return { query, setQuery, filteredBadges };
};

const BadgesList = ( { badges } ) => {

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className='form-group'>
                    <label>Filter Badges</label>
                    <input type='text' className='form-control' value= { query } onChange= { (event) => {
                        setQuery(event.target.value);
                    }} />
                </div>
                <h3>No badges were found</h3>
                <Link className='btn btn-primary' to='/badges/new'>Create new badge</Link>
            </div>
        );
    };

    return (
        <div className='BadgesList'>
            <div className='form-group'>
                <label>Filter Badges</label>
                <input type='text' className='form-control' value= { query } onChange={ (event) => {
                    setQuery(event.target.value);
                }} />
            </div>
            <ul className='list-unstyled'>
                {filteredBadges.map( (badge) => {
                    return (
                        <li key= { badge.id }>
                            <Link className='text-reset text-decoration-none' to= { `/badges/${badge.id}` }>
                                <BadgesListItem badge= { badge } />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BadgesList;
