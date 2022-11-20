import React from 'react';
import Container from '../components/container/container';
import Login from '../components/forms/form-login/login';
import Wrapper from '../components/wrapper/wrapper';
import {RouterProps} from '../types/navigation';

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
