import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { loginValidate } from "../helpers/helper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { loginUser } from "../services/config";

function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidate),
  });

  const { mutate } = useMutation({
    mutationFn: (payload) => loginUser(payload),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);

      toast.success("ورود موفق", {
        autoClose: 3000,
        onClose: () => navigate("/dashboard"),
      });
    },
    onError: () => {
      toast.error("نام کاربری یا رمز عبور اشتباه است");
    },
  });

  const onSubmit = (data) => {
    mutate({
      username: data.username,
      password: data.password,
    });
  };

  return (
    <div className={styles.container}>
      <h1>بوت‌کمپ‌بوتواستارت</h1>
      <div className={styles.form}>
        <img src="./src/assets/Union.png" alt="botostart-logo" />
        <h2>فرم ورود </h2>
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
          <p>{errors.password?.message}</p>
          <button type="submit">ورود </button>
          <Link to="/signup">ایجاد حساب کاربری!</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
