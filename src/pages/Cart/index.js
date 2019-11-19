import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import formatPrice from '../../util/format';

import {
  Container,
  OutView,
  SubmitButton,
  SubmitButtonText,
  Product,
  Display,
  ProductImage,
  Infos,
  Title,
  SubtotalView,
  Price,
  Quantity,
  Subtotal,
  ProductList,
  AddButton,
  RemoveButton,
  ElementsGrouper,
  RemoveForeverButton,
  Footer,
  TotalLabel,
  TotalValue,
  NoItems,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';
/** o asterisco importa todas as functions */
export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: product.amount * product.price, // calculo do subtotal ocorre no map state
    }))
  );
  const total = formatPrice(
    useSelector(state =>
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.amount * product.price; // calculo do subtotal ocorre no map state
      }, 0)
    )
  );

  // para disparar as actions do redux
  const dispatch = useDispatch();

  function handleRemoveOne(id, actualAmount) {
    const amount = actualAmount - 1;
    dispatch(CartActions.updateAmountRequest(id, amount));
  }

  function handleAddOne(id, actualAmount) {
    const amount = actualAmount + 1;
    dispatch(CartActions.updateAmountRequest(id, amount));
  }

  return (
    <Container>
      <OutView>
        <ProductList
          data={cart}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Product>
              <Display>
                <ProductImage source={{ uri: item.image }} Alt={item.title} />
                <Infos>
                  <Title>{item.title}</Title>
                  <Price>{formatPrice(item.price)}</Price>
                </Infos>
                <RemoveForeverButton
                  onPress={() => dispatch(CartActions.removeFromCart(item.id))}
                >
                  <Icon name="delete-forever" size={25} color="#7159c1" />
                </RemoveForeverButton>
              </Display>
              <SubtotalView>
                <ElementsGrouper>
                  <RemoveButton
                    onPress={() => handleRemoveOne(item.id, item.amount)}
                  >
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </RemoveButton>
                  <Quantity value={String(item.amount)} editable={false} />
                  <AddButton onPress={() => handleAddOne(item.id, item.amount)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </AddButton>
                </ElementsGrouper>
                <Subtotal>{formatPrice(item.subtotal)} </Subtotal>
              </SubtotalView>
            </Product>
          )} // fim da renderizacao das options
        />
        {cart.length <= 0 ? <NoItems>Nao há itens no carrinho</NoItems> : null}
        <Footer>
          <TotalLabel>TOTAL</TotalLabel>
          <TotalValue> {formatPrice(total)}</TotalValue>
          <SubmitButton>
            <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
          </SubmitButton>
        </Footer>
      </OutView>
    </Container>
  );
}
