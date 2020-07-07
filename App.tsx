import React from 'react';
import {SafeAreaView} from 'react-native';
import {currencies} from './api/resource';
import CurrencyList from './components/CurrencyList';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CurrencyList currencies={currencies()} />
    </SafeAreaView>
  );
};

export default App;
