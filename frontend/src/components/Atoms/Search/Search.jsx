import React from "react";
import PropTypes from "prop-types";
import { Inputbar, SearchStyle } from "./Search.styled";
import { ReactComponent as SearchIcon } from "../../../assets/images/Icon.svg";

const Search = ({
  placeholderValue,
  searchHandler,
  defaultValue,
  searchRef,
  searchEnterHandler,
  searchInput,
  setSearchInput,
  ...props
}) => {
  const onChangeHandler = (e) => {
    if (setSearchInput) setSearchInput(e.target.value);
  };

  return (
    <SearchStyle>
      <SearchIcon />
      <Inputbar
        class="input"
        placeholder={placeholderValue}
        onChange={onChangeHandler ?? (() => {})}
        value={searchInput}
        ref={searchRef}
        onKeyUp={searchEnterHandler}
        autoFocus
        {...props}
      />
    </SearchStyle>
  );
};
Search.propTypes = {
  placeholderValue: PropTypes.string,
};
Search.defaultProps = {
  placeholderValue: "Search",
};
export default Search;
