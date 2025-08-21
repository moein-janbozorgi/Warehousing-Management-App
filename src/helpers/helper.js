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

const modalValidate = Yup.object().shape({
  name: Yup.string()
    .max(15, "نام محصول باید حداکثر 15 کلمه باشد")
    .required(" نام محصول را وارد کنید "),
  quantity: Yup.number()
    .typeError("تعداد را وارد کنید")
    .max(1000000, "حداکثر تعداد یک کالا 1 میلیون می‌باشد"),
  price: Yup.number()
    .typeError("قیمت را وارد کنید")
    .max(30000000, "حداکثر قیمت یک کالا 30 میلیارد می‌باشد"),
});

const toPersianNumber = (num) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num
    .toString()
    .split("")
    .map((c) => persianDigits[c] || c)
    .join("");
};

export { signInValidate, loginValidate, toPersianNumber, modalValidate };
