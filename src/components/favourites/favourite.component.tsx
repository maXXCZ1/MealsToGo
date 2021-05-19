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

export const Favourite = () => {
    const {favourites, addtoFavourites, removeFromFavourites} = useContext(FavouritesContext);

    return (
        <FavouriteButton>
            <Ionicons name='heart' size={24} color={'red'}/>
        </FavouriteButton>
    );
}

