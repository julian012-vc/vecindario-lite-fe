import * as yup from 'yup';
// TODO VERIFY EMAIL
// import EmailValidation from 'emailvalid';
//
// const ev = new EmailValidation();
//
// yup.addMethod(yup.string, 'isSpamEmail', function (email, msg) {
//   const result = ev.check(email);
//   return result.valid;
// });

export function validateForm(data, formSchema) {
  const schema = yup.object().shape(formSchema);
  return schema.validate(data, { abortEarly: false });
}

export async function isValidForm(data, formSchema) {
  const schema = yup.object().shape(formSchema);
  return await schema.isValid(data);
}

export function mappingError(error) {
  const res = {};
  error.inner.forEach(e => {
    res[e.path] = e.message;
  });
  return res;
}
