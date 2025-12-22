import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCategory } from "./productSlice";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff", // white background
  "&:hover": {
    backgroundColor: "#f0f0f0", // slightly gray on hover
  },
  width: "100%",
  maxWidth: 300,
  boxShadow: "0px 1px 3px rgba(0,0,0,0.2)", // subtle shadow for depth
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#555", // icon color
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black", // text color
  width: "100%",
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
}));

function ProductFilters() {
  const dispatch = useDispatch();
  const { search, category } = useSelector((state) => state.products);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        my: 4,
      }}
    >
      {/* Search Bar */}
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search product…"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          inputProps={{ "aria-label": "search product" }}
        />
      </Search>

      {/* Category Dropdown */}
      <FormControl sx={{ minWidth: 150, backgroundColor: "#ffffff", borderRadius: 1, boxShadow: "0px 1px 3px rgba(0,0,0,0.2)" }}>
        <Select
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
          displayEmpty
          sx={{ color: "black" }} // text color
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="jewelery">Jewelery</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ProductFilters;
