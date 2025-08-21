import { Link } from "react-router-dom";
import styles from "./StartPage.module.css";

function StartPage() {
  return (
    <div className={styles.container}>
      <img src="./src/assets/Thumbnail.png" />
      <Link to="/signup">شروع</Link>
    </div>
  );
}

export default StartPage;
