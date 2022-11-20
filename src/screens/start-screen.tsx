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
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Button primary>Sign Up</Button>
          </TouchableOpacity>
          <Space />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
  margin-top: 16px;
`;

export default StartScreen;
