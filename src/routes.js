import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPreset: 'center', // Deixa o titulo no centro por padrao
      headerBackTitleVisible: false, // Texto no botao de voltar, desabilitado
      // headerMode: 'none',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#141419', // cor do fundo
          height: 64,
          display: 'flex',
        },
        headerTintColor: '#FFF', // cor da letra e botoes
      },
    }
  )
);

export default Routes;
