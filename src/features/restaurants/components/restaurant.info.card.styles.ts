import styled from 'styled-components/native';
import {Card} from 'react-native-paper';
import {Text, View} from 'react-native';

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]}
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const RestaurantCard = styled(Card)`
  margin-bottom: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Title = styled(Text)`
  color: ${props => props.theme.colors.ui.primary};
  font-size: ${props => props.theme.sizes[1]};
`;

export const Info = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const Address = styled(Text)`
  font-size: 10px;
  font-weight: bold;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

export const RestaurantInfo = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

export const IsOpen = styled(View)`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
`;

export const TextTempClosed = styled(Text)``;
