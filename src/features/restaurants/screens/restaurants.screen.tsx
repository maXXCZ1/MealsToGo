import React, {useContext, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurants-info-card.component';
import styled from 'styled-components';
import {SafeArea} from '../components/utility/safe.area.component';
import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";
import {Spacer} from "../../../components/spacer/spacer.component";
import {Search} from '../components/search.component';
import {FavouritesContext} from "../../../services/favourites/favourites.context";
import FavouritesBar from "../../../components/favourites/favourites-bar.component";


const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantScreen = ({navigation}) => {
    const {isLoading, restaurants}: any = useContext(RestaurantsContext);
    const {favourites}: any = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(false);



    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <ActivityIndicator
                        size={'large'}
                        animating={true}
                        style={{marginLeft: -25}}
                    />
                </LoadingContainer>
            )}
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled &&
            <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>
            }
            <RestaurantList
                data={restaurants}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity delayPressIn={0} onPress={() => navigation.navigate('RestaurantDetail', {
                            restaurant: item
                        })}>
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard restaurant={item}/>
                            </Spacer>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item: any) => item.name}
            />
        </SafeArea>
    );

};

export default RestaurantScreen;
