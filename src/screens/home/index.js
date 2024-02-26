import React, {useCallback} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';

import CustomHeader from '../../components/appHeader';
import {AppPrimary, PrimaryWhite, SecondryWhite} from '../../constants/colors';
import {APP_HEADER} from '../../constants/constants';
import {useGetAllListQuery} from '../../services/products';
import List from './List';

const Home = ({navigation}) => {
  const keyExtractor = useCallback(r => r.id, []);

  const {data, error, isLoading} = useGetAllListQuery();
  if (isLoading) {
    return <Text>Loading ....</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  const renderItem = ({item}) => {
    return <List item={item} />;
  };

  const navigateToCart = () => {
    navigation.navigate('cart');
  };
  return (
    <>
      <CustomHeader
        title={APP_HEADER.title}
        isShowCart={true}
        onCartPress={navigateToCart}
      />

      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={2}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SecondryWhite,
  },
  imgContainer: {
    backgroundColor: PrimaryWhite,
    width: Dimensions.get('window').width / 2 - 20,
    height: 260,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  img: {width: '80%', height: '80%', borderRadius: 10},
  text: {
    color: AppPrimary,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
});
