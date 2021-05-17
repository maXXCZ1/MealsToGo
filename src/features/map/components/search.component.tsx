import styled from "styled-components";
import {View} from "react-native";
import React, {useContext, useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper'
import {LocationContext} from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
`;

export const Search = () => {
    const {keyword, search} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword]);


//TODO removed in ep. 165
    // useEffect(() => {
    //  search(searchKeyword)
    // }, []);

    return (
        <SearchContainer>
            <Searchbar
                placeholder={"Search for a location"}
                icon={'map'}
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    )
};
