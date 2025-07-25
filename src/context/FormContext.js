import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FormContext = createContext();

function FormProvider({ children }) {
  const [formData, setFormData] = useLocalStorage("kycForm", {
    name: "",
    dob: "",
    email: "",
    city: "",
    state: "",
    pincode: "",
    pan: "",
    aadhar: "",
    photo: null,
  });

  const [errors, setErrors] = useLocalStorage("kycErrors", {});

  return (
    <FormContext.Provider value={{ formData, setFormData, errors, setErrors }}>
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormProvider };
