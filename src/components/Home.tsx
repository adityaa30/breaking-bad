import React, { useState } from "react";
import { AppBar, InputBase, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import useDebouncedText from "../hooks/useDebouncedSearchText";
import CharacterCardGrid from "./CharacterCardGrid";

import BackgroundImage from "../assets/home-background.png";
import BorderLinearProgress from "./BorderLineProgress";
import { Character } from "../types/api";
import { Pagination } from "@material-ui/lab";
import useFetch from "../hooks/useFetch";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    background: `url(${BackgroundImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
  },
  appBar: {
    height: theme.spacing(10),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  pagination: {
    alignSelf: "center",
    margin: theme.spacing(2),
  },
}));

const ITEMS_PER_PAGE = 10;

export default function Home() {
  const styles = useStyles();
  const [page, setPage] = useState(1);
  const paginationOffset = ITEMS_PER_PAGE * (page - 1);

  const {
    text: searchText,
    debouncedText: debouncedSearchText,
    setTextDebounced: setSearchText,
  } = useDebouncedText("", 1000);

  const { data: characters, loading } = useFetch<Array<Character>>(
    `https://breakingbadapi.com/api/characters?` +
      [
        `limit=${ITEMS_PER_PAGE}`,
        `offset=${paginationOffset}`,
        `name=${debouncedSearchText.replace(" ", "+")}`,
      ].join("&")
  );

  return (
    <div className={styles.root}>
      <AppBar className={styles.appBar}>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search by name…"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput,
            }}
            fullWidth
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        {loading && <BorderLinearProgress variant="indeterminate" value={50} />}
      </AppBar>

      {characters && <CharacterCardGrid characters={characters} />}

      <Pagination
        className={styles.pagination}
        count={10}
        onChange={(e, currentPage) => setPage(currentPage)}
        boundaryCount={1}
        siblingCount={0}
      />
    </div>
  );
}
