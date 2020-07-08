import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

export default function Button({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="darkblue">
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#0055e8',
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
