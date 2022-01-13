import * as React from 'react';
import { Animated, ViewProps } from 'react-native';
export declare const MaybeScreenContainer: ({ ...rest }: ViewProps & {
    enabled: boolean;
    children: React.ReactNode;
}) => JSX.Element;
export declare const MaybeScreen: ({ ...rest }: ViewProps & {
    enabled: boolean;
    active: 0 | 1 | Animated.AnimatedInterpolation;
    children: React.ReactNode;
}) => JSX.Element;
