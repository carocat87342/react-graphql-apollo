// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formId: "checkoutForm",
  formField: {
    email: {
      name: "Email",
      label: "Email",
      erquiredMessage: "Email is required",
    },
    password: {
      name: "Password",
      label: "Password",
      erquiredMessage: "Password is required",
    },
    repeat_password: {
      name: "Password",
      label: "Password",
      erquiredMessage: "Password is required",
    },
    agree: {
      name: "agree",
      label: "I agree to the Terms of Service and Privacy Policy.",
      //   erquiredMessage: "Password is required",
    },
    brand_name: {
      name: "brand_name",
      label: "Brand name",
      erquiredMessage: "Brand name is required",
    },
    interested: {
      name: "interested",
      label: "interested_in",
      erquiredMessage: "option is required",
    },
    phone: {
      name: "phone",
      label: "Phone",
    },
    name: {
      name: "Name",
      label: "Name",
      erquiredMessage: "Name is required",
    },
    role: {
      owner: {
        name: "Owner",
        label: "Owner",
      },
      sales: {
        name: "Sales",
        label: "Sales",
      },
    },
    website: {
      name: "website",
      label: "Website",
      erquiredMessage: "website is required",
    },
    industry: {
      fashion: {
        name: "fashion",
        label: "Fashion",
        erquiredMessage: "fashion is required",
      },
      accessories: {
        name: "accessories",
        label: "Accessories",
        erquiredMessage: "accessories is required",
      },
      watches: {
        name: "watches",
        label: "Watches",
        erquiredMessage: "watches is required",
      },
      cosmetic: {
        name: "cosmetic",
        label: "Cosmetic",
        erquiredMessage: "cosmetic is required",
      },
    },
    comission: {
      name: "comission",
      label: "Guest Comission",
      erquiredMessage: "Guest Comission is required",
    },
    shipping_to: {
      usa: {
        name: "usa",
        label: "usa",
      },
      india: {
        name: "india",
        label: "india",
      },
      russia: {
        name: "russia",
        label: "russia",
      },
      canada: {
        name: "canada",
        label: "canada",
      },
    },
    shipping_time: {
        name:'shipping_time',
        label:'Shipping time',
        erquiredMessage: "Shipping time is required",
    },
  },
};
