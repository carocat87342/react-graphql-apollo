import forms from "./forms";

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

export default {
  [email.name]: "",
  [password.name]: "",
  [repeat_password.name]: "",
  [agree.name]: "",
  [brand_name.name]: "",
  [interested.name]: "",
  [phone.name]: "",
  [name.name]: "",
  [owner.name]: "",
  [sales.name]: "",
  [website.name]: "",
  [fashion.name]: "",
  [accessories.name]: "",
  [watches.name]: "",
  [cosmetic.name]: "",
  [comission.name]: "",
  [usa.name]: "",
  [india.name]: "",
  [russia.name]: "",
  [canada.name]: "",
  [shipping_time.name]: "",
};
