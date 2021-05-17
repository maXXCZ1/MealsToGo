import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RestaurantScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator headerMode='none'>
            <RestaurantStack.Screen name="Restaurants">
                {props => <RestaurantScreen {...props} />}
            </RestaurantStack.Screen>
            <RestaurantStack.Screen name="RestaurantDetail">
                {props => <RestaurantDetailScreen {...props} />}
            </RestaurantStack.Screen>
        </RestaurantStack.Navigator>
    );
};

export default RestaurantNavigator;
