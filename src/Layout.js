import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">{children}</div>
      <div className="footerContainer">
        <footer>
          <Link to="/">Food</Link>
          <Link to="/movies">Movies</Link>
          {/* <Link to="/preferences">Preferences</Link> */}
          {/* <Link to="/dashboard">Dashboard</Link> */}
        </footer>
      </div>
    </>
  );
}
