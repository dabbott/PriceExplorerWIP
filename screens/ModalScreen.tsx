import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import Button from '../components/Button';
import {MainParamList} from './types';
import {useNavigation} from '@react-navigation/native';

type ModalScreenProps = StackScreenProps<MainParamList, 'Modal'>;

const ModalScreen = ({
  route: {
    params: {id},
  },
}: ModalScreenProps) => {
  const navigation = useNavigation<
    StackNavigationProp<MainParamList, 'Modal'>
  >();

  return (
    <View
      style={{
        padding: 40,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      <Button
        title="Buy"
        onPress={() => {
          navigation.push('Buy', {id});
        }}
      />
      <View style={{height: 20}} />
      <Button title="Sell" onPress={() => {}} />
    </View>
  );
};

export default ModalScreen;
