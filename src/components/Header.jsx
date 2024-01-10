import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header>
      <h1>
        <FontAwesomeIcon icon="stopwatch" className="icon" />
        React Counter v2
      </h1>
    </header>
  );
}
