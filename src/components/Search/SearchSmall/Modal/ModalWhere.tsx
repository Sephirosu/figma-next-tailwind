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
      <div className="border flex h-14 w-[90%] bg-white rounded">
        <BiSearch className="w-5 h-9 mt-2.5 ml-4 cursor-pointer" />
        <div className="relative flex-1">
          <input
            {...getInputProps({
              placeholder: "Search destinations",
              className: "ml-6 h-13 rounded outline-none w-[90%] mt-4",
              onFocus: () => openMenu(),
              onBlur: () => closeMenu(),
            })}
          />
          <ul
            {...getMenuProps()}
            className={`absolute z-10 mt-1 w-[95%] bg-white border-black rounded-3xl ${
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
        </div>
      </div>
    </>
  );
};

export default ModalWhere;
