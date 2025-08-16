import { Link } from "react-router-dom";
import styles from "./SignUpPage.module.css";

function SignUpPage() {
  return (
    <div className={styles.container}>
      <h1>بوت‌کمپ‌بوتواستارت</h1>
      <div className={styles.form}> 
        <img src="/images/Union.png" alt="botostart-logo" />
        <h2>فرم ثبت نام</h2>
        <form>
          <input type="text"  placeholder="نام کاربری" />
          <input type="password" placeholder=" رمز عبور" />
          <input type="password" placeholder="تکرار رمز عبور" />
        </form>
        <button>ثبت نام</button>
        <Link to="/login">حساب کاربری دارید؟</Link>
      </div>
    </div>
  );
}

export default SignUpPage;
