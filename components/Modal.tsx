import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const windowHeight = () => Dimensions.get('window').height;

export default function Modal({
  children,
  onDismiss,
}: {
  children?: React.ReactNode;
  onDismiss: () => void;
}) {
  const position = useRef(new Animated.Value(windowHeight()));
  const panY = useRef(new Animated.Value(0));

  const event = useRef(
    Animated.event(
      [
        {
          nativeEvent: {
            translationY: panY.current,
          },
        },
      ],
      {useNativeDriver: true},
    ),
  );

  useEffect(() => {
    Animated.spring(position.current, {
      toValue: windowHeight() / 2,
      useNativeDriver: true,
    }).start();
  }, []);

  function handleDismiss() {
    Animated.timing(position.current, {
      toValue: windowHeight(),
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();

    onDismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={handleDismiss}>
      <View style={StyleSheet.absoluteFill}>
        <PanGestureHandler
          onGestureEvent={event.current}
          onHandlerStateChange={(event) => {
            if (event.nativeEvent.oldState === State.ACTIVE) {
              if (event.nativeEvent.translationY > windowHeight() / 4) {
                handleDismiss();
              } else {
                Animated.spring(panY.current, {
                  toValue: 0,
                  useNativeDriver: true,
                }).start();
              }
            }
          }}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: 'white',
                transform: [
                  {
                    translateY: Animated.add(
                      position.current,
                      panY.current,
                    ).interpolate({
                      inputRange: [100, windowHeight()],
                      outputRange: [100, windowHeight()],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}>
            {children}
          </Animated.View>
        </PanGestureHandler>
      </View>
    </TouchableWithoutFeedback>
  );
}
