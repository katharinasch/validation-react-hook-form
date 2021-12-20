import FormContext from "../../context";
import { useContext } from "react";
import { useFormData } from "../../context";


export default function ConfirmPurchase() {

  const { formStep } = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);

  };

  return (
    <div className={formStep === 1 ? 'block' : 'hidden'}>
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl">Thanks for your purchase! 🎉 </h2>
          </div>
        </div>
      </div>
    </div>
  );
}