import * as React from 'react';
import { Animated, View, ViewProps } from 'react-native';

export const MaybeScreenContainer = ({
  ...rest
}: ViewProps & {
  enabled: boolean;
  children: React.ReactNode;
}) => {
  return <View {...rest} />;
};

export const MaybeScreen = ({
  ...rest
}: ViewProps & {
  enabled: boolean;
  active: 0 | 1 | Animated.AnimatedInterpolation;
  children: React.ReactNode;
}) => {
  return <View {...rest} />;
};
