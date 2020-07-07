import React from 'react';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import {Currency} from '../api/resource';
import Balance from './Balance';
import CurrencyRow from './CurrencyRow';

function Separator() {
  return <View style={styles.separator} />;
}

type Props = {currencies: Currency[]};

export default function CurrencyList({currencies}: Props) {
  return (
    <FlatList
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
      data={currencies}
      keyExtractor={(item: Currency) => item.id}
      ListHeaderComponent={<Balance value={1000} />}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={Separator}
      renderItem={({item: currency}: {item: Currency}) => (
        <CurrencyRow
          key={currency.id}
          name={currency.name}
          symbol={currency.symbol}
          usd={currency.usd}
          icon={currency.icon}
          onPress={() => {
            Alert.alert(currency.name);
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
  },
});
