import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = (props) => {
  return (
    <header>
      <h1>
        <FontAwesomeIcon icon="list" />
        <span>{props.head}</span>
      </h1>
    </header>
  );
};
export default Header;
