import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./DeleteModal.module.css";
import { deleteProduct } from "../services/config";
import { toast } from "react-toastify";

function DeleteModal({ product, setDeleteModal, page, setPage }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(["products", page], (oldData) => {
        if (!oldData) return oldData;
        const newData = oldData.data.filter((p) => p.id !== id);
        if (newData.length === 0 && page > 1) {
          setPage((page) => page - 1);
        }
        return { ...oldData, data: newData };
      });
      setDeleteModal(null);
      toast.success("کالا با موفقیت حذف شد", { autoClose: 3000 });
    },
  });

  const deleteHandler = () => {
    mutate(product);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <img src="./src/assets/Close.png" alt="delete image" />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.actions}>
          <button onClick={deleteHandler}>حذف</button>
          <button onClick={() => setDeleteModal(null)}>لغو</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
