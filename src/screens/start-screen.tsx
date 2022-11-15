import {TouchableOpacity} from 'react-native';
import Button from '../components/UI/button/button';
import Container from '../components/container/container';
import Wrapper from '../components/wrapper/wrapper';
import {RouterProps} from '../types/navigation';
import styled from 'styled-components/native';
import OnboardingCarousel from '../components/onboarding-carousel/onboarding-carousel';

const StartScreen = ({navigation}: RouterProps) => {
  return (
    <Wrapper>
      <Container>
        <OnboardingCarousel />
        <Buttons>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Button primary>Sign Up</Button>
          </TouchableOpacity>
          <Space />
          <TouchableOpacity
            onPress={() => navigation.navigate('Authorization')}>
            <Button primary={false}>Login</Button>
          </TouchableOpacity>
        </Buttons>
      </Container>
    </Wrapper>
  );
};

const Buttons = styled.View`
  margin: 35px 0 0 0;
`;

const Space = styled.View`
  height: 16px;
`;

export default StartScreen;
