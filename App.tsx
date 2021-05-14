/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

//TODO Failed to load fonts via expo fonts, sticking to basic for now

import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from "@react-navigation/native";
import RestaurantScreen from "./src/features/restaurants/screens/restaurants.screen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeArea} from './src/features/restaurants/components/utility/safe.area.component';
import {theme} from "./src/infrastructure/Theme";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RestaurantsContextProvider} from "./src/services/restaurants/restaurants.context";
import {LocationContextProvider} from "./src/services/location/location.context";


const SettingsScreen = () => {
    return (
        <SafeArea>
            <Text>Settings!</Text>
        </SafeArea>
    );
};


const MapScreen = () => {
    return (
        <SafeArea>
            <Text>Map!</Text>
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
            <Ionicons name={iconName} size={size} color={color}/>
        ),
    };
};

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <LocationContextProvider>
                <RestaurantsContextProvider>
                    <NavigationContainer>
                        <Tab.Navigator
                            screenOptions={createScreenOptions}
                            tabBarOptions={{
                                activeTintColor: "tomato",
                                inactiveTintColor: "gray",
                            }}
                        >
                            <Tab.Screen name="Restaurants" component={RestaurantScreen}/>
                            <Tab.Screen name="Map" component={MapScreen}/>
                            <Tab.Screen name="Settings" component={SettingsScreen}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </ThemeProvider>
    );
};

export default App;
