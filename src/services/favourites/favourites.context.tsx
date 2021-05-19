import React, {createContext, useState} from 'react';
import {View} from 'react-native';

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({children}) => {

    const [favourites, setFavourites] = useState([]);

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    }

    const remove = (restaurant) => {
        const newFavourites = favourites.filter((x: any) => x.placeId !== restaurant.placeId);

        setFavourites(newFavourites)
    }
    return (
    <FavouritesContextProvider
    value={{
     favourites,
     addTofavourites: add,
     removeFromFavourites: remove,
    }}
    >
        {children}
    </FavouritesContextProvider>
  );
};

export default FavouritesContextProvider;
