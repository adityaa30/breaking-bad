import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Character } from "../types/api";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    backdropFilter: "blur(20px)",
    boxShadow: "20px 20px 22px rgba(0,0,0,0.2)",
    borderRadius: 8,
    margin: 24,
  },
}));

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <pre>{JSON.stringify(character, null, 1)}</pre>
    </div>
  );
}
