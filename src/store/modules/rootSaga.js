// juntar todos os sagas em um unico arquivo
import { all } from 'redux-saga/effects';
import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([cart]); // quando tiver mais sagas eh so ir adicionando nesse array
}
