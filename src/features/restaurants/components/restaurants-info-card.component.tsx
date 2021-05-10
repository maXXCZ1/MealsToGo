import React from 'react';
import {Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {Spacer} from '../../../components/spacer/spacer.component';
import {
  Address,
  Info,
  IsOpen,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantInfo,
  TextTempClosed,
  Title,
} from './restaurant.info.card.styles';

const RestaurantInfoCard = ({restaurant = {}}: any) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 Some random street',
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Title>{name}</Title>
        <RestaurantInfo>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <IsOpen>
            {isClosedTemporarily && (
              <TextTempClosed style={{color: 'darkred'}}>
                TEMPORARILY CLOSED
              </TextTempClosed>
            )}
            <Spacer position="left" size="medium" />
            {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
            <Spacer position="left" size="medium" />
            <Image style={{width: 15, height: 15}} source={{uri: icon}} />
          </IsOpen>
        </RestaurantInfo>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
