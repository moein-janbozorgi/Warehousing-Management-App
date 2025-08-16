import * as Yup from "yup";

const signInValidate = Yup.object().shape({
  username: Yup.string()
    .min(3, "نام کاربری حداقل باید ۳ کاراکتر باشد")
    .required("نام کاربری الزامی است"),
  password: Yup.string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "رمز عبور باید یکسان باشد"
  ),
});

const loginValidate = Yup.object().shape({
  username: Yup.string()
    .required("نام کاربری الزامی است")
    .min(3, "نام کاربری حداقل باید ۳ کاراکتر باشد"),
  password: Yup.string()
    .required("رمز عبور الزامی است")
    .min(6, "رمز عبور حداقل باید ۶ کاراکتر باشد"),
});

export { signInValidate, loginValidate };
