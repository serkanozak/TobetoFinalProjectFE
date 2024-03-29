import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import NotFound from '../../pages/NotFound/NotFound';

type Props = {}

const RouteDefinations = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RouteDefinations;