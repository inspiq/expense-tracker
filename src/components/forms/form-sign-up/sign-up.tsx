import React, {useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {RouterProps} from 'src/types/navigation';
import {mainStyles} from 'src/variables/styles';
import Button from 'src/components/UI/button/button';
import {Formik} from 'formik';
import {signUpSchema} from 'src/schema/index';
import {
  Tip,
  ButtonWrapper,
  FormAuth,
  Link,
  MainInput,
  Question,
  Space,
  TextError,
  Show,
  ShowIcon,
  Password,
} from 'src/components/forms/styles';
import {AuthContext} from 'src/providers/auth-provider';

interface SignUp {
  email: string;
  password: string;
}

const SignUp = ({navigation}: RouterProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const {signup} = useContext(AuthContext);

  return (
    <Formik
      initialValues={{email: '', password: '', name: ''}}
      onSubmit={values => console.log(values)}
      validateOnMount={true}
      validationSchema={signUpSchema}>
      {({handleChange, handleBlur, values, touched, errors, isValid}) => (
        <FormAuth>
          <MainInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Name"
            placeholderTextColor="#91919F"
          />
          {errors.name && touched.name && <TextError>{errors.name}</TextError>}
          <Space />
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
          <PrivacyPolicy>
            {toggleCheckBox ? (
              <Approval onPress={() => setToggleCheckBox(false)}>
                <СheckMark>✓</СheckMark>
              </Approval>
            ) : (
              <ApprovalEmpty onPress={() => setToggleCheckBox(true)} />
            )}
            <TitlePrivacyPolicy>
              <Description>
                By signing up, you agree to the{' '}
                <DescriptionViolet>
                  Terms of Service and Privacy Policy
                </DescriptionViolet>
              </Description>
            </TitlePrivacyPolicy>
          </PrivacyPolicy>
          {toggleCheckBox ? (
            <ButtonWrapper disabled={!isValid} onPress={() => signup(values)}>
              <Button isPrimaryBackground={true} isPrimaryColor={true}>
                Sign Up
              </Button>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper disabled>
              <Button isPrimaryBackground={true} isPrimaryColor={true}>
                Sign Up
              </Button>
            </ButtonWrapper>
          )}
          <Tip>
            <Question>Already have an account? </Question>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Link>Login</Link>
            </TouchableOpacity>
          </Tip>
        </FormAuth>
      )}
    </Formik>
  );
};

const PrivacyPolicy = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  max-width: 296px;
  width: 100%;
`;

const Approval = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${mainStyles.color.violet100};
`;

const ApprovalEmpty = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border: 2px solid ${mainStyles.color.violet100};
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitlePrivacyPolicy = styled.View`
  display: flex;
  flex-direction: row;
`;

const Description = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  color: ${mainStyles.color.dark100};
  font-size: ${mainStyles.size.regular3};
  line-height: ${mainStyles.height.regular3height};
`;

const DescriptionViolet = styled.Text`
  margin-left: 4px;
  font-family: ${mainStyles.family.interMedium};
  color: ${mainStyles.color.violet100};
  font-size: ${mainStyles.size.regular3};
`;

const СheckMark = styled.Text`
  color: ${mainStyles.color.light100};
  font-size: ${mainStyles.size.regular3};
`;

export default SignUp;
