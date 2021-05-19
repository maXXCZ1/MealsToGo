import React, {useContext} from 'react';
import {FavouritesContext} from "../../services/favourites/favourites.context";
import {TouchableOpacity} from "react-native";
import styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
`;

export const Favourite = ({restaurant}) => {
    const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext);

    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

    return (
        <FavouriteButton onPress={() => !isFavourite? addToFavourites(restaurant) : removeFromFavourites(restaurant)}>
            <Ionicons name={isFavourite ? 'heart': 'heart-outline'} size={24} color={isFavourite? 'red' : 'white'}/>
        </FavouriteButton>
    );
}

