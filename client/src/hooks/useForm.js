import { useState } from "react";

export default function useForm(initialValues, submitHandler) {
  const [values, setValues] = useState(initialValues);

  const onChangeHandler = (e) => {
    let value = '';

        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
            default:
                value = e.target.value;
                break;
        }

    setValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const onSubmit = (e) => {

    e.preventDefault();

    submitHandler(values);
  };

  return {
    values,
    onChangeHandler,
    onSubmit
  }
}
