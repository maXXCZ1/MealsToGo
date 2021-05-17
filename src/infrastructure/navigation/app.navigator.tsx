import {Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {SafeArea} from "../../features/restaurants/components/utility/safe.area.component";
import Ionicons from "react-native-vector-icons/Ionicons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RestaurantNavigator from "./restaurant.navigator";
import Map from "../../features/map/screens/map";

const SettingsScreen = () => {
    return (
        <SafeArea>
            <Text>Settings! </Text>
        </SafeArea>
    );
};

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({size, color}) => (
            <Ionicons name={iconName} size={size} color={color}
            />
        ),
    }
        ;
};

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                    activeTintColor: "tomato", inactiveTintColor: "gray",
                }}
            >
                <Tab.Screen name="Restaurants" component={RestaurantNavigator}/>
                <Tab.Screen name="Map" component={Map}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
