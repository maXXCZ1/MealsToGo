import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurants-info-card.component';
import styled from 'styled-components';
import {SafeArea} from '../components/utility/safe.area.component';
import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const RestaurantScreen = () => {

    const {isLoading, error, restaurants}: any = useContext(RestaurantsContext);

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar value={'Search'}/>
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={(item) => <RestaurantInfoCard/>}
                keyExtractor={(item: any) => item.name}
            />
        </SafeArea>
    );
};

export default RestaurantScreen;
