import styles from "./Paginate.module.css";

function Paginate({ page, setPage }) {
  const pages = [...Array(10).keys()].map((i) => i + 1);

  return (
    <div className={styles.paginate}>
      {pages.map((num) => (
        <button
          key={num}
          className={`${styles.buttons} ${
            page === num ? styles.activeButton : ""
          }`}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Paginate;
