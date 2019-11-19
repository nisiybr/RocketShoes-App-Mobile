import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #141419;
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 20px;
`;

export const LogoButton = styled(RectButton)``;
export const CartButton = styled(RectButton)``;

export const ItemCount = styled.Text`
  position: absolute;
  left: 20;
  color: #fff;
  background: #7159c1;
  text-align: center;
  min-height: 18px;
  min-width: 18px;
  border-radius: 9px;
  font-weight: bold;
`;
