import { BiSearch } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

import { useAutocomplete } from "@/app/hooks/useAutocomplete";

const ModalWhere: React.FC = () => {
  const {
    inputValue,
    suggestions,
    handleInputChange,
    handleSuggestionClick,
    isLoaded,
  } = useAutocomplete();
  return (
    <>
      <div className="text-xl font-semibold mb-3">Where to?</div>
      <div className="border flex h-14 bg-white mr-10">
        <BiSearch className="w-5 h-9 mt-2.5 ml-4 cursor-pointer" />
        <div className="relative flex-1 flex items-center">
          {isLoaded && (
            <input
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search destinations"
              className="ml-6 h-full rounded outline-none w-full"
              style={{ minWidth: 0 }}
            />
          )}
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg  w-[363px] -ml-9 top-14  overflow-hidden">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="flex items-center px-4 py-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="mr-3  ">
                    <SlLocationPin />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">
                      {suggestion.structured_formatting.main_text}
                    </span>

                    <span className="text-sm text-gray-500">
                      {suggestion.structured_formatting.secondary_text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalWhere;
