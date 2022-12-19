import {mainStyles} from 'src/variables/styles';

export const bezierConfig = {
  backgroundGradientFrom: mainStyles.color.violet20,
  backgroundGradientTo: mainStyles.color.violet20,
  backgroundGradientFromOpacity: 0.3,
  backgroundGradientToOpacity: 0.3,
  fillShadowGradientFrom: 'rgba(139, 80, 255, 0.24)',
  fillShadowGradientTo: 'rgba(139, 80, 255, 0)',
  decimalPlaces: 0,
  strokeWidth: 6,
  color: () => mainStyles.color.violet100,
};
