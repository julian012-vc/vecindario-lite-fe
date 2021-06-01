import * as yup from 'yup';
import * as Errors from '../../constants/form-errors';

export const SING_UP_VALIDATION = {
  first_name: yup.string().required(Errors.REQUIRED_ERROR),
  last_name: yup.string().required(Errors.REQUIRED_ERROR),
  email: yup.string().required(Errors.REQUIRED_ERROR).email(Errors.EMAIL_ERROR),
  password: yup.string().required(Errors.REQUIRED_ERROR).min(8, Errors.MIN_LENGTH(8)),
  password_confirmation: yup
    .string()
    .required(Errors.REQUIRED_ERROR)
    .min(8, Errors.MIN_LENGTH(8))
    .oneOf([yup.ref('password'), null], Errors.PASSWORD_CONFIRM_ERROR),
  // TODO PHONE VALIDATION PENDING
  // phone: yup.string().required(Errors.REQUIRED_ERROR),
};
