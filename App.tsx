/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';

const App = () => {
  const [searchQuery, setSearch] = useState('');

  const onChangeSearch = (search: any) => {
    setSearch(search);
  };

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.text}>list</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
});

export default App;
