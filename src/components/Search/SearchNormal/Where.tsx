import { useState } from "react";
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

const Where: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<Suggestion | null>(null);

  const {
    isOpen,
    getLabelProps,
    getInputProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    setInputValue: setDownshiftInputValue,
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
    <div className="flex flex-col ml-[24px] border-r-[1px]">
      <div className="font-black text-left mt-3.5 text-xs ml-4">Where</div>
      <div className="relative">
        <input
          {...getInputProps({
            placeholder: "Search destinations",
            className:
              "text-left mt-1 text-sm mb-3.5 ml-4 w-[141px] mr-[46px] outline-none",
            onFocus: () => openMenu(),
            onBlur: () => closeMenu(),
          })}
        />
        <ul
          {...getMenuProps()}
          className="absolute z-10 mt-1 w-96 bg-white border-black rounded-3xl"
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
                    highlightedIndex === index ? "bg-white" : ""
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
  );
};

export default Where;
