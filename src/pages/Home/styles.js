import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #191920;
  padding: 40px 10px;
  align-items: center;
  justify-content: center;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Product = styled.View`
  align-items: center;
  width: 220px;
  height: 360px;
  border-radius: 8px;
  background: #fff;
  padding: 10px;
  margin: 0 20px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ProductName = styled.Text`
  text-align: center;
  font-size: 16;
  font-family: 'Arial, Helvetica, sans-serif';
  color: #333333;
`;
export const ProductPrice = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  font-size: 21;
  font-family: 'Arial, Helvetica, sans-serif';
  color: #000;
`;
export const AddButton = styled(RectButton)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto; /** alinha o botao o mais embaixo possivel */

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AuxButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 6px;
  margin-right: 5px;
`;
export const QtdText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 5px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  flex: 1;
  flex-direction: row;
  text-align: center;
`;
export const IconShop = styled(Icon)`
  color: #fff;
`;
