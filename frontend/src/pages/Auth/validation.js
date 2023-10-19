import forms from "./forms";
import * as Yup from "yup";

const {
  formField: {
    email,
    password,
    repeat_password,
    agree,
    brand_name,
    interested,
    phone,
    name,
    role: { owner, sales },
    website,
    industry: { fashion, accessories, watches, cosmetic },
    comission,
    shipping_to: { usa, india, russia, canada },
    shipping_time,
  },
} = forms;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  Yup.object().shape({
    [email.name]: Yup.string().required(`${email.erquiredMessage}`),
    [password.name]: Yup.string().required(`${password.erquiredMessage}`),
    [repeat_password.name]: Yup.string().required(
      `${repeat_password.erquiredMessage}`
    ),
    [agree.name]: Yup.string().required(`${agree.erquiredMessage}`),
  }),
  Yup.object().shape({
    [brand_name.name]: Yup.string().required(`${brand_name.erquiredMessage}`),
    [interested.name]: Yup.string().required(`${interested.erquiredMessage}`),
    [repeat_password.name]: Yup.string().required(
      `${repeat_password.erquiredMessage}`
    ),
    [phone.name]: Yup.string().nullable(),
    [name.name]: Yup.string().required(`${name.erquiredMessage}`),
    [owner.name]: Yup.string().nullable(),
    [sales.name]: Yup.string().nullable(),
  }),
  Yup.object().shape({
    [website.name]: Yup.string().required(`${website.erquiredMessage}`),
    [fashion.name]: Yup.string().required(`${fashion.erquiredMessage}`),
    [accessories.name]: Yup.string().required(`${accessories.erquiredMessage}`),
    [watches.name]: Yup.string().nullable(),
    [cosmetic.name]: Yup.string().nullable(),
    [comission.name]: Yup.string().nullable(),
    [usa.name]: Yup.string().nullable(),
    [india.name]: Yup.string().nullable(),
    [russia.name]: Yup.string().nullable(),
    [canada.name]: Yup.string().nullable(),
    [shipping_time.name]: Yup.string().required(`${shipping_time.erquiredMessage}`),
  }),
];
