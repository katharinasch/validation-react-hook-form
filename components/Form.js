import { isBefore, startOfDay } from "date-fns";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { SelectBirthDate } from "./SelectBirthDate";
import { end } from "./SelectBirthYear";

export const isOlderThen18Years = (date) => isBefore(startOfDay(date), end);

export const Form = () => {
  const {
    control,
    formState: { errors }
  } = useForm({ defaultValues: { birthdate: end } });

  return (
    <>
      <FormProvider>
        <div className="mt-12">
          <form>
            <h2 className="font-semibold text-xl">Birth Data</h2>
            <Controller
              control={control}
              name="birthdate"
              render={({ field: { ref, ...field } }) => (
                <SelectBirthDate {...field} />
              )}
            />
          </form>
        </div>
      </FormProvider>
    </>
  );
};
