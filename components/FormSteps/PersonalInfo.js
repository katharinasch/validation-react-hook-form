
import { Form } from "../Form"
import { useFormData } from "../../context";

export default function PersonalInfo() {

  const { formStep } = useFormData();

  return (
    <div className={formStep === 0 ? 'block' : 'hidden'}>
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 ">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl">Please fill out the form</h2>
          </div>
        </div>
        <div>
          <div className='col-span-2 px-12'>
            <Form />
          </div>
        </div>
      </div>
    </div> 
  );
}