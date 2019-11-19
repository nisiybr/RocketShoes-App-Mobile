import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'; // Deixa disponivel o store da aplicacao para todos os componentes, jogar por volta de todos os componentes da aplicacao
import Routes from './routes';
import './config/ReactotronConfig';
import store from './store';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Routes
          ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
        />
      </Provider>
    </>
  );
}
