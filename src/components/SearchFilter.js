import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchFilter = ({ getField }) => {
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="Busca algún grupo..."
          onChange={(e) => getField(e)}
        />
        <IoMdSearch className="search-icon" size={25} />
      </form>
    </div>
  );
};

export default SearchFilter;
