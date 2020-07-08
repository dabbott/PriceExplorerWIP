import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  label: string;
  value: number;
};

export default function Balance({label, value}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.title}>${value.toFixed(2).toString()}</Text>
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
