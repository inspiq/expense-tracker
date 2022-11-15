import styled from 'styled-components/native';
import {mainStyles} from '../../../variables/styles';

export const SlideItem = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideImage = styled.Image`
  width: 312px;
  height: 312px;
`;

export const SlideInfo = styled.View`
  max-width: 277px;
  width: 100%;
  margin-top: 41px;
`;

export const SlideTitle = styled.Text`
  font-family: ${mainStyles.family.interBold};
  font-size: ${mainStyles.size.title1};
  color: ${mainStyles.color.dark50};
  line-height: ${mainStyles.height.title1height};
  text-align: center;
  margin: 0px 0 17px 0;
`;

export const SlideDescription = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  font-size: ${mainStyles.size.regular1};
  color: ${mainStyles.color.light20};
  line-height: ${mainStyles.height.regular1height};
  text-align: center;
`;
