import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain 8 characters, one uppercase, one number and one special case character',
    ),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email address is required'),
  password: yup.string().required('Password is required'),
});
