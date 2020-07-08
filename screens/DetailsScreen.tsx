import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {Text, View} from 'react-native';
import {RootParamList} from 'screens/types';
import {getCurrency} from '../api/resource';

type DetailsScreenProps = StackScreenProps<RootParamList, 'Details'>;

const DetailsScreen = ({
  route: {
    params: {id},
  },
}: DetailsScreenProps) => {
  const currency = getCurrency(id);

  if (!currency) {
    return null;
  }

  return (
    <View>
      <Text>{currency.name}</Text>
    </View>
  );
};

export default DetailsScreen;
