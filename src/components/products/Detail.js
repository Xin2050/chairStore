import React from 'react';
import {useParams,useLocation} from 'react-router';

const Detail = () => {

    console.log(useParams());
    console.log(useLocation());

    return (

        <div>
        Details
        </div>
    );
};

export default Detail;