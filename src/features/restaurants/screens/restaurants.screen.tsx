import React from 'react';
import {FlatList, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurants-info-card.component';
import styled from 'styled-components';
import {SafeArea} from '../components/utility/safe.area.component';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar value={'Search'}/>
      </SearchContainer>
      <RestaurantList
        data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item: any) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantScreen;
