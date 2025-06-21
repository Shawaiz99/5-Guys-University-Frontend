import { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import "./SearchBar.css";

function SearchBar({ placeholder = "Search...", onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className="my-4 mx-auto search-bar col-10">
      <FiSearch className="text-gray-500 position-absolute z-2 fisearch" />
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />
      <FiFilter
        className="cursor-pointer position-absolute  z-2 fifilter"
        onClick={() => console.log("Filter options clicked")}
      />
    </div>
  );
}

export default SearchBar;
