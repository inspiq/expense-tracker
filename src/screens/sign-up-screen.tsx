import React from 'react';
import Container from 'src/components/container/container';
import SignUp from 'src/components/forms/form-sign-up/sign-up';
import Wrapper from 'src/components/wrapper/wrapper';
import {RouterProps} from 'src/types/navigation';

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
