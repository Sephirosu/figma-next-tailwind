import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useCombobox } from "downshift";
import { countries } from "countries-list";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface Suggestion {
  label: string;
  value: string;
}

const countryOptions: Suggestion[] = Object.values(countries).map(
  (country) => ({
    label: country.name,
    value: country.name,
  })
);

const ModalWhere: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<Suggestion | null>(null);

  const {
    isOpen,
    getLabelProps,
    getInputProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    openMenu,
    closeMenu,
  } = useCombobox({
    items: countryOptions,
    itemToString: (item) => (item ? item.value : ""),
    onInputValueChange: ({ inputValue }) => setInputValue(inputValue || ""),
    onSelectedItemChange: ({ selectedItem }) =>
      setSelectedItem(selectedItem || null),
  });

  return (
    <>
      <div className="text-xl font-semibold mb-3">Where to?</div>
      <div className="border flex h-14 bg-white mr-10">
        <BiSearch className="w-5 h-9 mt-2.5 ml-4 cursor-pointer" />
        <div className="relative flex-1 flex items-center">
          <input
            {...getInputProps({
              placeholder: "Search destinations",
              className: "ml-6 h-full rounded outline-none w-full",
              onFocus: () => openMenu(),
              onBlur: () => closeMenu(),
            })}
            style={{ minWidth: 0 }}
          />
        </div>
      </div>
      <ul
        {...getMenuProps()}
        className={`absolute z-10 mt-1 bg-white border-black rounded-3xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {isOpen &&
          countryOptions
            .filter((item) =>
              item.label.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((item, index) => (
              <li
                {...getItemProps({ item })}
                key={item.value}
                className={`cursor-pointer p-2 ${
                  highlightedIndex === index ? "bg-gray-200" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker />
                  {item.value}
                </div>
              </li>
            ))}
      </ul>
    </>
  );
};

export default ModalWhere;
