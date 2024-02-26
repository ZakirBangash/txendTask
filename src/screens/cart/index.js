/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useCallback} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import CustomHeader from '../../components/appHeader';
import {AppPrimary, PrimaryWhite, SecondryWhite} from '../../constants/colors';
import {APP_HEADER} from '../../constants/constants';
import List from './List';

const Cart = ({navigation}) => {
  const keyExtractor = useCallback(r => r.id, []);
  const cartData = useSelector(state => state.cart);

  const renderItem = ({item}) => {
    const params = {
      item,
    };

    const navigateToUpdate = () => {
      navigation.navigate('updateQuantity', params);
    };

    return <List item={item} navigateToUpdate={navigateToUpdate} />;
  };

  return (
    <>
      <CustomHeader title={APP_HEADER.cartHeader} />

      <View style={styles.container}>
        <FlatList
          data={cartData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={2}
        />
      </View>
    </>
  );
};

export default Cart;

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
