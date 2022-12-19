import {StatusBar} from 'react-native';
import {Container, Wrapper, SignUp} from 'src/components';
import {Router} from 'src/types/navigation';
import {mainStyles} from 'src/variables/styles';

export const SignUpScreen = ({navigation}: Router) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={mainStyles.color.light100}
      />
      <Wrapper>
        <Container>
          <SignUp navigation={navigation} />
        </Container>
      </Wrapper>
    </>
  );
};
