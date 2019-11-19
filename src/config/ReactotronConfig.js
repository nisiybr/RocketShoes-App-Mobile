import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga'; // importando reactotron para Redux Saga

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux()) // usar o reactotron para debuggar redux
    .use(reactotronSaga()) // usar o reactotron para debugar redux saga
    .connect();

  console.tron = tron;
  tron.clear();
}
