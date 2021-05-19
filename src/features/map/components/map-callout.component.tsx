import React from 'react';
import CompactRestaurantInfo from "../../restaurants/components/compact-restaurant-info.component";


const MapCallout = ({restaurant}: any) => {
    return (
        <CompactRestaurantInfo restaurant={restaurant}/>
    );
};

export default MapCallout;
