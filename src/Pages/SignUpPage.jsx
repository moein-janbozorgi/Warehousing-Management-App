import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInValidate } from "../helpers/helper";
import { registerUser } from "../services/config";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

function SignUpPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInValidate),
  });

  const { mutate } = useMutation({
    mutationFn: (payload) => registerUser(payload),
    onSuccess: () => {
      toast.success("ثبت نام موفق. درحال هدایت...", {
        autoClose: 3000,
        onClose: () => navigate("/login"),
      });
    },
    onError: () => {
      toast.error("ثبت نام موفقیت امیز نبود دوباره تکرار کنید");
    },
  });

  const onSubmit = (data) => {
    console.log("user data:", data);
    const payload = {
      username: data.username,
      password: data.password,
    };
    mutate(payload);
  };

  return (
    <div className={styles.container}>
      <h1>بوت‌کمپ‌بوتواستارت</h1>
      <div className={styles.form}>
        <img src="./src/assets/Union.png" alt="botostart-logo" />
        <h2>فرم ثبت نام</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="نام کاربری"
            {...register("username")}
          />
          <p>{errors.username?.message}</p>
          <input
            type="password"
            placeholder=" رمز عبور"
            {...register("password")}
          />
          <p>{errors.password?.message} </p>
          <input
            type="password"
            placeholder="تکرار رمز عبور"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
          <button type="submit">ثبت نام</button>
          <Link to="/login">حساب کاربری دارید؟</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
