import { useState } from "react";

function useForm(initialValues = {}, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await onSubmit(values);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    loading,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useForm;
