import styled from 'styled-components/native';
import {mainStyles} from '../../variables/styles';

export const Space = styled.View`
  margin-top: 24px;
`;

export const MainInput = styled.TextInput`
  border: 1px solid ${mainStyles.color.light60};
  border-radius: 16px;
  background: ${mainStyles.color.light100};
  padding: 12px 16px;
  color: ${mainStyles.color.light20};
  font-weight: ${mainStyles.family.interRegular};
  font-size: ${mainStyles.size.regular1};
`;

export const Tip = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-family: ${mainStyles.family.interMedium};
  color: ${mainStyles.color.light20};
  font-size: ${mainStyles.size.regular1};
`;

export const Question = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  color: ${mainStyles.color.light20};
  font-size: ${mainStyles.size.regular1};
`;

export const Link = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  color: ${mainStyles.color.violet100};
  font-size: ${mainStyles.size.regular1};
  text-decoration: underline;
`;

export const TextError = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  color: ${mainStyles.color.red80};
  font-size: ${mainStyles.size.regular3};
  margin-top: 5px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  margin: 35px 0;
`;

export const FormSignUp = styled.View`
  margin-top: 56px;
`;
