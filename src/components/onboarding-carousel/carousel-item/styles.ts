import styled from 'styled-components/native';
import {mainStyles} from 'src/variables/styles';

export const SlideItem = styled.View<{windowWidth: number}>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: ${({windowWidth}) => windowWidth}px;
`;

export const SlideImage = styled.Image`
  width: 312px;
  height: 312px;
`;

export const SlideInfo = styled.View`
  max-width: 277px;
  width: 100%;
  margin-top: 24px;
`;

export const SlideTitle = styled.Text`
  font-family: ${mainStyles.family.interBold};
  font-size: ${mainStyles.size.title1}px;
  color: ${mainStyles.color.dark50};
  line-height: ${mainStyles.height.title1height}px;
  text-align: center;
  margin: 0 0 17px 0;
`;

export const SlideDescription = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  font-size: ${mainStyles.size.regular1}px;
  color: ${mainStyles.color.light20};
  line-height: ${mainStyles.height.regular1height}px;
  text-align: center;
`;
