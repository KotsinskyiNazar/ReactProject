import React from 'react';

const Genre = ({genre:{name,id}}) => {
    return (
        <div>
            <p>Genre: {name}</p>
        </div>
    );
};

export {Genre};