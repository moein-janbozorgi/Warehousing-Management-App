import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <h1>بوت‌کمپ‌بوتواستارت</h1>
      <div className={styles.form}>
        <img src="/images/Union.png" alt="botostart-logo" />
        <h2>فرم ورود </h2>
        <form>
          <input type="text" placeholder="نام کاربری" />
          <input type="password" placeholder=" رمز عبور" />
        </form>
        <button>ورود </button>
        <Link to="/signup">ایجاد حساب کاربری!</Link>
      </div>
    </div>
  );
}

export default LoginPage;
