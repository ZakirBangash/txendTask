import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppPrimary, PrimaryWhite, SecondryWhite} from '../../constants/colors';

const List = ({onPress = () => {}, item}) => {
  return (
    <Pressable onPress={onPress} style={styles.imgContainer}>
      <FastImage
        style={styles.img}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSshZJ0v013aQY-4ss0BNYJlsEaOEZrGj1A&usqp=CAU',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.text}>{item.category.category_name}</Text>
      <Text style={styles.text}>{`$ ${item?.price}`}</Text>
    </Pressable>
  );
};

export default List;

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
