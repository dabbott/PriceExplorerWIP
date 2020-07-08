import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import DetailsScreen from './screens/DetailsScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import {RootParamList} from './screens/types';

const Root = createStackNavigator<RootParamList>();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
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
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
