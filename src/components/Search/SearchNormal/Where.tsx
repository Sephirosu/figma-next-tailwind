import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
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
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const getSuggestions = (value: string): Suggestion[] => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : countryOptions.filter(
          (option) =>
            option.label.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (
    event: React.FormEvent<HTMLElement>,
    { newValue }: { newValue: string }
  ) => {
    setValue(newValue);
  };

  const inputProps: Autosuggest.InputProps<Suggestion> = {
    placeholder: "Search destinations",
    value,
    onChange,
  };

  return (
    <div className="flex flex-col ml-[24px] border-r-[1px] ">
      <div className="font-black text-left mt-3.5 text-xs ml-4">Where</div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion.value}
        renderSuggestion={(suggestion) => (
          <div className="flex items-center cursor-pointer">
            <span className="flex gap-3">
              <HiOutlineLocationMarker className="mt-1" />
              {suggestion.value}
            </span>
          </div>
        )}
        inputProps={inputProps}
        theme={{
          container: "relative",
          input:
            "text-left mt-1 text-sm mb-3.5 ml-4 w-[139px] mr-[46px] outline-none",
          suggestionsContainer:
            "absolute z-10 mt-1 w-96 bg-white border-black rounded-3xl",
          suggestion: "cursor-pointer p-2",
          suggestionHighlighted: "bg-white",
        }}
      />
    </div>
  );
};

export default Where;
