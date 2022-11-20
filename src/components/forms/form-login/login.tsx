import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RouterProps} from '../../../types/navigation';
import Button from '../../UI/button/button';
import {
  Tip,
  ButtonWrapper,
  FormSignUp,
  Link,
  MainInput,
  Question,
  Space,
  TextError,
} from '../styles';
import {Formik} from 'formik';
import {loginSchema} from '../../../schema';

const Login = ({navigation}: RouterProps) => {
  return (
    <Formik
      initialValues={{email: '', password: '', name: ''}}
      onSubmit={values => console.log(values)}
      validateOnMount={true}
      validationSchema={loginSchema}>
      {({handleChange, handleBlur, values, touched, errors, isValid}) => (
        <FormSignUp>
          <MainInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            placeholderTextColor="#91919F"
          />
          {errors.email && touched.email && (
            <TextError>{errors.email}</TextError>
          )}
          <Space />
          <MainInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
            placeholderTextColor="#91919F"
          />
          {errors.password && touched.password && (
            <TextError>{errors.password}</TextError>
          )}
          <ButtonWrapper
            disabled={!isValid}
            onPress={() => navigation.navigate('Signup')}>
            <Button primary>Login</Button>
          </ButtonWrapper>
          <Tip>
            <Question>Don’t have an account yet? </Question>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Link>Sign Up</Link>
            </TouchableOpacity>
          </Tip>
        </FormSignUp>
      )}
    </Formik>
  );
};

export default Login;
