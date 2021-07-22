import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is required").min(2, "name must be at least 2 characters"),

  size: yup.string().oneOf(["small", "medium", "large"], "Size is required"),

  sauce: yup.string().oneOf(["original", "garlic ranch", "bbq sauce", "spinach alfredo"], "sauce is required"),

  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  canadian: yup.boolean(),
  green: yup.boolean(),
  pineapple: yup.boolean(),
  extra: yup.boolean(),

  special: yup.string().notRequired(),
});
