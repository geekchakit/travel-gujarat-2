// src/context/FormContext.js
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  return (
    <FormContext.Provider
      value={{ isFormOpen, setIsFormOpen, toggleForm, openForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
