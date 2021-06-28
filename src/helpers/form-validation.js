import * as yup from 'yup';
import EmailValidation from 'emailvalid';

const ev = new EmailValidation();
ev.blacklist('moxkid.com');
ev.blacklist('nafxo.com');
ev.blacklist('biyac.com');
ev.blacklist('firemailbox.club');
ev.blacklist('greenkic.com');

ev.whitelist('gmail.com');
ev.whitelist('hotmail.com');

function isSpamEmail(msg) {
  return yup.string().test('isSpamEmail', msg, function (value) {
    const result = ev.check(value);
    return result.valid;
  });
}

yup.addMethod(yup.string, 'isSpamEmail', isSpamEmail);

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
