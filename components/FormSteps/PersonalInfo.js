
import { Form } from "../Form";

export function PersonalInfo() {

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 ">
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
  );
}