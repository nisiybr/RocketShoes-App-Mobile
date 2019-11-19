import { createStore, applyMiddleware, compose } from 'redux';
// applyMidleware - Aplica configuracoes de middleware dentro no store
// compose - faz um merge de configuracoes, aqui vai ser usado para juntar o createEnhancer com as configuracoes de middlewares
import createSagaMiddleware from 'redux-saga'; // importa a library para criar um saga middleware
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development' // criada para utilizar o reactotron para redux saga
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(), // com esse compose ele ira mesclar as duas configuracoes
        applyMiddleware(sagaMiddleware)
      )
    : applyMiddleware(sagaMiddleware); // utiliza o redux  no reactotron

const store = createStore(rootReducer, enhancer); // o reducer eh passado como parametro para o createStore

sagaMiddleware.run(rootSaga);

export default store;
