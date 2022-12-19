import styled from 'styled-components/native';
import {mainStyles} from 'src/variables/styles';
import LinearGradient from 'react-native-linear-gradient';

export const MainWrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
  background: ${mainStyles.color.light100};
`;

export const Overlay = styled(LinearGradient).attrs({
  colors: ['rgba(139, 80, 255, 0)', 'rgba(139, 80, 255, 0.3)'],
})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
