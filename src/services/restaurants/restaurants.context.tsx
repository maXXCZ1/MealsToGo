import React, {createContext, useEffect, useState} from "react";
import {restaurantsRequest, restaurantsTransform} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                });
        }, 2000);
    };

    useEffect(() => {
        retrieveRestaurants()
    }, []);
    return (
        <RestaurantsContext.Provider
            value={{
                restaurants: [1, 2, 3, 4, 5, 6, 7, 8],
                restaurants,
                isLoading,
                error,
            }}
        >
            {children}
        </RestaurantsContext.Provider>);


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
