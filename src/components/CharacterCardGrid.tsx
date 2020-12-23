import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Character } from "../types/api";
import CharacterCard from "./CharacterCard";

interface Props {
  characters: Array<Character>;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    display: "grid",
    [theme.breakpoints.down("sm")]: {
      display: "inline",
    },
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    overflowY: "hidden",
    overflowX: "hidden",
  },
}));

export default function CharacterCardGrid({ characters }: Props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {characters.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
}
