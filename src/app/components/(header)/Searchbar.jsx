"use client";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
const Search = () => {
  return (
    <div className="flex gap-2.5">
      <CiSearch className="text-amber-50" size={20} />
      <hr className="m-0 h-5 border-1 border-x14 text-amber-50" />
      <FiShoppingBag className="text-amber-50" size={20} />
    </div>
  );
};

export default Search;
