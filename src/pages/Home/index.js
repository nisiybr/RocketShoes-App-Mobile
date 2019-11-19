import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Conecta o componente com o estado do redux
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions'; /** o asterisco importa todas as functions */
import formatPrice from '../../util/format';
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

export default function Home() {
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const [products, setProducts] = useState([]);

  // para disparar as actions do redux
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      // para usar o async e await, deve ser criada uma funcao nova e chamada ela apos a declaracao
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
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
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <AddButton
                onPress={() => dispatch(CartActions.addToCartRequest(item.id))}
              >
                <AuxButton>
                  <IconShop name="shopping-basket" size={30} color="#FFF" />
                  <QtdText>{amount[item.id] || 0}</QtdText>
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
