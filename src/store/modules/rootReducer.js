// juntar todos os reducers em um unico arquivo

import { combineReducers } from 'redux'; // vai servir para a utilizacao de mais de um reducer ao mesmo tempo
import cart from './cart/reducer';

export default combineReducers({
  cart,
});
