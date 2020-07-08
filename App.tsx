import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import DetailsScreen from './screens/DetailsScreen';
import ModalScreen from './screens/ModalScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import {MainParamList, RootParamList} from './screens/types';
import BuyScreen from './screens/BuyScreen';

const Root = createStackNavigator<RootParamList>();

const Main = createStackNavigator<MainParamList>();

const RootScreen = () => (
  <Root.Navigator>
    <Root.Screen
      options={{
        headerShown: false,
      }}
      name="Portfolio"
      component={PortfolioScreen}
    />
    <Root.Screen name="Details" component={DetailsScreen} />
  </Root.Navigator>
);

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Main.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Main.Screen name="Root" component={RootScreen} />
          <Main.Screen
            name="Modal"
            component={ModalScreen}
            options={{
              cardStyle: {
                backgroundColor: 'transparent',
              },
              cardOverlayEnabled: true,
              gestureDirection: 'vertical',
              cardStyleInterpolator: ({current}) => ({
                overlayStyle: {
                  backgroundColor: 'black',
                  opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.2],
                  }),
                },
              }),
            }}
          />
          <Main.Screen name="Buy" component={BuyScreen} />
        </Main.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
