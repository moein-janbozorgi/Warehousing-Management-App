import { Link } from "react-router-dom";
import styles from "./StartPage.module.css";

function StartPage() {
  return (
    <div className={styles.container}>
      <img src="images/Thumbnail.png" alt="" />
      <Link to="/signup">شروع</Link>
    </div>
  );
}

export default StartPage;
