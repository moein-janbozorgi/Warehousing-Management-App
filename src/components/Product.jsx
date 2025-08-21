import { toPersianNumber } from "../helpers/helper";
import styles from "./Products.module.css";

function Product({ product, setEditModal, setDeleteModal }) {
  return (
    <>
      <tr className={styles.container}>
        <td>{product.name}</td>
        <td>{toPersianNumber(product.quantity)}</td>
        <td>{toPersianNumber(product.price)} هزار تومن</td>
        <td>{product.id}</td>
        <td>
          <div className={styles.buttons}>
            <button onClick={() => setEditModal(product)}>
              <img src="./src/assets/edit.png" />
            </button>
            <button onClick={() => setDeleteModal(product.id)}>
              <img src="./src/assets/trash.png" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Product;
