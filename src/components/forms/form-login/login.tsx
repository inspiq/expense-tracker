import React, {useContext} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {RouterProps} from 'src/types/navigation';
import Button from 'src/components/UI/button/button';
import {
  Tip,
  ButtonWrapper,
  FormAuth,
  Link,
  MainInput,
  Question,
  Space,
  TextError,
  ShowIcon,
  Show,
  Password,
} from 'src/components/forms/styles';
import {Formik} from 'formik';
import {loginSchema} from 'src/schema';
import {AuthContext} from 'src/providers/auth-provider';
import {useState} from 'react';
import styled from 'styled-components/native';

const ButtonGoogleWrapper = styled.TouchableOpacity`
  margin: 0 0 25px 0;
`;

const GoogleIcon = styled.Image`
  width: 22px;
  height: 22px;
`;

const Login = ({navigation}: RouterProps) => {
  const {login, loginGoogle, errorLogin, user} = useContext(AuthContext);
  const [isShowPassword, setIsShowPassword] = useState(true);

  return (
    <Formik
      initialValues={{email: '', password: '', name: ''}}
      onSubmit={values => console.log(values)}
      validateOnMount={true}
      validationSchema={loginSchema}>
      {({handleChange, handleBlur, values, touched, errors, isValid}) => (
        <FormAuth>
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
          <Password>
            <MainInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              placeholderTextColor="#91919F"
              secureTextEntry={isShowPassword}
            />
            <Show onPress={() => setIsShowPassword(!isShowPassword)}>
              <ShowIcon source={require('assets/images/icons/show.png')} />
            </Show>
          </Password>
          {errors.password && touched.password && (
            <TextError>{errors.password}</TextError>
          )}
          {!user && errorLogin !== '' && <TextError>{errorLogin}</TextError>}
          <ButtonWrapper disabled={!isValid} onPress={() => login(values)}>
            <Button isPrimaryBackground={true} isPrimaryColor={true}>
              Login
            </Button>
          </ButtonWrapper>
          <ButtonGoogleWrapper
            onPress={() => {
              loginGoogle();
            }}>
            <Button isPrimaryBackground={false} isPrimaryColor={false}>
              <GoogleIcon source={require('assets/images/icons/google.png')} />
              {'  '}
              Login with Google
            </Button>
          </ButtonGoogleWrapper>
          <Tip>
            <Question>Don’t have an account yet? </Question>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Link>Sign Up</Link>
            </TouchableOpacity>
          </Tip>
        </FormAuth>
      )}
    </Formik>
  );
};

export default Login;
