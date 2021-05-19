import React from 'react';
import styled from "styled-components/native";
import {Platform, Text} from 'react-native';
import WebView from "react-native-webview";


const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo = ({restaurant, isMap}: any) => {
    const Image = isAndroid && isMap? CompactWebview : CompactImage;
    return (
        <Item>
            <Image source={{uri: restaurant.photos[0]}}/>
            <Text>{restaurant.name}</Text>
        </Item>
    );
};

export default CompactRestaurantInfo;
