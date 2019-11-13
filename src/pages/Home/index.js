import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {
  Container,
  ProductList,
  ProductImage,
  Product,
  AddButton,
  AuxButton,
  QtdText,
  ButtonText,
  IconShop,
  ProductName,
  ProductPrice,
} from './styles';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      // para usar o async e await, deve ser criada uma funcao nova e chamada ela apos a declaracao
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <>
      <Container>
        <ProductList
          data={products}
          keyExtractor={product => String(product.id)}
          horizontal
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} alt={item.title} />
              <ProductName>{item.title}</ProductName>
              <ProductPrice>{item.price}</ProductPrice>
              <AddButton onPress={() => navigation.navigate('Cart')}>
                <AuxButton>
                  <IconShop name="shopping-basket" size={30} color="#FFF" />
                  <QtdText>1</QtdText>
                </AuxButton>
                <ButtonText>ADICIONAR</ButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    </>
  );
}
