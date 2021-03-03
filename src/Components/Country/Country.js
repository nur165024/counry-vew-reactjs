import React from 'react';

const Country = (props) => {
    console.log(props);
    const {name,capital} = props.country;

    return (
        <div>
            <ul>
                <li>{name}</li>
                <h3>{capital}</h3>
            </ul>
        </div>
    );
};

export default Country;