import React from 'react';
import {ScrollView, TouchableOpacity, View, Text} from 'react-native';
import styled from "styled-components";
import CompactRestaurantInfo from "../../features/restaurants/components/compact-restaurant-info.component";
import {Spacer} from "../spacer/spacer.component";


const FavouritesWrapper = styled(View)`
  padding: 10px;
`;

const FavouritesBar = ({favourites, onNavigate}: any) => {

    if(!favourites.length) {
        return null;
    }

    return (
        <FavouritesWrapper>
            <Spacer variant='left' size='medium'>
                <Text>Favourites</Text>
            </Spacer>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <Spacer key={key} position='left' size='medium'>
                            <TouchableOpacity onPress={() => onNavigate('RestaurantDetail', {restaurant})}>
                            <CompactRestaurantInfo restaurant={restaurant}/>
                            </TouchableOpacity>
                        </Spacer>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    );
};

export default FavouritesBar;
