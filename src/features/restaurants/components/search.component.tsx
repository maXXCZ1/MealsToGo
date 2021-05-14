import styled from "styled-components";
import {View} from "react-native";
import React, {useContext, useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper'
import {LocationContext} from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const Search = () => {
    const {keyword, search} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

//TODO removed in ep. 165
    // useEffect(() => {
    //  search(searchKeyword)
    // }, []);

    return (
        <SearchContainer>
            <Searchbar
                placeholder={"Search for a location"}
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
