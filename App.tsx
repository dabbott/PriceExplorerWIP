import * as React from 'react';
import {SafeAreaView, Alert, View, Text} from 'react-native';
import {currencies, getCurrency} from './api/resource';
import CurrencyList from './components/CurrencyList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

type RootParamList = {
  Portfolio: undefined;
  Details: {id: string};
};

type PortfolioScreenProps = StackScreenProps<RootParamList, 'Portfolio'>;

const PortfolioScreen = ({navigation}: PortfolioScreenProps) => {
  return (
    <CurrencyList
      currencies={currencies()}
      onPressRow={(id) => {
        const currency = getCurrency(id);

        if (currency) {
          navigation.push('Details', {id: currency.id});
        }
      }}
    />
  );
};

type DetailsScreenProps = StackScreenProps<RootParamList, 'Details'>;

const DetailsScreen = ({
  route: {
    params: {id},
  },
}: DetailsScreenProps) => {
  const currency = getCurrency(id);

  if (!currency) {
    return null;
  }

  return (
    <View>
      <Text>{currency.name}</Text>
    </View>
  );
};

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
