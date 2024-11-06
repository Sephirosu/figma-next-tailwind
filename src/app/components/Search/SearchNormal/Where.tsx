import { SlLocationPin } from "react-icons/sl";
import { useAutocomplete } from "@/app/hooks/useAutocomplete";

const Where: React.FC = () => {
  const {
    inputValue,
    suggestions,
    handleInputChange,
    handleSuggestionClick,
    isLoaded,
  } = useAutocomplete();
  return (
    <div className="flex flex-col ml-[24px] border-r-[1px]">
      <div className="font-black text-left mt-3.5 text-xs ml-4">Where</div>

      <div className="relative ">
        {isLoaded && (
          <input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search destinations"
            className="text-left mt-1 text-sm mb-3.5 ml-4 w-[141px] mr-[46px] outline-none"
          />
        )}

        {suggestions.length > 0 && (
          <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-[363px] -ml-7   overflow-hidden">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <div className="mr-3 bg-gray-300 p-3 rounded-lg">
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
  );
};

export default Where;
