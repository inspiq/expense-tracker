import {mainStyles} from 'src/variables/styles';
import styled from 'styled-components/native';

export const PrivacyPolicy = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  max-width: 296px;
  width: 100%;
`;

export const Approval = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${mainStyles.color.violet100};
`;

export const ApprovalEmpty = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border: 2px solid ${mainStyles.color.violet100};
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitlePrivacyPolicy = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Description = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  color: ${mainStyles.color.dark100};
  font-size: ${mainStyles.size.regular2}px;
  line-height: ${mainStyles.height.regular2height}px;
`;

export const DescriptionActive = styled.Text`
  margin-left: 4px;
  font-family: ${mainStyles.family.interMedium};
  color: ${mainStyles.color.violet100};
  font-size: ${mainStyles.size.regular2}px;
`;

export const СheckMark = styled.Text`
  color: ${mainStyles.color.light100};
  font-size: ${mainStyles.size.regular2}px;
`;
