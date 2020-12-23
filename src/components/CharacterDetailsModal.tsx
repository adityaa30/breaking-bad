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
  ListItemText
} from "@material-ui/core";
import { Character, Quote } from "../types/api";
import useFetch from "../hooks/useFetch";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    minWidth: "30vw",
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
      <List className={styles.quotes}>
        {quotes.map((quote) => (
          <ListItem key={quote.quote_id} button>
            <ListItemText primary={quote.quote} />
          </ListItem>
        ))}
      </List>
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
          <Typography className={styles.name} variant="h5">
            {character.name}
          </Typography>
          {quotesRender}
        </CardContent>
      </Card>
    </Modal>
  );
}
