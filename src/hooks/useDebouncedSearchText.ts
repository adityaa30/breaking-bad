import { useState, useCallback } from "react";
import { debounce } from "lodash";

export default function useDebouncedText(
  initValue: string,
  debounceTime: number
) {
  const [text, setText] = useState(initValue);
  const [debouncedText, setDebouncedText] = useState(initValue);

  const setDebouncedTextCallback = useCallback(
    debounce((nextValue) => setDebouncedText(nextValue), debounceTime),
    []
  );

  const setTextDebounced = (nextValue: string) => {
    setText(nextValue);
    setDebouncedTextCallback(nextValue);
  };

  return { text, debouncedText, setTextDebounced };
}
