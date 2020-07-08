import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getCurrency, getHistory} from '../api/resource';
import Balance from '../components/Balance';
import Button from '../components/Button';
import CurrencyRow from '../components/CurrencyRow';
import Separator from '../components/Separator';
import Spacer from '../components/Spacer';
import {RootParamList, MainParamList} from './types';
import {useNavigation} from '@react-navigation/native';
import Chart from '../components/Chart';

type DetailsScreenProps = StackScreenProps<RootParamList, 'Details'>;

type ChartOption = {days: number; label: string};

const CHART_OPTIONS: ChartOption[] = [
  {days: 7, label: '1W'},
  {days: 30, label: '1M'},
  {days: 365, label: '1Y'},
];

export default function DetailsScreen({
  route: {
    params: {id},
  },
}: DetailsScreenProps) {
  const navigation = useNavigation<
    StackNavigationProp<MainParamList, 'Root'>
  >();

  const currency = getCurrency(id);
  const history = getHistory(id);

  if (!currency) return null;

  const [days, setDays] = useState(
    CHART_OPTIONS[CHART_OPTIONS.length - 1].days,
  );

  const points = history.slice(-days).map((price) => price.usd);
  const min = Math.min(...points);
  const max = Math.max(...points);

  return (
    <ScrollView style={styles.container}>
      <Balance label={currency.name} value={currency.usd} />
      <Spacer height={16} />
      <Chart
        style={styles.chart}
        minimumValue={min}
        maximumValue={max}
        data={points}
        strokeWidth={1}
        strokeColor="#0055e8"
      />
      <View style={styles.chartButtonContainer}>
        {CHART_OPTIONS.map((option: ChartOption) => (
          <TouchableOpacity
            key={option.label}
            style={styles.chartButton}
            onPress={() => {
              setDays(option.days);
            }}>
            <Text
              style={[
                styles.chartButtonTitle,
                option.days === days && styles.chartButtonTitleActive,
              ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Spacer height={16} />
      <Separator />
      <CurrencyRow
        onPress={() => {}}
        name={currency.name}
        icon={currency.icon}
        symbol={currency.symbol}
        usd={currency.usd}
      />
      <View style={styles.button}>
        <Button
          title={'Trade'}
          onPress={() => {
            navigation.push('Modal', {id: currency.id});
          }}
        />
      </View>
      <Separator />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    padding: 20,
  },
  chart: {
    height: 300,
    backgroundColor: 'whitesmoke',
  },
  chartButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartButton: {
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
  chartButtonTitle: {
    color: 'black',
  },
  chartButtonTitleActive: {
    color: '#0055e8',
  },
});
