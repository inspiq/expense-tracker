import React from 'react';
import Container from '../components/container/container';
import SignUp from '../components/forms/form-sign-up/sign-up';
import Wrapper from '../components/wrapper/wrapper';
import {RouterProps} from '../types/navigation';

const SignUpScreen = ({navigation}: RouterProps) => {
  return (
    <Wrapper>
      <Container>
        <SignUp navigation={navigation} />
      </Container>
    </Wrapper>
  );
};

export default SignUpScreen;
