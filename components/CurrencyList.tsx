import React, {useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Currency} from '../api/resource';
import CurrencyRow from './CurrencyRow';
import Balance from './Balance';

function Separator() {
  return <View style={styles.separator} />;
}

export default function CurrencyList({currencies}: {currencies: Currency[]}) {
  const value = 1000;

  const ListHeaderComponent = useMemo(() => {
    return () => <Balance value={value} />;
  }, [value]);

  return (
    <FlatList
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
      data={currencies}
      keyExtractor={(item: Currency) => item.id}
      ListHeaderComponent={ListHeaderComponent}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={Separator}
      renderItem={({item: currency}: {item: Currency}) => (
        <CurrencyRow
          key={currency.id}
          name={currency.name}
          symbol={currency.symbol}
          usd={currency.usd}
          icon={currency.icon}
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
