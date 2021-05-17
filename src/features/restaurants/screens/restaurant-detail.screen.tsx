import React, {useState} from 'react';
import {ScrollView} from "react-native";
import {SafeArea} from '../components/utility/safe.area.component';
import RestaurantInfoCard from "../components/restaurants-info-card.component";
import {List} from 'react-native-paper';

const RestaurantDetailScreen = ({route}) => {

    const [expandBreakfastMenu, setExpandBreakfastMenu] = useState(false);
    const [expandLunchMenu, setExpandLunchMenu] = useState(false);
    const [expandDinnerMenu, setExpandDinnerMenu] = useState(false);

    const handlePressBreakFast = () => setExpandBreakfastMenu(!expandBreakfastMenu)
    const handlePressLunch = () => setExpandLunchMenu(!expandLunchMenu)
    const handlePressDinner = () => setExpandDinnerMenu(!expandDinnerMenu)

    const {restaurant} = route.params;
    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant}/>
            <ScrollView>
            <List.Section title="Menu" >
                <List.Accordion
                    title="Breakfast"
                    expanded={expandBreakfastMenu}
                    onPress={() => handlePressBreakFast()}
                    left={props => <List.Icon {...props} icon="format-list-bulleted"
                    />}>
                    <List.Item title="Scrambled eggs"/>
                    <List.Item title="Toast with ham"/>
                </List.Accordion>
                <List.Accordion
                    title="Lunch"
                    expanded={expandLunchMenu}
                    onPress={() => handlePressLunch()}
                    left={props => <List.Icon {...props} icon="format-list-bulleted"/>}>
                    <List.Item title="Fish & chips"/>
                    <List.Item title="Spaghetti bolognese"/>
                </List.Accordion>
                <List.Accordion
                    title="Dinner"
                    expanded={expandDinnerMenu}
                    onPress={() => handlePressDinner()}
                    left={props => <List.Icon {...props} icon="format-list-bulleted"/>}>
                    <List.Item title="I don't know"/>
                    <List.Item title="Secret of our chef"/>
                </List.Accordion>
            </List.Section>
            </ScrollView>
        </SafeArea>
);
};

export default RestaurantDetailScreen;
