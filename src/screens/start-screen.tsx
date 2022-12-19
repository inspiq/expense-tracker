import {StatusBar, TouchableOpacity} from 'react-native';
import {Router} from 'src/types/navigation';
import styled from 'styled-components/native';
import {Container, Wrapper, OnboardingCarousel, Button} from 'src/components';
import {mainStyles} from 'src/variables/styles';

export const StartScreen = ({navigation}: Router) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={mainStyles.color.light100}
      />
      <Wrapper>
        <OnboardingCarousel />
        <Container>
          <Buttons>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              activeOpacity={0.8}>
              <Button isPrimaryBackground isPrimaryColor>
                Sign Up
              </Button>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              activeOpacity={0.8}>
              <Button>Login</Button>
            </TouchableOpacity>
          </Buttons>
        </Container>
      </Wrapper>
    </>
  );
};

const Buttons = styled.View`
  margin: 35px 0;
`;

const Separator = styled.View`
  margin-top: 16px;
`;
