import { CheckIcon } from "@heroicons/react/solid";
import { Listbox } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const ListboxOption = ({ value, date, disabled }) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        classNames(
          active ? "text-white bg-yellow-500" : "text-gray-600",
          "cursor-default select-none relative py-2 pl-3 pr-9"
        )
      }
      value={value}
      disabled={disabled}
    >
      {({ selected, active }) => (
        <>
          <span
            className={classNames(
              selected ? "font-semibold" : "font-normal",
              disabled ? "opacity-50" : "",
              "block truncate"
            )}
          >
            {" "}
            {date}{" "}
          </span>
          {selected ? (
            <span
              className={classNames(
                active ? "text-white" : "text-yellow-500",
                "absolute inset-y-0 right-0 flex items-center pr-4"
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
};
