import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import CustomHeader from '../../components/appHeader';
import Button from '../../components/button';
import {AppPrimary, PrimaryWhite} from '../../constants/colors';
import {APP_HEADER} from '../../constants/constants';
import {Decrement, Increment} from '../../store/cart';

const UpdateQuantity = ({route}) => {
  const initialItem = route.params.item;
  const [item, setItem] = useState(initialItem);

  const dispatch = useDispatch();

  useEffect(() => {
    setItem(route.params.item);
  }, [route.params.item]);

  const handleIncrement = () => {
    dispatch(Increment(item));
    setItem({...item, quantity: item.quantity + 1});
  };

  const handleDecrement = () => {
    dispatch(Decrement(item));
    setItem({...item, quantity: item.quantity - 1});
  };

  return (
    <View style={styles.container}>
      <CustomHeader title={APP_HEADER.confirmQuantity} />

      <View style={styles.imgContainer}>
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
        <Text style={styles.text}>{`Quantity ${item?.quantity}`}</Text>
        <View style={styles.btnContainer}>
          <Button label="Increment" onPress={handleIncrement} />
          <Button label="Decrement" onPress={handleDecrement} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PrimaryWhite,
  },
  imgContainer: {
    backgroundColor: PrimaryWhite,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  img: {
    width: '80%',
    height: '40%',
    borderRadius: 10,
  },
  text: {
    color: AppPrimary,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UpdateQuantity;
