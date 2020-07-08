import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const windowHeight = () => Dimensions.get('window').height;

export default function Modal({
  children,
  onDismiss,
}: {
  children?: React.ReactNode;
  onDismiss: () => void;
}) {
  const position = useRef(new Animated.Value(windowHeight()));

  useEffect(() => {
    Animated.spring(position.current, {
      toValue: windowHeight() / 2,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Animated.timing(position.current, {
          toValue: windowHeight(),
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }).start();

        onDismiss();
      }}>
      <View style={StyleSheet.absoluteFill}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'white',
              transform: [
                {
                  translateY: position.current,
                },
              ],
            },
          ]}>
          {children}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
