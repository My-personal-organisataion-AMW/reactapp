import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Food</Link>
      <Link to="/movies">Movies</Link>
      {/* <Link to="/preferences">Preferences</Link> */}
      {/* <Link to="/dashboard">Dashboard</Link> */}
    </nav>
  );
}
