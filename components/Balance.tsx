import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  value: number;
};

export default function Balance({value}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Portfolio Balance</Text>
      <Text style={styles.title}>${value.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '500',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
  },
});
