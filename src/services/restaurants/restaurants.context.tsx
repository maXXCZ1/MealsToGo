import React, {createContext, useContext, useEffect, useState} from "react";
import {restaurantsRequest, restaurantsTransform} from "./restaurants.service";
import {LocationContext} from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);
    const {location} = useContext(LocationContext);

    const retrieveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(loc)
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                });
        }, 1000);
    };

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }

    }, [location]);

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error,
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};
// export const RestaurantsContextProvider = ({children}) => {
//     return (
//         <RestaurantsContext.Provider
//             value={{
//                 restaurants: [1, 2, 3, 4, 5, 6],
//             }}
//         >
//             {children}
//         </RestaurantsContext.Provider>
//     );
// };
