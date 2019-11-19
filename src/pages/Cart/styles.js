import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #191920;
  padding: 40px 10px;
  align-items: center;
`;

export const OutView = styled.View`
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  width: 340px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Product = styled.View`
  padding: 0 5px;
  margin-top: 20px;
`;
export const Display = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductImage = styled.Image`
  width: 120px;
  height: 120px;
`;
export const Infos = styled.View`
  flex: 1;
  margin-left: 10px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 14px;
  color: #333333;
`;
export const Price = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  color: #000;
  font-size: 16px;
`;
export const SubtotalView = styled.View`
  flex-direction: row;
  margin-top: 10px;
  background: #eee;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  height: 40px;
`;
export const Quantity = styled.TextInput`
  background: #fff;
  border: 1px #979797;
  border-radius: 4px;
  height: 25px;
  padding: 5px;
  text-align: center;
  color: #666666;
  margin: 0 10px;
`;
export const Subtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ProductList = styled.FlatList`
  margin-bottom: 10px;
`;

export const AddButton = styled(RectButton)``;
export const RemoveButton = styled(RectButton)``;
export const RemoveForeverButton = styled(RectButton)``;

export const ElementsGrouper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  margin-top: auto;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;

  background: #7159c1;
  border-radius: 8px;
  padding: 10px 20px;
`;
export const TotalLabel = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
export const TotalValue = styled.Text`
  color: #000;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;
export const NoItems = styled.Text`
  text-align: center;
  font-weight: bold;
  padding: 20px 0;
  color: #999;
`;
