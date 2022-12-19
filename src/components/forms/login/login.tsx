import {TouchableOpacity, View} from 'react-native';
import {Router} from 'src/types/navigation';
import {Button} from 'src/components';
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
import {Formik} from 'formik';
import {loginSchema} from 'src/schema';
import {useState} from 'react';
import {GoogleIcon, ShowPasswordIcon} from 'src/icons';
import {TextButton} from 'src/components/UI/button/styles';
import {useAuthContext} from 'src/context';
import {mainStyles} from 'src/variables/styles';
import {ButtonGoogleWrapper} from './styles';

export const Login = ({navigation}: Router) => {
  const {login, loginGoogle, errorLogin, user} = useAuthContext();
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
            placeholderTextColor={mainStyles.color.light20}
          />
          {errors.email && touched.email && (
            <TextError>{errors.email}</TextError>
          )}
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
          {!user && errorLogin !== '' && <TextError>{errorLogin}</TextError>}
          <ButtonWrapper
            disabled={!isValid}
            onPress={() => login(values)}
            activeOpacity={0.8}>
            <Button isPrimaryBackground={true} isPrimaryColor={true}>
              Login
            </Button>
          </ButtonWrapper>
          <ButtonGoogleWrapper
            onPress={() => {
              loginGoogle();
            }}
            activeOpacity={0.8}>
            <Button>
              <View>
                <GoogleIcon />
              </View>
              <View>
                <TextButton isPrimaryColor={false}>
                  {'  '}
                  Login with Google
                </TextButton>
              </View>
            </Button>
          </ButtonGoogleWrapper>
          <Tip>
            <Question>Don’t have an account yet? </Question>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              activeOpacity={0.8}>
              <Link>Sign Up</Link>
            </TouchableOpacity>
          </Tip>
        </FormAuth>
      )}
    </Formik>
  );
};
