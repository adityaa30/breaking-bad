import React, { useRef, useState } from "react";
import {
  Modal,
  Backdrop,
  Fade,
  makeStyles,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  CardActions
} from "@material-ui/core";
import { Character, Quote } from "../types/api";
import useFetch from "../hooks/useFetch";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    minWidth: "50vw",
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(40px)",
    boxShadow: "20px 20px 22px rgba(0,0,0,0.2)",
    borderRadius: 8,
    padding: 4
  },
  cardContent: {
    display: "flex",
    flexDirection: "column"
  },
  name: {
    fontWeight: 900
  },
  quotes: {
    maxHeight: "30vh",
    overflowY: "scroll"
  },
  overlayed: {
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
    padding: 10,
    margin: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8
  }
}));

interface Props {
  character: Character;
  setShowModal: (newValue: boolean) => void;
}

export default function MoreDetailsModal({ character, setShowModal }: Props) {
  const styles = useStyles();
  const { data: quotes, loading } = useFetch<Array<Quote>>(
    `https://breakingbadapi.com/api/quote?author=${character.name.replace(
      " ",
      "+"
    )}`
  );

  let quotesRender = (
    <Typography variant="subtitle1">
      {loading ? "Loading Quotes..." : "No quotes available"}
    </Typography>
  );

  if (!loading && quotes !== null && quotes.length > 0) {
    quotesRender = (
      <>
        <Typography variant="h6">Quotes Written</Typography>
        <List className={styles.quotes}>
          {quotes.map((quote) => (
            <ListItem key={quote.quote_id}>
              <ListItemText primary={quote.quote} />
            </ListItem>
          ))}
        </List>
      </>
    );
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={styles.modal}
      open={true}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <Card className={styles.root}>
        <CardContent className={styles.cardContent}>
          <Typography className={styles.name} variant="h4">
            {character.name}
          </Typography>
          <Typography className={styles.overlayed} variant="subtitle1">
            🎬 Portrayed by <b>{character.portrayed}</b>
          </Typography>
          <Typography className={styles.overlayed} variant="subtitle1">
            📺 Appears in <b>{character.appearance.join(", ")} seasons</b>
          </Typography>
          {quotesRender}
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
}
