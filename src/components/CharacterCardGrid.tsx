import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Character } from "../types/api";
import CharacterCard from "./CharacterCard";

interface Props {
  characters: Array<Character>;
  showModal: (character: Character) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    display: "grid",
    [theme.breakpoints.down("sm")]: {
      display: "inline"
    },
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    overflowY: "auto",
    overflowX: "hidden"
  }
}));

export default function CharacterCardGrid({ characters, showModal }: Props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {characters.map((character) => (
        <CharacterCard
          key={character.char_id}
          character={character}
          showModal={showModal}
        />
      ))}
    </div>
  );
}
