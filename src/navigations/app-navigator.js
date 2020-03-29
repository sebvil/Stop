import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from '_scenes/welcome';
import CategoriesScreen from '_scenes/categories';

const AppNavigatorConfig = {
  initialRouteName: 'Welcome',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Welcome: {
    screen: WelcomeScreen,
  },
  Categories: {
    screen: CategoriesScreen,
  },
};

const AppNavigator = createStackNavigator(RouteConfigs, AppNavigatorConfig);
export default AppNavigator;
