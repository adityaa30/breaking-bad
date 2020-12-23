import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import useDebouncedText from "../hooks/useDebouncedSearchText";
import useFetch from "../hooks/useFetch";
import { Character } from "../types/api";
import CharacterCardGrid from "./CharacterCardGrid";

import DummyData from "../assets/dummy-data.json";

import BackgroundImage from "../assets/home-background.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: `url(${BackgroundImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
  },
  search: {
    backdropFilter: "blur(10px)",
    margin: 24,
  },
}));

export default function Home() {
  const styles = useStyles();

  const {
    text: searchText,
    debouncedText: debouncedSearchText,
    setTextDebounced: setSearchText,
  } = useDebouncedText("", 1000);

  // const { data: characters } = useFetch<Array<Character>>(
  //   `https://breakingbadapi.com/api/characters?name=${debouncedSearchText.replace(
  //     " ",
  //     "+"
  //   )}`
  // );
  const characters = DummyData as Array<Character>; 

  return (
    <div className={styles.root}>
      <TextField
        id="outlined-basic"
        className={styles.search}
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        label="Search"
        placeholder="Walter White"
        helperText="Search your favourite character name"
        variant="outlined"
        size={"medium"}
      />

      {characters && <CharacterCardGrid characters={characters} />}
    </div>
  );
}
