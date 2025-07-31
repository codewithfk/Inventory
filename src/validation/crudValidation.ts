import * as Yup from "yup";
export const addItemValidationSchema=Yup.object().shape({
    name: Yup.string().required('Item name is required'),
    quantity: Yup.number().required('Quantity is required').positive().integer(),
    price: Yup.number().required('Price is required').positive(),
})