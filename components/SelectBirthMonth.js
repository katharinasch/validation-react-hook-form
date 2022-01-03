/* This example requires Tailwind CSS v2.0+ */
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import {
  eachMonthOfInterval,
  endOfYear,
  getMonth,
  setMonth,
  startOfYear
} from "date-fns";
import { format } from "date-fns/fp";
import { Fragment } from "react";
import { isOlderThen18Years } from "./Form";
import { ListboxOption } from "./ListboxOption";

const formatMonth = format("MMM");

export const SelectBirthMonth = ({ onChange, value }) => {
  const handleChange = (date) => onChange(setMonth(value, getMonth(date)));

  const months = eachMonthOfInterval({
    start: startOfYear(value),
    end: endOfYear(value)
  });

  return (
    <Listbox value={value} onChange={handleChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            Month of Birth
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
              <span className="block truncate">{formatMonth(value)}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {months.map((month) => (
                  <ListboxOption
                    key={month.toDateString()}
                    value={month}
                    date={formatMonth(month)}
                    disabled={!isOlderThen18Years(month)}
                  ></ListboxOption>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
