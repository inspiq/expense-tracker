import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Router} from 'src/types/navigation';
import {Button} from 'src/components';
import {Formik} from 'formik';
import {signUpSchema} from 'src/schema/index';
import {
  Tip,
  ButtonWrapper,
  FormAuth,
  Link,
  MainInput,
  Question,
  Separator,
  TextError,
  Show,
  Password,
} from 'src/components/forms/styles';
import {ShowPasswordIcon} from 'src/icons';
import {useAuthContext} from 'src/context';
import {mainStyles} from 'src/variables/styles';
import {
  Approval,
  ApprovalEmpty,
  Description,
  DescriptionActive,
  PrivacyPolicy,
  TitlePrivacyPolicy,
  СheckMark,
} from './styles';

export const SignUp = ({navigation}: Router) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const {signup, errorSignup, user} = useAuthContext();
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
            placeholderTextColor={mainStyles.color.light20}
          />
          {errors.name && touched.name && <TextError>{errors.name}</TextError>}
          <Separator />
          <MainInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            placeholderTextColor={mainStyles.color.light20}
          />
          {errors.email && touched.email && (
            <TextError>{errors.email}</TextError>
          )}
          {!user && errorSignup !== '' && <TextError>{errorSignup}</TextError>}
          <Separator />
          <Password>
            <MainInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              placeholderTextColor={mainStyles.color.light20}
              secureTextEntry={isShowPassword}
            />
            <Show
              onPress={() => setIsShowPassword(!isShowPassword)}
              activeOpacity={0.8}>
              <ShowPasswordIcon />
            </Show>
          </Password>
          {errors.password && touched.password && (
            <TextError>{errors.password}</TextError>
          )}
          <PrivacyPolicy>
            {toggleCheckBox ? (
              <Approval
                onPress={() => setToggleCheckBox(false)}
                activeOpacity={0.8}>
                <СheckMark>✓</СheckMark>
              </Approval>
            ) : (
              <ApprovalEmpty
                onPress={() => setToggleCheckBox(true)}
                activeOpacity={0.8}
              />
            )}
            <TitlePrivacyPolicy>
              <Description>
                By signing up, you agree to the{' '}
                <DescriptionActive>
                  Terms of Service and Privacy Policy
                </DescriptionActive>
              </Description>
            </TitlePrivacyPolicy>
          </PrivacyPolicy>
          {toggleCheckBox ? (
            <ButtonWrapper
              disabled={!isValid}
              onPress={() => {
                signup(values);
              }}
              activeOpacity={0.8}>
              <Button isPrimaryBackground={true} isPrimaryColor={true}>
                Sign Up
              </Button>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper disabled activeOpacity={0.7}>
              <Button isPrimaryBackground={true} isPrimaryColor={true}>
                Sign Up
              </Button>
            </ButtonWrapper>
          )}
          <Tip>
            <Question>Already have an account? </Question>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              activeOpacity={0.8}>
              <Link>Login</Link>
            </TouchableOpacity>
          </Tip>
        </FormAuth>
      )}
    </Formik>
  );
};
