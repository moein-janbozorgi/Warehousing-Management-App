import { useForm } from "react-hook-form";
import { modalValidate } from "../helpers/helper";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import styles from "./Editmodal.module.css";
import { editProduct } from "../services/config";

function Editmodal({ setEditModal, product }) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(modalValidate),
    defaultValues: {
      name: product?.name,
      price: product?.price,
      quantity: product?.quantity,
    },
  });

  const { mutate } = useMutation({
    mutationFn: (payload) => editProduct(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setEditModal(null);
      toast.success("کالا با موفقیت تغییر داده شد", {
        autoClose: 3000,
      });
    },
    onError: () => {
      toast.error("کالا تغییر داده نشد دوباره امتحان کنید");
    },
  });

  const onSubmit = (data) => {
    const payload = {
      id: product.id,
      ...data,
    };
    mutate(payload);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>ایجاد محصول جدید</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.forms}>
            <label>نام کالا</label>
            <input type="text" placeholder="نام کالا" {...register("name")} />
            <p>{errors.name?.message}</p>
          </div>
          <div className={styles.forms}>
            <label>تعداد موجودی</label>
            <input
              type="number"
              placeholder="تعداد "
              {...register("quantity")}
            />
            <p>{errors.quantity?.message}</p>
          </div>

          <div className={styles.forms}>
            <label>قیمت</label>
            <input type="number" placeholder="قیمت" {...register("price")} />
            <p>{errors.price?.message}</p>
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.addBtn}>
              ثبت اطلاعات جدید
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={() => setEditModal(null)}
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Editmodal;
