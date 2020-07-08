import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import DetailsScreen from './screens/DetailsScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import {RootParamList, MainParamList} from './screens/types';
import Button from './components/Button';

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

const ModalScreen = () => (
  <View style={{padding: 40}}>
    <Button title="Buy" onPress={() => {}} />
    <View style={{height: 20}} />
    <Button title="Sell" onPress={() => {}} />
  </View>
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
          <Main.Screen name="Modal" component={ModalScreen} />
        </Main.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
