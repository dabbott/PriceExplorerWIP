import {requireNativeComponent, ViewStyle} from 'react-native';

type ChartProps = {
  style: ViewStyle;
  data: number[];
  minimumValue: number;
  maximumValue: number;
  strokeWidth?: number;
  strokeColor?: string;
};

const Chart = requireNativeComponent<ChartProps>('ChartView');

export default Chart;
