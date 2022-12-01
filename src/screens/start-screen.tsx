import {TouchableOpacity} from 'react-native';
import Button from 'src/components/UI/button/button';
import Container from 'src/components/container/container';
import Wrapper from 'src/components/wrapper/wrapper';
import {RouterProps} from 'src/types/navigation';
import styled from 'styled-components/native';
import OnboardingCarousel from 'src/components/onboarding-carousel/onboarding-carousel';

const StartScreen = ({navigation}: RouterProps) => {
  return (
    <Wrapper>
      <Container>
        <OnboardingCarousel />
        <Buttons>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Button isPrimaryBackground isPrimaryColor={true}>
              Sign Up
            </Button>
          </TouchableOpacity>
          <Space />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Button isPrimaryColor={false} isPrimaryBackground={false}>
              Login
            </Button>
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
