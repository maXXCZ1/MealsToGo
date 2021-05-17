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
import {ThemeProvider} from 'styled-components';
import {theme} from "./src/infrastructure/Theme";
import {RestaurantsContextProvider} from "./src/services/restaurants/restaurants.context";
import {LocationContextProvider} from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/navigation";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <LocationContextProvider>
                <RestaurantsContextProvider>
                    <Navigation/>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </ThemeProvider>
    );
};

export default App;
