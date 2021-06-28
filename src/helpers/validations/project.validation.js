import * as yup from 'yup';
import * as Errors from '../../constants/form-errors';

export const CREATE_FORM_VALIDATION = {
  title: yup.string().required(Errors.REQUIRED_ERROR),
  private_area: yup.number().required(Errors.REQUIRED_ERROR).moreThan(0, Errors.REQUIRED_ERROR),
  building_area: yup.number().required(Errors.REQUIRED_ERROR).moreThan(0, Errors.REQUIRED_ERROR),
  price: yup.number().required(Errors.REQUIRED_ERROR).moreThan(0, Errors.REQUIRED_ERROR),
  email: yup.string().required(Errors.REQUIRED_ERROR).email(Errors.EMAIL_ERROR),
  type_project: yup.string().required(Errors.REQUIRED_ERROR),
  city: yup.string().required(Errors.REQUIRED_ERROR),
  address: yup.string().required(Errors.REQUIRED_ERROR),
  has_vis: yup.bool(Errors.REQUIRED_ERROR),
  has_parking: yup.bool(Errors.REQUIRED_ERROR),
  bathrooms: yup.number().required(Errors.REQUIRED_ERROR).moreThan(0, Errors.REQUIRED_ERROR),
};
