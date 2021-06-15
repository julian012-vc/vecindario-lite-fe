import * as yup from 'yup';
import * as Errors from '../../constants/form-errors';
import { PHONE_REGEX } from '../../constants/regex';

export const SIGN_UP_VALIDATION = {
  first_name: yup.string().required(Errors.REQUIRED_ERROR),
  last_name: yup.string().required(Errors.REQUIRED_ERROR),
  email: yup
    .string()
    .isSpamEmail(Errors.EMAIL_SPAM_ERROR)
    .required(Errors.REQUIRED_ERROR)
    .email(Errors.EMAIL_ERROR),
  password: yup.string().required(Errors.REQUIRED_ERROR).min(8, Errors.MIN_LENGTH(8)),
  password_confirmation: yup
    .string()
    .required(Errors.REQUIRED_ERROR)
    .min(8, Errors.MIN_LENGTH(8))
    .oneOf([yup.ref('password'), null], Errors.PASSWORD_CONFIRM_ERROR),
  phone: yup.string().required(Errors.REQUIRED_ERROR).matches(PHONE_REGEX, Errors.PHONE_ERROR),
};

export const LEAD_FORM_VALIDATION = {
  first_name: yup.string().required(Errors.REQUIRED_ERROR),
  last_name: yup.string().required(Errors.REQUIRED_ERROR),
  email: yup
    .string()
    .isSpamEmail(Errors.EMAIL_SPAM_ERROR)
    .required(Errors.REQUIRED_ERROR)
    .email(Errors.EMAIL_ERROR),
  phone: yup.string().required(Errors.REQUIRED_ERROR).matches(PHONE_REGEX, Errors.PHONE_ERROR),
};

export const SIGN_IN_VALIDATION = {
  email: yup.string().required(Errors.REQUIRED_ERROR).email(Errors.EMAIL_ERROR),
  password: yup.string().required(Errors.REQUIRED_ERROR),
};
