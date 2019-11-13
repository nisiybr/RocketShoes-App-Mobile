import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={logo} />
      <Icon name="shopping-basket" size={30} color="#FFF" />
    </Container>
  );
}
