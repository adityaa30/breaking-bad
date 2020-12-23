import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Theme,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Character } from "../types/api";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    backdropFilter: "blur(20px)",
    boxShadow: "20px 20px 22px rgba(0,0,0,0.2)",
    borderRadius: 8,
    margin: 24,
    padding: 0
  },
  image: {
    objectFit: "cover",
    width: 200,
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  cardContent: {
    flexGrow: 5,
    display: "flex",
    flexDirection: "column",
    width: "auth"
  },
  name: {
    fontWeight: 900
  },
  nickname: {
    fontWeight: 400
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row"
  },
  overlayedText: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    padding: 6,
    margin: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8
  },
  occupationContainer: {
    margin: 8,
    padding: 12,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8
  },
  occupationText: {
    fontWeight: 600
  },
  occupationChip: {
    borderWidth: 2,
    marginLeft: 4,
    marginTop: 6
  },
  moreDetailsButton: {
    textTransform: "none"
  }
}));

interface Props {
  character: Character;
  showModal: (character: Character) => void;
}

export default function CharacterCard({ character, showModal }: Props) {
  const styles = useStyles();

  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.image}
        image={character.img}
        title={character.name}
      />
      <CardContent className={styles.cardContent}>
        <Typography className={styles.name} variant="h4">
          {character.name}
        </Typography>
        <Typography className={styles.nickname} gutterBottom variant="h5">
          {character.nickname}
        </Typography>

        <div className={styles.innerContainer}>
          <Typography className={styles.overlayedText} variant="subtitle1">
            🎂 {character.birthday}
          </Typography>
          <Typography className={styles.overlayedText} variant="subtitle1">
            ⏳ {character.status}
          </Typography>
        </div>

        <div className={styles.occupationContainer}>
          <Typography
            className={styles.occupationText}
            gutterBottom
            variant="subtitle1"
          >
            Occupation
          </Typography>
          {character.occupation.map((val, idx) => (
            <Chip
              key={idx}
              className={styles.occupationChip}
              label={val}
              variant="outlined"
            />
          ))}
        </div>
        <CardActions>
          <Button
            className={styles.moreDetailsButton}
            variant="outlined"
            size="medium"
            onClick={() => showModal(character)}
          >
            More
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
