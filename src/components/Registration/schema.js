import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('invalid email')
    .required('message is require'),
  password: Yup.string()
    .min(4)
    .required(),
});
