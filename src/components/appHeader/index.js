import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import {AppPrimary, PrimaryWhite} from '../../constants/colors';
import {APP_HEADER} from '../../constants/constants';

const CustomHeader = ({title, onCartPress = () => {}, isShowCart = false}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        {isShowCart ? (
          <Pressable onPress={onCartPress} style={styles.cartButton}>
            <Text style={styles.text}>{APP_HEADER.cart}</Text>
          </Pressable>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: AppPrimary,
  },
  header: {
    backgroundColor: AppPrimary,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
  cartButton: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: PrimaryWhite,
    marginRight: 10,
  },
});

export default CustomHeader;
