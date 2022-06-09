import {IconButton, Slide} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import {useUIContext} from "../../context/UI";
import {SearchBoxContainer, SearchField} from "../../styles/search";

const Search = () => {
  const {showSearch, setShowSearch} = useUIContext();
  return (
    <Slide direction="down" in={showSearch} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          fullWidth
          color="secondary"
          variant="standard"
          placeholder="Search"
        />
        <IconButton>
          <SearchIcon sx={{xs: "2rem", md: "3rem"}} color="secondary" />
        </IconButton>
        <IconButton
          onClick={() => setShowSearch(false)}
          sx={{position: "absolute", top: 10, right: 10}}
        >
          <CloseIcon sx={{fontSize: "4rem"}} color="secondary" />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
};

export default Search;
