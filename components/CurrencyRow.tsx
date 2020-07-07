import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Spacer from './Spacer';

type Props = {
  name: string;
  icon: string;
  symbol: string;
  usd: number;
};

export default function CurrencyRow({name, icon, symbol, usd}: Props) {
  return (
    <View style={styles.container}>
      <Image source={{uri: icon}} style={styles.image} />
      <Spacer width={16} />
      <View style={styles.leftColumn}>
        <Text style={styles.title} numberOfLines={1}>
          {name}
        </Text>
        <Spacer height={4} />
        <Text style={styles.subtitle}>{symbol}</Text>
      </View>
      <Spacer />
      <View style={styles.rightColumn}>
        <Text style={styles.title}>{usd.toFixed(2).toString()}</Text>
        <Spacer height={2} />
        <Text style={styles.price}>+0.80%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.5)',
  },
  price: {
    fontSize: 18,
    color: 'mediumseagreen',
    fontWeight: '300',
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    alignItems: 'flex-end',
  },
});
