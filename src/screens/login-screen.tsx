import {StatusBar} from 'react-native';
import {Container, Wrapper, Login} from 'src/components';
import {Router} from 'src/types/navigation';
import {mainStyles} from 'src/variables/styles';

export const LoginScreen = ({navigation}: Router) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={mainStyles.color.light100}
      />
      <Wrapper>
        <Container>
          <Login navigation={navigation} />
        </Container>
      </Wrapper>
    </>
  );
};
