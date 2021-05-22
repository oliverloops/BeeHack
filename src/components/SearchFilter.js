import React from "react";
import { IoMdSearch } from "react-icons/io";
import { AutoComplete, Row, Col } from "@geist-ui/react";

const SearchFilter = ({ getField }) => {
  return (
    <div className="search-container">
      <form>
        <IoMdSearch className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Busca algún grupo..."
          onChange={(e) => getField(e)}
        />
      </form>
    </div>
  );
};

export default SearchFilter;
