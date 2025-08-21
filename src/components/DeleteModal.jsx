import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./DeleteModal.module.css";
import { deleteProduct } from "../services/config";
import { toast } from "react-toastify";

function DeleteModal({ product, setDeleteModal }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(["products"], (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.filter((p) => p.id !== id),
        };
      });
      setDeleteModal(null);
      toast.success("کالا با موفقیت حذف شد", { autoClose: 3000 });
    },
  });

  const deleteHandler = (id) => {
    mutate(id);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <img src="./src/assets/Close.png" alt="delete image" />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.actions}>
          <button onClick={() => deleteHandler(product)}>حذف</button>
          <button onClick={() => setDeleteModal(null)}>لغو</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
