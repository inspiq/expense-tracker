import React from 'react';
import Container from 'src/components/container/container';
import Login from 'src/components/forms/form-login/login';
import Wrapper from 'src/components/wrapper/wrapper';
import {RouterProps} from 'src/types/navigation';

const LoginScreen = ({navigation}: RouterProps) => {
  return (
    <Wrapper>
      <Container>
        <Login navigation={navigation} />
      </Container>
    </Wrapper>
  );
};

export default LoginScreen;
