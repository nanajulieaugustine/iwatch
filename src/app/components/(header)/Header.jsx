"use strict";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Searchbar";
const Header = () => {
  return (
    <header className="flex items-baseline justify-between gap-5">
      <Logo></Logo>
      <Nav></Nav>
      <Search></Search>
    </header>
  );
};
export default Header;
