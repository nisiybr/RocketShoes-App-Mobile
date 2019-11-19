import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/logo.png';

import { Container, LogoButton, CartButton, ItemCount } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <LogoButton onPress={() => navigation.navigate('Home')}>
        <Image source={logo} />
      </LogoButton>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={30} color="#FFF" />
        <ItemCount>{cartSize || 0}</ItemCount>
      </CartButton>
    </Container>
  );
}
