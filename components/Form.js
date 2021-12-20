import { eachYearOfInterval, isBefore, subYears, startOfDay } from "date-fns";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useFormData } from "../context";
import { SelectBirthDay } from "./SelectBirthDay";
import { SelectBirthMonth } from "./SelectBirthMonth";
import { SelectBirthYear } from "./SelectBirthYear";

const start = subYears(new Date(), 78);
const end = subYears(new Date(), 18);

const years = eachYearOfInterval({ start, end }).reverse();

export const isOlderThen18Years = (date) => isBefore(startOfDay(date), end);

const validate = (date) =>
  isOlderThen18Years(date) || "You must be at least 18 years old";

export const Form = () => {
  const { makeContract } = useFormData();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { birthdate: end } });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <FormProvider>
        <div className="mt-12">
          <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-semibold text-xl">Birth Data</h2>
            <Controller
              control={control}
              name="birthdate"
              rules={{ validate }}
              render={({ field: { ref, ...field } }) => (
                <div className="sm:col-span-2 grid grid-cols-3 gap-4 mb-5">
                  <div className="mt-1">
                    <SelectBirthYear {...field} years={years} />
                  </div>
                  <div className="mt-1">
                    <SelectBirthMonth {...field} />
                  </div>
                  <div className="mt-1">
                    <SelectBirthDay {...field} />
                  </div>
                </div>
              )}
            />
            {errors.birthdate && (
              <span className="text-xs text-red-700">
                {errors.birthdate.message}
              </span>
            )}
            <div className="sm:col-span-2"></div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
              <div className="mt-16 sm:mt-16 sm:ml-3">
                <input
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
                />
              </div>
            </div>
          </form>
        </div>
      </FormProvider>
    </>
  );
};
