import Product from "../components/Product";
import SearchBox from "../components/SearchBox";
import styles from "./AdminPage.module.css";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/config";
import { useState } from "react";
import AddModal from "../components/AddModal";
import Editmodal from "../components/Editmodal";
import DeleteModal from "../components/DeleteModal";

function AdminPage() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  const { data } = useQuery({
    queryFn: getData,
    queryKey: ["products"],
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  return (
    <>
      <SearchBox />
      <div className={styles.container}>
        <div>
          <img src="./src/assets/setting.png" />
          <p>مدیریت کالا</p>
        </div>
        <button onClick={() => setAddModal((s) => !s)}>افزودن محصول</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه کالا</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((product) => (
            <Product
              key={product.id}
              product={product}
              setEditModal={setEditModal}
              setDeleteModal={setDeleteModal}
            />
          ))}
        </tbody>
      </table>
      {addModal ? <AddModal setAddModal={setAddModal} /> : null}
      {editModal ? (
        <Editmodal setEditModal={setEditModal} product={editModal} />
      ) : null}
      {deleteModal ? (
        <DeleteModal setDeleteModal={setDeleteModal} product={deleteModal} />
      ) : null}
    </>
  );
}

export default AdminPage;
