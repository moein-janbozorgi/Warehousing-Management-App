import { LuSearch } from "react-icons/lu";
import styles from "./Searchbox.module.css";

function SearchBox() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <LuSearch className={styles.searchIcon} />
        <input type="text" placeholder="جستجو کالا" />
      </div>
      <div className={styles.leftSide}>
        <div className={styles.border}></div>
        <img src="./src/assets/7-4.png" alt="" />
        <div>
          <p>میلاد عظیمی</p>
          <span>مدیر</span>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
