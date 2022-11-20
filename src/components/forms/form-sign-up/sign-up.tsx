import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {RouterProps} from '../../../types/navigation';
import {mainStyles} from '../../../variables/styles';
import Button from '../../UI/button/button';
import {Formik} from 'formik';
import {signUpSchema} from '../../../schema/index';
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

const SignUp = ({navigation}: RouterProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Formik
      initialValues={{email: '', password: '', name: ''}}
      onSubmit={values => console.log(values)}
      validateOnMount={true}
      validationSchema={signUpSchema}>
      {({handleChange, handleBlur, values, touched, errors, isValid}) => (
        <FormSignUp>
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
            <ButtonWrapper
              disabled={!isValid}
              onPress={() => navigation.navigate('Login')}>
              <Button primary>Sign Up</Button>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper
              disabled
              onPress={() => navigation.navigate('Login')}>
              <Button primary>Sign Up</Button>
            </ButtonWrapper>
          )}
          <Tip>
            <Question>Already have an account? </Question>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Link>Login</Link>
            </TouchableOpacity>
          </Tip>
        </FormSignUp>
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
