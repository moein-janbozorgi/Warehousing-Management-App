import Product from "../components/Product";
import SearchBox from "../components/SearchBox";
import styles from "./AdminPage.module.css";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/config";
import { useState } from "react";
import { set } from "react-hook-form";

function AdminPage() {
  const [addModal, setAddmodal] = useState(false);

  const { data, isLoading } = useQuery({
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
        <button onClick={() => setAddmodal((s) => !s)}>افزودن محصول</button>
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
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      {/* {addModal ? <} */}
    </>
  );
}

export default AdminPage;
