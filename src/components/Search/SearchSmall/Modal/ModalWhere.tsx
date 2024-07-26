import { BiSearch } from "react-icons/bi";
import Autosuggest from "react-autosuggest";
import { countries } from "countries-list";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { useState } from "react";

const countryOptions = Object.values(countries).map((country) => ({
  label: country.name,
  value: country.name,
}));

const ModalWhere = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : countryOptions.filter(
          (option) =>
            option.label.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: "Search destinations",
    value,
    onChange,
  };

  return (
    <>
      <div className="text-xl font-semibold mb-3 ">Where to?</div>

      <div className="border flex h-14 w-[95%] bg-white rounded ">
        <BiSearch className="w-5 h-9 mt-2.5 ml-4 cursor-pointer" />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={(suggestion) => suggestion.value}
          renderSuggestion={(suggestion) => (
            <div className="flex items-center  cursor-pointer">
              <span className="flex gap-3">
                <HiOutlineLocationMarker className="mt-1" />
                {suggestion.value}
              </span>
            </div>
          )}
          inputProps={inputProps}
          theme={{
            container: "relative",
            input: "ml-6 h-13 rounded outline-none w-full mt-4 ",
            suggestionsContainer:
              "absolute z-10 mt-1 w-96 bg-white border-black rounded-3xl ",
            suggestion: "cursor-pointer p-2",
            suggestionHighlighted: "bg-gray-200",
          }}
        />
      </div>
    </>
  );
};

export default ModalWhere;
