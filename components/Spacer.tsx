import React from 'react';
import {View, ViewStyle} from 'react-native';

type Props = {
  width?: number;
  height?: number;
};

export default function Spacer({width, height}: Props) {
  const style: ViewStyle = {
    flex: !width && !height ? 1 : undefined,
    width,
    height,
  };

  return <View style={style} />;
}
