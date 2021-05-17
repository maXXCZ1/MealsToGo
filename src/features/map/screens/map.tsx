import React, {useContext, useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import styled from "styled-components";
import {Search} from "../components/search.component";
import {LocationContext} from "../../../services/location/location.context";
import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const MapScreen = () => {
    const {location} = useContext(LocationContext);
    const {restaurants = []} = useContext(RestaurantsContext);
    const [latDelta, setLatDelta] = useState(0);

    const {lat, lng, viewport} = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        const latDelta = northeastLat - southwestLat;
        setLatDelta(latDelta);
    }, [location, viewport]);


    return (
        <>
            <Search/>
            <Map region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.05,
                longitudeDelta: 0.02,
            }}
            >
                {restaurants.map((restaurant) => {
                    return <Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        coordinate={{
                            latitude: restaurant.geometry.location.lat,
                            longitude: restaurant.geometry.location.lng,
                        }}
                    />
                })}
            </Map>
        </>
    )
};


export default MapScreen;