import Logo from "../Logo";
import HeaderActions from "./components/HeaderActions";
import HeaderFormFilters from "./components/HeaderFormFilters";
import HeaderLinks from "./components/HeaderLinks";
import HeaderList from "./components/HeaderList";
import HeaderListItem from "./components/HeaderListItem";

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src="/Logo.svg" alt="Logo" />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>
      </HeaderList>
    </header>
  );
};

export default Header;
