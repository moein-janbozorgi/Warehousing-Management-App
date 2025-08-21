import Product from "../components/Product";
import SearchBox from "../components/SearchBox";
import styles from "./AdminPage.module.css";
import { useQuery } from "@tanstack/react-query";
import { filteredData, getData } from "../services/config";
import { useState } from "react";
import AddModal from "../components/AddModal";
import Editmodal from "../components/Editmodal";
import DeleteModal from "../components/DeleteModal";
import Paginate from "../components/Paginate";
import Loader from "../components/Loader";

function AdminPage() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  const { data, isLoading } = useQuery({
    queryFn: () => getData({ page, limit: 10 }),
    queryKey: ["products", page],
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  const filterData = filteredData(name, data);

  if (isLoading) return <Loader />;

  return (
    <>
      <SearchBox name={name} setName={setName} />
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
          {filterData && filterData.length > 0 ? (
            filterData.map((product) => (
              <Product
                key={product.id}
                product={product}
                setEditModal={setEditModal}
                setDeleteModal={setDeleteModal}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Vazirmatn",
                  color: "#282828",
                }}
              >
                داده‌ای وجود ندارد
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Paginate page={page} setPage={setPage} />
      {addModal ? <AddModal setAddModal={setAddModal} /> : null}
      {editModal ? (
        <Editmodal setEditModal={setEditModal} product={editModal} />
      ) : null}
      {deleteModal ? (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          product={deleteModal}
          page={page}
          setPage={setPage}
        />
      ) : null}
    </>
  );
}

export default AdminPage;
