import {locationRequest, locationTransform} from "./location.service";
import React, {createContext, useEffect, useState} from "react";

export const LocationContext = createContext()

export const LocationContextProvider = ({children}) => {
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        locationRequest(searchKeyword.toLowerCase()).then(locationTransform)
            .then(result => {
                setIsLoading(false);
                setLocation(result);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error);
            })
    };

    useEffect(() => {
       onSearch(keyword);
    }, []);


    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword
            }}
        >
            {children}
        </LocationContext.Provider>
    )
};
