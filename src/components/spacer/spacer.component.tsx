import React from 'react';
import styled, {useTheme} from 'styled-components';
import {Animated, View} from "react-native";



const sizeVariant: { [key: string]: number } = {
    small: 1,
    medium: 2,
    large: 3,
    xl: 4,
    xxl: 5,
};

const positionVariant: { [key: string]: string } = {
    top: 'marginTop',
    left: 'marginLeft',
    right: 'marginRight',
    bottom: 'marginBottom',
};

const getVariant = (position: string, size: number, theme: any) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];

    return `${property}:${value}`;
};

// interface Spacer {
//   position: string;
//   size: string;
//   children: any;
// }

//TODO Components have only one parameter and it is called props, you cannot write
//  ${(variant) => variant}; in typescript without warnings

const SpacerView = styled(View)`
  ${({variant}: any) => variant};
`;

export const Spacer = ({position, size, children}: any) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    console.log(`passed to SpacerView is: ${variant}`);
    return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
    position: 'top',
    size: 'small',
};
