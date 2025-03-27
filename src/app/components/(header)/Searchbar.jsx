"use strict";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
const Search = () => {
  return (
    <div>
      <CiSearch className="icon" size={20} />
      <hr />
      <FiShoppingBag className="icon" size={20} />
    </div>
  );
};

export default Search;
