function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { ResourceSavingView } from '@react-navigation/elements';
import * as React from 'react';
import { View } from 'react-native';
export const MaybeScreenContainer = ({ ...rest
}) => {
  return /*#__PURE__*/React.createElement(View, rest);
};
export function MaybeScreen({
  visible,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(ResourceSavingView, _extends({
    visible: visible
  }, rest), children);
}
//# sourceMappingURL=ScreenFallback.js.map