import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { SearchSectionInputPlaceholder } from "../../configs/stringData";
import { getSearchValue } from "../../ducks/productFilter/actions";
import { getSortedSearchProductsRequested } from "../../ducks/sortedSearchProducts/actions";
import { SearchSectionStyle, SearchSectionForm } from "./StyleSearchSection";

function SearchSection({ setShowSearchSection }) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSearchRequest = (e) => {
    e.preventDefault();
    setShowSearchSection(false);
    dispatch(getSearchValue(searchInputValue));
    dispatch(getSortedSearchProductsRequested());
  };
  return (
    <SearchSectionStyle>
      <span
        role="presentation"
        onClick={() => {
          setShowSearchSection(false);
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <SearchSectionForm action="#" onSubmit={handleSearchRequest}>
        <input
          onChange={(e) => {
            setSearchInputValue(e.target.value);
          }}
          value={searchInputValue}
          type="text"
          placeholder={SearchSectionInputPlaceholder}
          required
        />
      </SearchSectionForm>
    </SearchSectionStyle>
  );
}

SearchSection.propTypes = {
  setShowSearchSection: PropTypes.func,
};
export default SearchSection;
