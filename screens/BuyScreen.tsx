import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import Button from '../components/Button';
import Spacer from '../components/Spacer';
import {MainParamList} from './types';
import {getCurrency} from '../api/resource';

type BuyScreenProps = StackScreenProps<MainParamList, 'Buy'>;

export default function BuyScreen({
  navigation,
  route: {
    params: {id},
  },
}: BuyScreenProps) {
  const currency = getCurrency(id);
  const [value, setValue] = useState('');

  if (!currency) return null;

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text style={styles.title}>Buy {currency.name}</Text>
        <Spacer height={24} />
        <TextInput
          placeholder={'0'}
          style={styles.input}
          value={value}
          onChangeText={(text) => setValue(text)}
          keyboardType="decimal-pad"
        />
        <Spacer height={24} />
        <Button
          title={
            value !== ''
              ? `Buy ${value} ${currency.symbol} (${(
                  Number(value) * currency.usd
                ).toFixed(2)})`
              : 'Buy'
          }
          onPress={() => {
            navigation.popToTop();
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingBottom: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '300',
  },
  input: {
    fontSize: 32,
    backgroundColor: 'whitesmoke',
    textAlign: 'center',
    paddingVertical: 24,
  },
});
