import React, {useContext, useEffect, useState} from 'react';
import MapView, {Callout, Marker} from 'react-native-maps';
import styled from "styled-components";
import {Search} from "../components/search.component";
import {LocationContext} from "../../../services/location/location.context";
import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";
import MapCallout from "../components/map-callout.component";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const MapScreen = ({navigation}) => {
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

//TODO in google.cloud console i restricted API to IP address, might revert it back if it won't run properly!!
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
                    >
                        <Callout onPress={() => navigation.navigate('RestaurantDetail', {restaurant: restaurant})}>
                            <MapCallout restaurant={restaurant} isMap/>
                        </Callout>
                    </Marker>
                })}
            </Map>
        </>
    )
};


export default MapScreen;
