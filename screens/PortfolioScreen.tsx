import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {currencies, getCurrency} from '../api/resource';
import CurrencyList from '../components/CurrencyList';
import {RootParamList} from './types';

type PortfolioScreenProps = StackScreenProps<RootParamList, 'Portfolio'>;

const PortfolioScreen = ({navigation}: PortfolioScreenProps) => {
  return (
    <CurrencyList
      currencies={currencies()}
      onPressRow={(id: string) => {
        const currency = getCurrency(id);

        if (currency) {
          navigation.push('Details', {id: currency.id});
        }
      }}
    />
  );
};

export default PortfolioScreen;
