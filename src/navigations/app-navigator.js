import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from '_scenes/welcome';

const AppNavigatorConfig = {
  initialRouteName: 'Welcome',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Welcome: {
    screen: WelcomeScreen,
  },
};

const AppNavigator = createStackNavigator(RouteConfigs, AppNavigatorConfig);
export default AppNavigator;
