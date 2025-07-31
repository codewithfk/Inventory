import { useFormik } from 'formik';
import { useInventory } from '../context/InventoryContext';
import { useEffect } from 'react';
import { addItemValidationSchema } from '../validation/crudValidation';

const useAddItem = (onClose?:()=>void) => {
  const { addOrUpdateItem, currentItem, setCurrentItem } = useInventory();
  useEffect(() => {
    return () => setCurrentItem(undefined);
  }, []);
  const formik = useFormik({
    initialValues: {
      name: currentItem?.name || '',
      quantity: currentItem?.quantity?.toString() || '',
      price: currentItem?.price?.toString() || '',
    },
    validationSchema:addItemValidationSchema,
    onSubmit: (data) => {
        addOrUpdateItem({
            id: currentItem?.id || Date.now().toString(),
            name: data.name,
            quantity: Number(data.quantity),
            price: Number(data.price),
          });
          onClose&&   onClose();
          setCurrentItem(undefined);
    },
  });
  return{formik,currentItem,setCurrentItem}
};
export default useAddItem;
