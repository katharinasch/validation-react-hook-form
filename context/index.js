import { useState, createContext, useContext, useEffect } from "react";
import { useRouter } from 'next/router';
import get from "lodash.get";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const router = useRouter();
  const formStep = parseInt(get(router, ["query", "step"]), 10) || 0;
  
  const makeContract = () => {
    const nextStep = formStep + 1;
    router.push(`?step=${nextStep}`);
  }




  return (
    <FormContext.Provider value={{ makeContract, formStep }}>
      {children}
    </FormContext.Provider>
  );
};


export default FormContext;
export const useFormData = () => useContext(FormContext);
