import React, {useContext} from 'react';
import {FavouritesContext} from "../../services/favourites/favourites.context";
//TODO import vector icons
import  icons  from 'react-native-vector-icons';
import {TouchableOpacity} from "react-native";
import styled from "styled-components";
import {Icon} from "react-native-vector-icons/Icon";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = () => {
    const {favourites, addtoFavourites, removeFromFavourites} = useContext(FavouritesContext)

    return (
        <FavouriteButton >
            <Icon name={'heart'} size={24}/>
        </FavouriteButton>
    );
}

