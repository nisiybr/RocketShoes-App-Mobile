import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import NavigationService from '../../../services/navigation';
// call eh a chamada da api
// put eh como o saga chama uma action
// all eh um metodo utilizado para exportar como padrao, para cadastrar varios listeners
// takeLatest e takeEvery sao metodos para escutar actions no saga
// takeLatest vai pegar a ultima response, se uma request foi chamada enquanto a anterior nao foi finalizada
// o takeEvery vai pegar e cadastrar todas as vezes que o user clicar no botao, repetidamente em pouco tempo
// select eh usado para acessar o state pelo saga

import api from '../../../services/api';
import { addToCartSucess, updateAmountSucess } from './actions';
// import history from '../../../services/history';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSucess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`); // yield eh o await do generator
    const data = {
      ...response.data,
      amount: 1,
    };
    yield put(addToCartSucess(data));
  }
  NavigationService.navigate('Cart');
}
function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    alert('Quantidade zero nao é permitida, favor excluir o item do carrinho');
    return;
  }

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    alert('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSucess(id, amount));
}
// listeners
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  // primeira acao eh o type da action que queremos ouvir
  // o segundo parametro eh a funcao aqui dentro do saga que sera executada
]);
