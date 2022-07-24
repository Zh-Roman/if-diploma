import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { SearchSectionInputPlaceholder } from "../../configs/stringData";
import { getSearchValue } from "../../ducks/productFilter/actions";
import { getSortedSearchProductsRequested } from "../../ducks/sortedSearchProducts/actions";
import { SearchSectionStyle, SearchSectionForm } from "./StyleSearchSection";
import RefForScrollContext from "../../context/refForScrollContext";

function SearchSection() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const { setRefForSearchSection } = useContext(RefForScrollContext);
  const dispatch = useDispatch();

  const handleSearchRequest = (e) => {
    e.preventDefault();
    setRefForSearchSection(false);
    dispatch(getSearchValue(searchInputValue));
    dispatch(getSortedSearchProductsRequested());
  };
  return (
    <SearchSectionStyle>
      <span
        role="presentation"
        onClick={() => {
          setRefForSearchSection(false);
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

export default SearchSection;
