import { useState, useRef, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

export const useAutocomplete = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const autocompleteService =
    useRef<google.maps.places.AutocompleteService | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  useEffect(() => {
    if (isLoaded && !autocompleteService.current) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
  }, [isLoaded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value && autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
        { input: value },
        (predictions) => {
          setSuggestions(predictions || []);
        }
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (
    suggestion: google.maps.places.AutocompletePrediction
  ) => {
    setInputValue(suggestion.description);
    setSuggestions([]);
  };

  return {
    inputValue,
    suggestions,
    handleInputChange,
    handleSuggestionClick,
    isLoaded,
  };
};
