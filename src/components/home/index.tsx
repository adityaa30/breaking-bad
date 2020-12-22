import { TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import useDebouncedText from "../../hooks/useDebouncedSearchText";
import CharacterCardGrid from "../character-card-grid";

import "./index.css";

export default function Home() {
  const {
    text: searchText,
    debouncedText: debouncedSearchText,
    handleTextChange: handleSearchTextChange,
  } = useDebouncedText("", 1000);

  useEffect(() => {
    // ToDo: Send API request
  }, [debouncedSearchText]);

  return (
    <div className="Home">
      <TextField
        id="outlined-basic"
        style={{ margin: 24 }}
        value={searchText}
        onChange={(event) => handleSearchTextChange(event.target.value)}
        label="Search"
        placeholder="Walter White"
        helperText="Search your favourite character name"
        variant="outlined"
        size={"medium"}
        fullWidth
      />

      <CharacterCardGrid />
    </div>
  );
}
