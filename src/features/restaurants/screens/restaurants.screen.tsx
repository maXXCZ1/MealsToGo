import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {ActivityIndicator, Colors, Searchbar} from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurants-info-card.component';
import styled from 'styled-components';
import {SafeArea} from '../components/utility/safe.area.component';
import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";
import {Spacer} from "../../../components/spacer/spacer.component";

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

// const ActivityLoader = () => {
//     <ActivityIndicator animating={true} color={Colors.red800} size={'large'}/>
// };

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantScreen = () => {
    const {isLoading, error, restaurants}: any = useContext(RestaurantsContext);
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
            <SearchContainer>
                <Searchbar value={'Search'}/>
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({item}) => {
                    return (
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item}/>
                        </Spacer>
                    );
                }}
                keyExtractor={(item: any) => item.name}
            />
        </SafeArea>
    );
};

export default RestaurantScreen;
