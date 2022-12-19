import styled from 'styled-components/native';
import {mainStyles} from 'src/variables/styles';

export const TitleName = styled.Text`
  font-family: ${mainStyles.family.interSemiBold};
  font-size: ${mainStyles.size.title3}px;
  line-height: ${mainStyles.height.title2height}px;
  color: ${mainStyles.color.dark25};
  padding: 20px 0;
`;
