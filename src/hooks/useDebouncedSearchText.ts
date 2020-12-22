import { useState, useCallback, ChangeEvent } from "react";
import { debounce } from "lodash";

export default function useDebouncedSearchText(
  initValue: string,
  debounceTime: number
) {
  const [text, setText] = useState(initValue);
  const [debouncedText, setDebouncedText] = useState(initValue);

  const setDebouncedTextCallback = useCallback(
    debounce((nextValue) => setDebouncedText(nextValue), debounceTime),
    []
  );

  const handleTextChange = (nextValue: string) => {
    setText(nextValue);
    setDebouncedTextCallback(nextValue);
  };

  return { text, debouncedText, handleTextChange};
}
