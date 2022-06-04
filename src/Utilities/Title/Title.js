import React from 'react';
import Helmet from 'react-helmet';

const Title = ({ title }) => {
    return (

        <Helmet>
            <title>{title} :: Nobi Cloth Store Warehose</title>
        </Helmet>
    );
};

export default Title;