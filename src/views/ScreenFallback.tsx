import { ResourceSavingView } from '@react-navigation/elements';
import * as React from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

type Props = {
  visible: boolean;
  children: React.ReactNode;
  enabled: boolean;
  style?: StyleProp<ViewStyle>;
};

export const MaybeScreenContainer = ({
  ...rest
}: ViewProps & {
  enabled: boolean;
  children: React.ReactNode;
}) => {
  return <View {...rest} />;
};

export function MaybeScreen({ visible, children, ...rest }: Props) {
  return (
    <ResourceSavingView visible={visible} {...rest}>
      {children}
    </ResourceSavingView>
  );
}
